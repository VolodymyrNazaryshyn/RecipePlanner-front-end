import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as CgIcons from 'react-icons/cg'
import * as FiIcons from 'react-icons/fi'

export const SidebarDataUnauthorized = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Recipe filter',
        path: '/recipe-filter',
        icon: <GiIcons.GiKnifeFork />,
        cName: 'nav-text'
    },
    {
        title: 'Search recipe',
        path: '/search',
        icon: <AiIcons.AiOutlineSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Sign up / Sign in',
        path: '/login',
        icon: <FiIcons.FiLogIn />,
        cName: 'nav-text'
    }
]

export const SidebarDataAuthorized = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Recipe filter',
        path: '/recipe-filter',
        icon: <GiIcons.GiKnifeFork />,
        cName: 'nav-text'
    },
    {
        title: 'Search recipe',
        path: '/search',
        icon: <AiIcons.AiOutlineSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Add recipe',
        path: '/add-recipe',
        icon: <CgIcons.CgAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <FiIcons.FiLogOut />,
        cName: 'nav-text'
    }
]