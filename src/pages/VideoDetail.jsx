import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../utils/helpers'
import ReactPlayer from 'react-player'
import Loading from './../components/Loading';
import ChannelDetail from '../components/ChannelDetail';
import VideoCard from '../components/VideoCard';


const VideoDetail = () => {
  const {videoId}=useParams()
  const [detail,setDetail]=useState(null)
  const [relateds,setRelateds]=useState(null)
  useEffect(()=>{
    setDetail(null)
    setRelateds(null)

    getData(`/details/?id=${videoId}`).then((data)=>
    setDetail(data))

    getData(`related-contents/?id=${videoId}`).then((data)=>
    setRelateds(data.contents)
    )
  },[videoId])
  console.log(relateds)
  return (
    <div className="lg:px-[100px] flex flex-col gap-5 lg:flex-row p-4 bg-[#0F0F0F] min-h-[95vh] text-white">
    <div>
      <ReactPlayer width={'100%'} height={'470px'} url={`https://www.youtube.com/watch?v=${videoId}`} controls
        // playing
      />
      {!detail ? <Loading /> : <ChannelDetail detail={detail} />}
    </div>
    <div className='flex flex-col  gap-10 lg:max-w-[400px] sm:m-auto'>
      {!relateds ? '...' : 
        relateds.map((item)=>{
          if (item.type!=='video') return
          return(
            <VideoCard key={item.video.videoId} video={item.video} />
          )
        })
      }

    </div>
  
    </div>
    
    )
}

export default VideoDetail