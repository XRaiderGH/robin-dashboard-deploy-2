import Image from 'next/image'
import Link from "../../components/ActiveLink";

const clients = () => {
    return (
        <div className='container w-3/5 bg-white rounded-3xl shadow-custom px-12 py-10 bg-opacity-90'>
            <div className="top flex flex-row justify-between pb-10">
                <span className='flex flex-col justify-center'><h1 className='font-medium text-3xl'>Clients</h1></span>
                <span className='border-3 px-3 rounded-3xl border-blue-500 py-2 flex flex-row'>
                         <Image src='/assets/search-solid.svg' width='16.5' height='16.5'/>
                         <input type="text"
                                className='ml-2 focus:outline-none placeholder-blue-500 font-bold w-52 bg-transparent text-lg'
                                placeholder='Search'/>
                    </span>
            </div>

            <div className="bottom">
                <div className="clients grid grid-cols-2 gap-8 font-medium">

                    <Link href={'/clients/client-name'}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex justify-between cursor-pointer">
                            <Image src='/assets/Womenicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col justify-center text-lg font-bold'>Marryrose L Salas</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>


                    <Link href={'/clients/client-name'}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex justify-between cursor-pointer">
                            <Image src='/assets/Menicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col justify-center text-lg font-bold'>William Whatley</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>


                    <Link href={'/clients/client-name'}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex justify-between cursor-pointer">
                            <Image src='/assets/Menicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col justify-center text-lg font-bold'>Roy Gleason</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>

                    <Link href={'/clients/client-name'}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex justify-between cursor-pointer">
                            <Image src='/assets/Womenicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col justify-center text-lg font-bold'>Esther Dobson</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>

                    <Link href={'/clients/client-name'}>
                        <div
                            className="client bg-white rounded-full shadow-custom px-5 py-3 flex justify-between cursor-pointer">
                            <Image src='/assets/Menicon.svg' width='25.28' height='35'/>
                            <span className='ml-7 flex-1 flex flex-col justify-center text-lg font-bold'>Kenneth Johnson</span>
                            <Image src='/assets/Path 117.svg' width='15' height='15'/>
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default clients
