// if data is undefined then there is error in response
const MyResponse = <T>(message: string, data?: T) => {
    return {
        message,
        data
    }
}
export default MyResponse