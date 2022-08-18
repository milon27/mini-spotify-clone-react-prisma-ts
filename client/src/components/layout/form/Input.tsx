import { useId } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'


interface iInput {
    label: string
    type?: 'text' | 'textarea' | "email" | "password" | "date" | "number"
    disable?: boolean
    loading?: boolean
    helperText?: string | undefined
    register?: UseFormRegisterReturn
}
export default function Input({
    label,
    type = "text",
    disable = false,
    loading = false,
    helperText = undefined,
    register,
    ...other
}: iInput) {
    const id = useId()
    return (
        <div>
            <div className="relative">
                <input {...register} disabled={disable} type={type} id={"floating_outlined" + id} className="block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " {...other} />
                <label htmlFor={"floating_outlined" + id} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{label}</label>
            </div>
            {helperText && <div className="mt-2 flex items-center gap-1">
                <svg className='text-sm text-red-600 dark:text-red-400' stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx={12} cy={12} r={10} /><line x1={12} y1={16} x2={12} y2={12} /><line x1={12} y1={8} x2="12.01" y2={8} /></svg>
                <p className='text-xs text-red-600 dark:text-red-400'>{helperText}</p>
            </div>}
        </div>
    )
}
