import Header from './header'
import {useRouter} from 'next/router'
import Link from './ActiveLink'
import Image from 'next/image'
import SideNav from './sideNav'
import { useState, useEffect } from 'react';
import HeaderOutside from "./header-outside";
import { motion } from 'framer-motion'

const Layout = ({children}) => {


    const router = useRouter();

    console.log(router.pathname);

    const [InDash, setInDash] = useState(false);

    useEffect(() => {
        if(router.pathname === '/login' || router.pathname === '/register'){
            setInDash(false);
        } else {
            setInDash(true);
        }

    }, []);



    return (
        <>
            <div className='flex'>
                {InDash ? ( <SideNav/>) : ''}
                <main
                    className='bg-gradient-to-br from-green-500 to-blue-400 from h-100 w-full flex flex-row justify-center'>
                    <div className="wrap sm:w-9/10 w-80">
                        {InDash ? ( <Header/>) : <HeaderOutside/>}

                        <hr className='opacity-20'/>
                        <div className="body mt-7">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Layout