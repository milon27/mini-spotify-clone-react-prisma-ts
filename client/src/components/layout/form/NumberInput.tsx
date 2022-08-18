import Input from './Input';
import { iTextNumInput } from './TextInput';

export default function NumberInput({ label, name, register, errors }: iTextNumInput) {
    return (
        <Input label={label} type="number" register={register(name, {
            required: `Enter ${name}!`,
            setValueAs: (val) => parseFloat(val),
            validate: (val) => {
                if (isNaN(val)) {
                    return "Enter a number"
                }
                return true;
            }
        })}
            helperText={errors?.[name]?.message || undefined}
        />
    )
}
