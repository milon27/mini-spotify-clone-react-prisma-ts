import React from 'react'

export default function LineCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-[1px] border-border rounded-xl p-5 space-y-2 ">
            {children}
        </div>
    )
}
