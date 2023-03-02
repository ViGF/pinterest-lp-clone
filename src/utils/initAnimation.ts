export function getInfosForAnimation(
    node: HTMLDivElement | null | undefined,
    index: number,
    exitNow?: boolean) {

    const headings = node?.getElementsByTagName('h2')
    const grids = node?.getElementsByClassName('grid')
    const indicators = node?.getElementsByClassName('indicator')
    
    return {
        timePerScreen: 2000,
        exitDelay: 200 * 8,
        oldIndex: -1,
        index,
        grids,
        exitNow,
        headings,
        indicators,
        node
    }
}