'use client'

import { Heading } from "@/components/layout/Heading";
import { Images } from "@/components/layout/Images";
import { setupAnimationCycle } from "@/utils/animation";

export default function Home() {

    function getNodes(node: HTMLDivElement | null) {
        const headings = node?.getElementsByTagName('h2')
        const grids = node?.getElementsByClassName('grid')

        setupAnimationCycle({
            timePerScreen: 2000,
            exitDelay:  210 * 7,
            index: -1,
            grids,
            headings
        })
    }

    return (
        <div ref={node => getNodes(node)}>
            <Heading />
            <Images />
        </div>
    )
}
