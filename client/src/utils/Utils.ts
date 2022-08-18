import axios from 'axios'
import { format } from 'date-fns'
import IUser from './models/User'

const Utils = {
    logOut: async (setUser: React.Dispatch<React.SetStateAction<IUser | null | undefined>>) => {
        await axios.get('auth/logout')
        setUser(null)
    },
    isValidEmail: (email: string) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    },
    isValidText: (text: string) => {
        if (/^[A-Za-z][a-zA-Z0-9_ ]{3,15}$/.test(text)) {
            return (true)
        }
        return (false)
    },
    // date 
    getDateTimeFromDate: (onlyDate: string): string => {
        /**
         * const p = new Date().toLocaleString("en-us", { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: "2-digit",hour12:false });
    
           console.log(p.replaceAll("/","-"));
         */
        const date = new Date()
        const _date = onlyDate + " " + date.toLocaleString("en-us", { hour: '2-digit', minute: '2-digit', second: "2-digit", hour12: false });
        return _date;
    },
    getCurrentDateSqlFormat: () => {//2020-09-07 06:21:47
        return format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }
}
export default Utils