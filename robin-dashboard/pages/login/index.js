import Image from 'next/image'
import LoginRegisterButton from "../../components/LoginRegisterButton";
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function Register() {


    const easing = [0.6, -0.5, 0.1, .99]

    return (
        <div className="flex flex-row" style={{height: 'calc(100vh - 325px'}}>
            <motion.div
                // initial={{x: -100, opacity: 0}}
                // animate={{x: 0, opacity: 1, transition: {duration: 0.3, }}}
                // exit={{x: -100, opacity: 0, transition: {duration: 0.3, }}}
                className="left w-4/6 flex flex-col justify-center">
                <h1 className='flex flex-col font-bold text-white'>
                    <motion.span
                        initial={{rotateX: -90, opacity: 0}}
                        animate={{rotateX: 0, opacity: 1, transition: {duration: 0.3, delay: 0.3}}}
                        exit={{rotateX: 90, opacity: 0, transition: {duration: 0.3, delay: 0.3}}}
                        className='text-8xl mb-5'>Login</motion.span>
                    <motion.span
                        initial={{x: 60, opacity: 0, transition: {duration: 0.6}}}
                        animate={{x: 0, opacity: 1, transition: {duration: 0.3, delay: 0.3}}}
                        exit={{x: 60, opacity: 0, transition: {duration: 0.3, }}}
                        className='text-7xl mb-5'>Start helping others</motion.span>
                    <motion.span
                        initial={{rotateX: -90, opacity: 0}}
                        animate={{rotateX: 0, opacity: 1, transition: {duration: 0.3, delay: 0.3}}}
                        exit={{rotateX: 90, opacity: 0, transition: {duration: 0.3, delay: 0.3}}}
                        className='font-normal text-xl mb-5'>Do you want to create an account?</motion.span>
                    <LoginRegisterButton text='Sign up'/>
                </h1>
            </motion.div>

            <motion.div
                initial={{x: 100, opacity: 0, transition: {duration: 0.6}}}
                animate={{x: 0, opacity: 1, transition: {duration: 0.3, }}}
                exit={{x: 100, opacity: 0, transition: {duration: 0.3, }}}
                className="right flex flex-col justify-center w-3/6">
                <div className="flex flex-row justify-center" >
                    <Image src='/assets/MenIconLogin.svg' width='170px' height='170px'/>
                </div>
                <div className="bg-white rounded-3xl px-16 pt-36 pb-10 shadow-lg -mt-20 shadow-custom">

                    <form action="">
                        <label htmlFor="name" className='flex flex-col pb-10'>
                            <span className='font-bold text-xl'>Username or E-mail</span>
                            <input id='name' className='border-b-2 border-black py-2 focus:outline-none' type="email" placeholder='Enter your username or email adress'/>
                        </label>

                        <label htmlFor="name" className='flex flex-col pb-4'>
                            <span className='font-bold text-xl'>Password</span>
                            <input id='name' className='border-b-2 border-black py-2 focus:outline-none' type="password" placeholder='Enter your password'/>
                        </label>

                        <span className='flex flex-row justify-end font-semibold text-lg mb-10'>
                            <Link href='/forgot-password'>Forgot password?</Link>
                        </span>


                        <span className="flex flex-row justify-center">
                               <a href={'/'} className='hover-blue bg-transparent font-bold text-xl text-blue-500 border-3 border-blue-500 rounded-3xl w-186 h-50 py-1 transition duration-200 ease-in-out hover:text-white text-center flex flex-col justify-center'>Login</a>
                            {/*<input value='Sign up' className='hover-blue bg-transparent font-bold text-xl text-blue-500 border-3 border-blue-500 rounded-3xl w-186 h-50 py-1 transition duration-200 ease-in-out hover:text-white' type="submit"/>*/}
                            </span>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}
