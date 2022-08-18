import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AxiosHelper from '../../../utils/AxiosHelper'
import URL from '../../../utils/constant/URL'
import { StateContext } from '../../../utils/context/MainContext'
import IUser, { IUserLoginDto } from '../../../utils/models/User'
import Button from '../../layout/form/Button'
import EmailInput from '../../layout/form/EmailInput'
import PasswordInput from '../../layout/form/PasswordInput'
import Spacer from '../../layout/Spacer'

interface ILoginData {
    email: string
    pass: string
}

export default function Login() {
    const { user, setUser } = useContext(StateContext)
    const nav = useNavigate()
    const { register, formState: { errors }, getValues, handleSubmit, reset } = useForm<ILoginData>()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: ILoginData) => {
        setLoading(true)
        AxiosHelper.postData<IUser, IUserLoginDto>(setLoading, 'auth/login', {
            email: data.email,
            password: data.pass
        }, (user) => {
            toast("User Logged In successfully.")
            reset({
                email: "",
                pass: ""
            })
            setUser(user)
        })
    }

    if (user?.id) {
        return <Navigate to={URL.HOME} />
    }
    return (
        <div className='mx-auto w-80 min-h-screen grid place-content-center'>
            <h1 className='text-xl font-semibold text-center text-black'>Login Now</h1>
            <Spacer />
            <EmailInput label="Your Email" register={register} errors={errors} />
            <Spacer />
            <PasswordInput register={register} errors={errors} getValues={getValues} isConfirm={false} />
            <Spacer />
            <Button loading={loading} fullWidth onClick={() => {
                handleSubmit(onSubmit)()
            }}>Sign In</Button>
            <Spacer />
            <hr />
            <Spacer />
            <Button fullWidth type='outline' onClick={() => {
                nav(URL.REGISTER)
            }}>Not Yet registered, Register Now</Button>
        </div>
    )
}
