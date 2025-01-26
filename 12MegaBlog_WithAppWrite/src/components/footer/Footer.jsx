import {Link} from 'react-router'
import Logo from '../Logo'
function Footer(){
    return(
    <>
    <div className=" w-full bg-gray-700 text-white flex p-4 justify-around">
            <div className="flex justify-between flex-col pl-2">
                <div className="text-bold text-4xl italic">
                    <Logo/>
                </div>
                <div className='text-1xl italic'>
                    Share your thoughts with the world
                </div>
            </div>
            <div className="flex justify-between flex-col pl-2">
                <div className=" text-1xl">
                    Services
                </div>
                <div  className=" text-1xl">
                    Support
                </div>
                <div className=" text-1xl">
                    Showcase
                </div>
            </div>
            <div className="flex justify-between flex-col pl-2">
                <div className=" text-1xl">
                    About
                </div>
                <div className=" text-1xl">
                    Contact
                </div>
                <div className=" text-1xl">
                    Privacy Policy
                </div>
            </div>
            <div className="flex justify-between flex-col pl-2">
                <div className=" text-1xl">
                    Facebook
                </div>
                <div className=" text-1xl">
                    Instagram
                </div>
                <div className=" text-1xl">
                    Twitter
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;