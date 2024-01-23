
import './movie.css'
import FullFielm from '../fullfilm/fullFielm'
import { CiPlay1 } from 'react-icons/ci'
import axios from 'axios'

export default function Movie({src,title,subject,id}){



    const viewFielm = async function(e){
        
        const {data}  = await axios.get(`http://localhost:4000/movies/${e.target.id}`)
        const {id,tilte,subject,img} = data.data

        return <FullFielm  Title={tilte} subject Img={img}/>
    }
    return (
        <div className="movie  text-center after:-z-10   after:duration-300 relative  duration-300 overflow-hidden flex flex-col justify-between rounded-xl border-2 
        after:absolute after:top-0 after:left-0 after:w-full after:h-full hover:after:bg-black hover:after:opacity-40
        hover:border-sky-500">
            <h1 className="text-gray-200 py-2 bg-dark duration-300 -translate-y-10 font-bold capitalize text-xl">{title}</h1>
            <CiPlay1 onClick={viewFielm} id={id} className='icon hover:bg-red-800'/>
            <img className=" absolute  w-full min-h-full -z-20    " src={src} alt="img does not found" />
            <p className="text-white max-h-12 overflow-clip duration-300 translate-y-16 capitalize font-normal max-w-xs">{subject}</p>
        </div>
    )
}