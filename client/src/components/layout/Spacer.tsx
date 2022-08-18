
interface iSpacer {
    px?: number
}
export default function Spacer({ px = undefined }: iSpacer) {
    if (px) {
        return <div style={{ marginTop: `${px}px`, marginBottom: `${px}px` }}></div>
    }
    return (
        <div className='my-2.5'></div>
    )
}
