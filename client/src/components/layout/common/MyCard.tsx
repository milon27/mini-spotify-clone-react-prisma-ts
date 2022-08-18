import React from 'react'

interface iMyCard extends React.HTMLAttributes<HTMLDivElement> { children: React.ReactNode }

export default function MyCard({ children, className }: iMyCard) {
    return (
        <div className={`w-full ${className} md:shadow-xl rounded-xl px-4 md:p-8 my-auto h-screen md:h-auto p-5 space-y-2 `}>
            {children}
        </div>
    )
}
