import React from 'react'
import Input from '../../layout/form/Input';
import { UseFormRegister, FieldError, UseFormGetValues } from 'react-hook-form'

export default function PasswordInput({ register, errors, getValues, isConfirm = false, label = "New Password", helperText = "Enter new password", withCustomName = "pass" }: {
    register: UseFormRegister<{ pass: string, cPass: string } | any>,
    errors: {
        pass?: FieldError | undefined;
        cPass?: FieldError | undefined;
    } & any,
    getValues: UseFormGetValues<{ pass: string, cPass: string } | any>,
    isConfirm?: boolean,
    withCustomName?: string
    helperText?: string,
    label?: string,
}) {
    if (isConfirm) {
        return <Input label="Confirm New Password" type="password" register={register("cPass", {
            required: "Enter Confirm Password",
            validate: (val) => {
                const newp = getValues("pass")
                if (val == "123456") {
                    return "Password should not be so simple like 123456"
                }
                if (newp === val) {
                    return true;
                } else {
                    return "Password and Confirm Password should match"
                }
            }
        })} helperText={errors.cPass?.message || undefined} />
    }

    if (withCustomName) {
        return (
            <Input label={label} type="password" register={register(withCustomName, {
                required: helperText, validate: (val) => {
                    if ((val as string).length > 5) {
                        return true;
                    } else {
                        return "Password should be more than 5 character"
                    }
                }
            })} helperText={errors[withCustomName]?.message || undefined} />
        )
    }

    return (
        <Input label={label} type="password" register={register("pass", {
            required: helperText, validate: (val) => {
                if ((val as string).length > 5) {
                    return true;
                } else {
                    return "Password should be more than 5 character"
                }
            }
        })} helperText={errors.pass?.message || undefined} />
    )
}
