const VideoTitle = ({title , overview}) => {
    return(
        <div className="pt-80 pl-36 absolute aspect-video bg-gradient-to-r from-black text-white"> 
            <div>
            <h1 className="font-bold text-4xl">{title}</h1>
            </div>
            <div className="mt-3  w-1/4">
                <p>
                    {overview}
                </p>
            </div>
            <div className="flex flex-row mt-3">
                <button className="py-2 bg-white px-10 rounded-md text-black hover:bg-opacity-80 font-semibold">
                    Play Now
                </button>
                <button className="mx-1 py-2 bg-slate-500 px-10 rounded-md text-white bg-opacity-50 font-semibold">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle