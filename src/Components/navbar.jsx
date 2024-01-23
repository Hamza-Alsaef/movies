
import { Link } from "react-router-dom"
import Profile from "./profile"
import { FaHamburger } from "react-icons/fa"
export default function Navbar(){
    
    const addclassActive = ()=>{
        
       const links =  document.querySelectorAll('.links a ')
       console.log(links)
       links.forEach((link)=>{
           link.addEventListener('click',(e)=>{
               links.forEach((elm)=>{

                   elm.classList.remove('active')
                })
                e.target.classList.add('active')
            
        })
       })
    }
    addclassActive()
    return (
        <nav className="bg-black  text-white sticky top-0 z-50 shadow-md shadow-red-300 flex justify-between p-4">
            <h1 className="uppercase font-bold text-red-700 shadow-lg border-red-500 shadow-red-500 rounded-full text-4xl">top movies</h1>
            <div className="links hidden lg:flex md:flex gap-4 sm:hidden xs:hidden duration-300  ">
                <Link  className="  duration-200 border-gray-400  bg-gray-600  capitalize bg:text-xl md:text-xl sm:text-lg xs:text-md  p-2 rounded-full border-4">home</Link>
                <Link  className="  duration-200 border-gray-400  bg-gray-600  capitalize bg:text-xl md:text-xl sm:text-lg xs:text-md  p-2 rounded-full border-4">for you</Link>
                <Link  className="  duration-200 border-gray-400  bg-gray-600  capitalize bg:text-xl md:text-xl sm:text-lg xs:text-md  p-2 rounded-full border-4">favourite</Link>
            </div>
                <FaHamburger onClick={()=>console.log('red')} className="lg:hidden md:hidden my-auto text-2xl text-red-500"/>
            <div className="profile  "><Profile/></div>
        </nav>
    )
}