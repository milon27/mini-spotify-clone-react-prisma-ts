import { useId } from "react"

interface iMySelectItem {
    id: string, title: string, value: any
}

interface iMySelect {
    label: string,
    hideLabel?: boolean,
    value: string,//default id
    labelAsFirst?: boolean,
    full_width?: boolean,
    options: iMySelectItem[],
    onSelect: (item: iMySelectItem) => void
}
export default function MySelect(
    { label, hideLabel = false, labelAsFirst = false, full_width = true, onSelect, options, value = "none1" }: iMySelect) {
    const id = useId()

    return (
        <div className={full_width === true ? "relative w-full mb-6 md:mb-4 group" : "relative w-full md:w-1/3 mb-6 md:mb-4 group"}>
            {
                hideLabel ? <></> : <>
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 group-focus-within:text-primary group-focus-within:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 left-1" htmlFor={`select-${id}`}>
                        {label}
                    </label>
                </>
            }

            <div className="relative">
                <select className="block appearance-none w-full  border-[1px] border-gray-300 text-gray-700 py-3 px-2.5 rounded-lg leading-tight focus:outline-none bg-white focus:border-primary peer" id={`select-${id}`}
                    // defaultValue={defaultValue}
                    value={value}
                    onChange={(e) => {
                        const item = options.find(item => item.id == e.target.value)
                        if (item)
                            onSelect(item)
                    }}
                >
                    <option value={""} disabled={true}>{labelAsFirst ? label : "Choose Option"}</option>
                    {options.map((item, i) => {
                        return <option key={i} value={item.id}>{item.title}</option>
                    })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div>

    )
}


// how to use
/**
 * <MySelect
        label='Are you manager?'
        defaultValue='member' // value from options item 
        options={[
            {
                title: "Yes, I am manager",
                value: "manager"
            }, {
                title: "No, I am member",
                value: "member"
            }
        ]}
        onSelect={(item) => {
            setValue("is_manager", item.value == "manager" ? true : false)
        }}
    />
 * 
 */