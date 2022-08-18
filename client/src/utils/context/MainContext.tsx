import React, { createContext, useState } from 'react'
import IUser from '../models/User'

interface iState {
    user?: IUser | null
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined | null>>
}

export const StateContext = createContext<iState>({} as iState)

const MainContext = (props: React.PropsWithChildren<any>) => {
    const [user, setUser] = useState<IUser | undefined | null>(undefined) //undefined means loading | null means not logged in


    const global_state: iState = {
        user, setUser
    }

    return (
        <StateContext.Provider value={global_state}>
            {props.children}
        </StateContext.Provider>
    )
}

export default MainContext
