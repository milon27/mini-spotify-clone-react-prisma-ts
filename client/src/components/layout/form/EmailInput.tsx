import { FieldError, UseFormRegister } from 'react-hook-form'
import Utils from '../../../utils/Utils'
import Input from './Input'


export interface iInputNoName {
    label: string,
    register: UseFormRegister<{ email: string } | any>,
    errors: {
        email?: FieldError | undefined
        date?: FieldError | undefined
    }
}

export default function EmailInput({ label, register, errors }: iInputNoName) {
    return (
        <Input label={label} type="email" register={register("email", {
            required: "Enter Email Address",
            onChange: (e) => {
                e.target.value = (e.target.value as string).toLowerCase()
            },
            validate: (val) => {
                if (Utils.isValidEmail(val)) {
                    return true;
                } else {
                    return "Invalid Email Address"
                }
            }
        })} helperText={errors.email?.message || undefined} />
    )
}
