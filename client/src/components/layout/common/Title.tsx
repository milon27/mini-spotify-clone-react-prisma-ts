
interface iTitle extends React.HTMLAttributes<HTMLDivElement> {
    title: string, isLarge?: boolean
}

export default function Title({ title, isLarge = false, className }: iTitle) {
    return (
        <h1 className={`font-semibold text-primary ${isLarge ? "text-lg md:text-2xl" : "text-base md:text-lg"}  ${className}`}>{title}</h1>
    )
}
