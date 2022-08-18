import React from 'react'

interface iDesc extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    isSmall?: boolean
}

export default function Desc({ children, isSmall = false, className = "" }: iDesc) {
    return (
        <p className={`${isSmall ? 'text-xs' : 'text-sm'}  text-gray-500 ${className}`}>{children}</p>
    )
}
