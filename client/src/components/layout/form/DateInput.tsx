import Utils from '../../../utils/Utils'
import { iInputNoName } from './EmailInput'
import Input from './Input'

export default function DateInput({ label, register, errors }: iInputNoName) {
    return (
        <Input label="Select Date" type="date" register={register("date", {
            required: "Select date!",
            setValueAs: (val) => {
                return Utils.getDateTimeFromDate(val)
            }, validate: (val: string) => {
                if (val.split(" ")[0] == "") {
                    return "Select Date";
                } else {
                    return true;
                }
            }
        })}
            helperText={errors.date?.message || undefined}
        />
    )
}
