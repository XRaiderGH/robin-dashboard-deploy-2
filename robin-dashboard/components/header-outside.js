import Image from "next/image";
import LoginRegisterButton from "./LoginRegisterButton";




const HeaderOutside = () => {


    return (
        <div className="header mt-7 mb-7">
            <div className="flex flex-row">
                <div className="logo flex-grow"><Image src="/assets/logo.svg" width='130' height='66' alt="Logo"/>
                </div>
                <div className="flex flex-col justify-center">
                    <label htmlFor='language-select'
                        className="hover-blue flex flex-row justify-center  text-xl text-white border-3 border-white px-2 rounded-3xl h-50 py-1 transition duration-200 ease-in-out bg-transparent">
                        <select className='bg-transparent font-bold w-32 px-4 focus:outline-none' name="language-select" id="language-select">
                            <option value="English">English</option>
                        </select>
                    </label>
                </div>
                <div className="flex flex-col justify-center ml-10">
                    <LoginRegisterButton text={'Sign up / login'}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderOutside;
