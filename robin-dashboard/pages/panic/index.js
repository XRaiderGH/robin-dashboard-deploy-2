
import Image from 'next/image';
import Link from "../../components/ActiveLink";


export default function panic() {
    return (
        <div className='container w-3/5 bg-white rounded-3xl shadow-custom px-12 py-10 bg-opacity-90'>
            <div className="top flex flex-row justify-between pb-10">
                <span className='flex flex-col justify-center'><h1 className='font-medium text-3xl'>Panic</h1></span>
                <span className='border-3 px-3 rounded-3xl border-blue-500 py-2 flex flex-row'>
                         <Image src='/assets/search-solid.svg' width='16.5' height='16.5'/>
                         <input type="text"
                                className='ml-2 focus:outline-none placeholder-blue-500 font-bold w-52 bg-transparent text-lg'
                                placeholder='Search'/>
                    </span>
            </div>

            <div className="bottom">
                <div className="clients grid grid-cols-1 gap-8 font-medium">

                    <Link href={{ pathname: '/panic/client-name', query: { name: 'William Whatley' , option: 'email'} }}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex cursor-pointer">
                            <Image src='/assets/Menicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col flex-grow flex-col justify-center font-bold text-lg'>William Whatley</span>
                            <span className='ml-7 flex flex-col justify-center text-lg font-bold text-blue-500 pr-5 text-lg'>Phone call</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>

                    <Link href={{ pathname: '/panic/client-name', query: { name: 'Roy Gleason' , option: 'email'} }}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex cursor-pointer">
                            <Image src='/assets/Menicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col flex-grow flex-col justify-center font-bold text-lg'>Roy Gleason</span>
                            <span className='ml-7 flex flex-col justify-center text-lg font-bold text-blue-500 pr-5 text-lg'>Texting</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>

                    <Link href={{ pathname: '/panic/client-name', query: { name: 'Marryrose L Salas' , option: 'email'} }}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex cursor-pointer">
                            <Image src='/assets/Womenicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col flex-grow flex-col justify-center font-bold text-lg'>Marryrose L Salas</span>
                            <span className='ml-7 flex flex-col justify-center text-lg font-bold text-blue-500 pr-5 text-lg'>Phone call</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>

                    <Link href={{ pathname: '/panic/client-name', query: { name: 'Esther Dobson' , option: 'email'} }}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex cursor-pointer">
                            <Image src='/assets/Womenicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col flex-grow flex-col justify-center font-bold text-lg'>Esther Dobson</span>
                            <span className='ml-7 flex flex-col justify-center text-lg font-bold text-blue-500 pr-5 text-lg'>E-mail message</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>

                    <Link href={{ pathname: '/panic/client-name', query: { name: 'Kenneth Johnson' , option: 'email'} }}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex cursor-pointer">
                            <Image src='/assets/Menicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col flex-grow flex-col justify-center font-bold text-lg'>Kenneth Johnson</span>
                            <span className='ml-7 flex flex-col justify-center text-lg font-bold text-blue-500 pr-5 text-lg'>Texting</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>





                </div>
            </div>

        </div>
    )
}
