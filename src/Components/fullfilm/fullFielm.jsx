

export default function FullFielm({Title,Img,subject}){
    return (
        <div className="fullfilm">
            <div className="img  p-4 rounded-lg ">
              <img className="w-full h-full   " src={Img} alt="" />
            </div>
            <div className="info flext justify-between">
                <h1 className="font-bold text-center text-xl ">{Title}</h1>
                <p className="text-gray-300 font-normal text-start px-4">
                    {
                        subject
                    }.

                </p>
            </div>

        </div>
    )
}