import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { motion } from 'framer-motion'


const index = () => {

    const router = useRouter();

    console.log(router.query)


    const options =
        [
            "The client pressing the button will call you directly from the app",
            "The client pressing the button can write an email and send it to you",
            "The client pressing the button can write a message and send it to you"
        ]
    ;



    const [text, setText] = useState(options[0]);
    const [value, setValue] = useState();

    let inputValue = text;

    const handleChange = (e) => {
        setValue(e.target.value)
        if (e.target.value === "phone_call") {
            setText(options[0])
        } else if (e.target.value === "texting") {
            setText(options[2])
        } else if (e.target.value === "email") {
            setText(options[1])
        }
    }










    return (
        <div className='w-100'>
            <div className="flex flex-row justify-center" >
                <Image src='/assets/MenIconLogin.svg' width='135px' height='135px'/>
            </div>
            <div className='bg-white rounded-3xl shadow-custom px-12 py-10 bg-opacity-90 -mt-16'>
                <div className="top flex flex-row justify-between pb-5">
                    <div>
                        <h1 className='font-semibold text-3xl pb-1'>{router.query.name}</h1>
                        <span className='font-semibold text-xl text-gray-500'>Set what will happen if they press the panic button</span>
                    </div>
                </div>

                <div className="bottom flex flex-row">
                    <label htmlFor='option-select'
                           className="hover-blue-alt w-56 flex flex-row justify-center  text-xl text-blue-500 border-3 border-blue-500 px-2 rounded-3xl h-50 py-1 transition duration-200 ease-in-out bg-transparent hover:text-white">
                        <select
                            onChange={event => {
                                event.preventDefault();
                                handleChange(event);
                            }} defaultValue={value} className='bg-transparent font-bold w-48 focus:outline-none' name="option-select" id="option-select">
                            <option className='text-blue-500' value="phone_call">Phone call</option>
                            <option className='text-blue-500' value="texting">Texting</option>
                            <option className='text-blue-500' value="email">E-mail message</option>
                        </select>
                    </label>
                    <div className='ml-8 text-xl font-semibold text-gray-500 flex flex-col justify-center'>{text}</div>
                </div>
            </div>
        </div>
    )
}

export default index