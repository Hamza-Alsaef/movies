import { Movie } from "../Components/index";
import img from '../assets/image.jpg'
import axios from 'axios'
import { useEffect, useState } from "react";
import {FaSearch} from 'react-icons/fa'
export default function Home(){

    const [movies,setMovies] = useState([])
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const {data} =  await axios.get('http://localhost:4000/movies')
            console.log(data.data)
            await setMovies(data.data)
        }
        fetchData()
    },[])

    return (
        <>
          <div className="search grid m-2  grid-cols-12 ">
          <input className="col-span-11 rounded-l-xl  focus-within:outline-red-500 bg-gray-200 placeholder:text-black placeholder:font-bold p-2"  placeholder="Search For Movies" />
          <FaSearch className="rounded-r-xl w-full bg-red-500 hover:bg-red-700 cursor-pointer p-3 text-6xl text-white bg-navColor col-span-1"/>
        </div>
        <div className="grid m-4   gap-3  lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-3 ">
          
            {
                movies.map((movie,index)=>{
                    const {id,tilte,subject,img} = movie
                    return <Movie key={index} id={id} title={tilte} subject={subject} src={img} />
                })
            }
        </div>
        </>
    )
}