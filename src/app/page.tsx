'use client'

import { useRef, useState } from "react";
import { enterScreen, exitScreen, removeActive, setupAnimationProps } from "@/utils/animation"
import { Heading } from "@/components/layout/Heading";
import { Images } from "@/components/layout/Images";
import { getInfosForAnimation } from "@/utils/initAnimation";

export default function Home() {
    const intervalRef = useRef<NodeJS.Timeout>()
    const nodeRef = useRef<HTMLDivElement | null>()
    const infosRef = useRef<setupAnimationProps>()

    const initCycle = (returnInfos: setupAnimationProps) => {
        const exitDelay = returnInfos?.exitDelay ?? 200 * 8 //ms
        const timePerScreen = returnInfos?.timePerScreen ?? 2000 //ms
    
        let nextIndex = returnInfos.index
        nextIndex = nextIndex + 1 > 2 ? 0 : nextIndex + 1

        enterScreen({...returnInfos, index: nextIndex})

        intervalRef.current = setTimeout(() => {
            exitScreen({...returnInfos, index: nextIndex})

            setTimeout(() => {
                removeActive(returnInfos.node)
                
                initCycle({...returnInfos, index: nextIndex})
            }, exitDelay)
        }, timePerScreen)
    }

    const setIndexFromChildren = (index: number) => {
        const infos = infosRef.current
        clearInterval(intervalRef.current)

        let nextIndex = index - 2
        nextIndex = nextIndex + 1 > 2 ? 0 : nextIndex + 1

        exitScreen({...infos, index: nextIndex})

        setTimeout(() => {
            removeActive(infos?.node)

            initCycle({...infos, index: nextIndex})
        }, infos?.exitDelay)
    }

    function setNodeRef(node: HTMLDivElement | null) {
        nodeRef.current = node
        
        const returnInfos = getInfosForAnimation(node, -1, false)
        infosRef.current = returnInfos
        
        initCycle(returnInfos)
    }

    return (
        <div ref={node => setNodeRef(node)}>
            <Heading setIndex={setIndexFromChildren} />
            <Images />
        </div>
    )
}
