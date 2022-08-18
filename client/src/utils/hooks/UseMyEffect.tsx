import React, { useEffect, useRef } from 'react'

export default function useMyEffect(callback: () => void, depArr: any[] = []) {
    const mouted = useRef<boolean>()
    useEffect(() => {
        if (mouted.current == undefined) {
            mouted.current = true
            callback()
        }
    }, depArr)
}
