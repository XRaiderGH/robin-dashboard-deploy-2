import React from 'react'
import {useRouter} from 'next/router'
import { motion } from 'framer-motion'

const LoginRegisterButton = ({text}) => {

    const router = useRouter();


    const redirect = () => {
        if (router.pathname === '/register') {
            router.push('/login');
        } else if (router.pathname === '/login') {
            router.push('/register');
        }
    };


    return (
        <motion.button
            initial={{rotateX: -90, opacity: 0}}
            animate={{rotateX: 0, opacity: 1, transition: {duration: 0.3, }}}
            exit={{rotateX: 90, opacity: 0, transition: {duration: 0.3, }}}
            onClick={() => {
                redirect()
            }}
            className="hover-blue font-bold text-xl text-white border-3 border-white rounded-3xl w-186 h-50 py-1 transition duration-200 ease-in-out focus:outline-none">
            {text}
        </motion.button>
    )
}

export default LoginRegisterButton