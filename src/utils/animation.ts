interface ScreenProps {
    grids: setupAnimationProps['grids']
    headings: setupAnimationProps['headings']
    exitDelay?: setupAnimationProps['exitDelay']
    timePerScreen?: setupAnimationProps['timePerScreen']
    index: number
}

function enterScreen({ grids, headings, index }: ScreenProps) {
    const heading = headings?.[index]
    const grid = grids?.[index]
    console.log('enter')


    const gridColumns = grid?.querySelectorAll('.column')

    grid?.classList.add('active')

    gridColumns?.forEach(column => {
        column.classList.remove('animate-before')
    })

    heading?.classList.remove('animate-before')
}

function exitScreen({ grids, headings, exitDelay, index }: ScreenProps) {
    const heading = headings?.[index]
    const grid = grids?.[index]

    const gridColumns = grid?.querySelectorAll('.column')

    gridColumns?.forEach(column => {
        column.classList.add('animate-after')
    })
    setTimeout(() => {
        gridColumns?.forEach(column => {
            column?.classList.remove('animate-after')
            column?.classList.add('animate-before')
        })
    }, 3000)

    heading?.classList.add('animate-after')
    setTimeout(() => {
        heading?.classList.remove('animate-after')
        heading?.classList.add('animate-before')
    }, 1000)

    setTimeout(() => {
        console.log('exit')
        grid?.classList.remove('active')
    }, exitDelay)
}

interface setupAnimationProps {
    timePerScreen: number
    exitDelay: number
    index?: number
    grids: HTMLCollectionOf<Element> | undefined
    headings: HTMLCollectionOf<Element> | undefined
}

export function setupAnimationCycle({
    timePerScreen,
    exitDelay,
    index = -1,
    grids,
    headings }: setupAnimationProps) {

    const cycleTime = timePerScreen + exitDelay * 2
    let nextIndex = index

    function initCycle() {
        nextIndex = nextIndex + 1 > 2 ? 0 : nextIndex + 1
        console.log(nextIndex)
        
        enterScreen({
            grids,
            headings,
            index: nextIndex
        })

        setTimeout(() => exitScreen({
            grids,
            headings,
            exitDelay,
            index: nextIndex
        }), timePerScreen)
    }

    initCycle()

    setTimeout(() => {
        setInterval(initCycle, cycleTime)
    }, timePerScreen + exitDelay)
}
