import { NavLink } from 'react-router-dom'
import { createReactNavLink } from '@milon27/react-sidebar'
import { BsGrid } from 'react-icons/bs'
import URL from '../../utils/constant/URL'

const NavItems: (() => JSX.Element)[] = [
    createReactNavLink(NavLink, "Home", URL.HOME, <BsGrid />),
]

export default NavItems