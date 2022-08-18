import React from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form';
import Utils from '../../../utils/Utils';
import Input from './Input';

export interface iTextNumInput {
    label: string,
    name: string,
    register: UseFormRegister<any>,
    errors: any
}

export default function TextInput({ label, name, register, errors }: iTextNumInput) {
    return (
        <Input label={label} type="text" register={register(name, {
            required: "Enter " + name.replaceAll("_", " "), validate: (val) => {
                if (Utils.isValidText(val)) {
                    return true;
                } else {
                    return "Invalid " + name.replaceAll("_", " ") + ", Minimum 4 and Maximum 15 character long, No Special Character are not allowed."
                }
            }
        })} helperText={errors?.[name]?.message || undefined} />
    )
}