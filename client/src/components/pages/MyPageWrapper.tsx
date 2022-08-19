import { SidebarWrapper, PageWrapper } from '@milon27/react-sidebar'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import URL from '../../utils/constant/URL'
import { StateContext } from '../../utils/context/MainContext'
import NavItems from '../router/NavItems'
import logo from '../../assets/img/logo.png'
import Utils from '../../utils/Utils'

export default function MyPageWrapper({ children }: { children: React.ReactNode }) {
    const { user, setUser } = useContext(StateContext)
    const nav = useNavigate()

    const logOut = async () => {
        await Utils.logOut(setUser)
    }

    return (
        <SidebarWrapper
            logoUrl={logo}
            userName={<p className='rs-text-center'>
                <span className='text-primary'>{user?.name}</span>
                <br />
                <small>{user?.email}</small>
            </p>}
            userImageUrl={'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png'}
            navItems={NavItems}
            onLogOut={logOut}
            activeStyle="outline"
            mobileHeaderContent={<></>}
            onLogoClick={() => {
                nav(URL.HOME)
            }}
            onProfileImgClick={() => {
                // nav(URL.PROFILE)
            }}
        >
            <PageWrapper className="p-5">
                {children}
                <p className='text-right pt-5 text-sm'>Design & Developed by <a href="https://milon27.com/" className='text-primary'>Milon27.com</a></p>
            </PageWrapper>
        </SidebarWrapper>
    )
}
