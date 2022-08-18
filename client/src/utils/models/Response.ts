interface IResponse<T> {
    message: string
    data?: T
}
export default IResponse