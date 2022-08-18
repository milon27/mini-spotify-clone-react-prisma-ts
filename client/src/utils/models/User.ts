interface IUser {
    id: number
    name: string
    email: string
    createdAt: string
}

export interface IUserLoginDto {
    email: string
    password: string
}

export interface IUserRegisterDto {
    name: string
    email: string
    password: string
}

export default IUser