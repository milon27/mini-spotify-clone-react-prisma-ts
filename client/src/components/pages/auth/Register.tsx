import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AxiosHelper from '../../../utils/AxiosHelper'
import URL from '../../../utils/constant/URL'
import { StateContext } from '../../../utils/context/MainContext'
import IUser, { IUserRegisterDto } from '../../../utils/models/User'
import Button from '../../layout/form/Button'
import EmailInput from '../../layout/form/EmailInput'
import PasswordInput from '../../layout/form/PasswordInput'
import TextInput from '../../layout/form/TextInput'
import Spacer from '../../layout/Spacer'

interface IRegisterData {
    name: string
    email: string
    pass: string
    cPass: string
}

export default function Register() {
    const { user, setUser } = useContext(StateContext)
    const nav = useNavigate()
    const { register, formState: { errors }, getValues, handleSubmit, reset } = useForm<IRegisterData>()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: IRegisterData) => {
        setLoading(true)
        AxiosHelper.postData<IUser, IUserRegisterDto>(setLoading, 'auth/signup', {
            email: data.email,
            password: data.pass,
            name: data.name
        }, (user) => {
            toast("User Registered successfully.")
            reset({
                email: "",
                pass: "",
                name: "",
                cPass: ""
            })
            setUser(user)
        })
    }

    if (user?.id) {
        return <Navigate to={URL.HOME} />
    }

    return (
        <div className='mx-auto w-80 min-h-screen grid place-content-center'>
            <h1 className='text-xl font-semibold text-center text-black'>Register Now</h1>
            <Spacer />
            <TextInput label="Your Name" name='name' register={register} errors={errors} />
            <Spacer />
            <EmailInput label="Your Email" register={register} errors={errors} />
            <Spacer />
            <PasswordInput register={register} errors={errors} getValues={getValues} isConfirm={false} />
            <Spacer />
            <PasswordInput register={register} errors={errors} getValues={getValues} isConfirm={true} />
            <Spacer />
            <Button loading={loading} fullWidth onClick={() => {
                handleSubmit(onSubmit)()
            }}>Register Now</Button>
            <Spacer />
            <hr />
            <Spacer />
            <Button fullWidth type='outline' onClick={() => {
                nav(URL.LOGIN)
            }}>Alreay Registered, Login Now</Button>
        </div>
    )
}

