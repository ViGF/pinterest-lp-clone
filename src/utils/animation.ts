export interface setupAnimationProps {
    timePerScreen?: number
    exitDelay?: number
    index: number
    oldIndex?: number
    exitNow?: boolean
    grids?: HTMLCollectionOf<Element>
    headings?: HTMLCollectionOf<Element>
    indicators?: HTMLCollectionOf<Element>
    node?: HTMLDivElement | null
}

/*export function initCycle(props: setupAnimationProps) {
    let exitNow = props.exitNow
    
    let nextIndex = exitNow ? props?.index ? --props.index : - 1 : props?.index
    nextIndex = nextIndex + 1 > 2 ? 0 : nextIndex + 1

    enterScreen({...props, index: nextIndex})

    setTimeout(() => {
        exitScreen({...props, index: exitNow ? --nextIndex : nextIndex})
    }, exitNow ? 0 : props.timePerScreen)
}*/

export function enterScreen({ index = -1, ...props }: setupAnimationProps) {
    const heading = props.headings?.[index]
    const grid = props.grids?.[index]
    props.indicators?.[index].classList.add('active')

    const gridColumns = grid?.querySelectorAll('.column')

    grid?.classList.add('active')

    gridColumns?.forEach(column => {
        column.classList.remove('animate-before')
    })

    heading?.classList.remove('animate-before')
    heading?.classList.add('to-remove')
}

export function exitScreen(props: setupAnimationProps) {
    const heading = props.node?.getElementsByClassName('to-remove')[0]
    const grid = props.node?.getElementsByClassName('grid active')[0]

    const gridColumns = grid?.querySelectorAll('.column')

    heading?.classList.add('animate-after')
    heading?.classList.remove('to-remove')

    gridColumns?.forEach(column => {
        column.classList.add('animate-after')
    })

    setTimeout(() => {
        gridColumns?.forEach(column => {
            column?.classList.remove('animate-after')
            column?.classList.add('animate-before')
        })
    }, 1000)

    setTimeout(() => {
        heading?.classList.remove('animate-after')
        heading?.classList.add('animate-before')
    }, 1000)

    /*setTimeout(() => {
        grid?.classList.remove('active')
        indicator?.classList.remove('active')

        //setupAnimationCycle({ ...props, exitNow: false})
    }, props.exitNow ? 0 : props.exitDelay)*/
}

export function removeActive(node: HTMLDivElement | null | undefined) {
    const grid = node?.getElementsByClassName('grid active')[0]
    const indicator = node?.getElementsByClassName('indicator active')[0]

    grid?.classList.remove('active')
    indicator?.classList.remove('active')

    console.log('exit')
}
