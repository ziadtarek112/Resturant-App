import React, { useRef, useState } from 'react';

import './Intro.css';
import { meal } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


const Intro = () =>{ 
  const [videoPlay,setVideoPlay] = useState(false) 
  const videRef = useRef()
  const handleVideo = () => {
    setVideoPlay((prev)=> !prev)

    if(videoPlay)
      videRef.current.pause()
    else
      videRef.current.play()
  }
return(
  <div className='app__video'>
    <video
    src={meal}
    ref={videRef}
    type='video/mp4'
    controls={false}
    muted
    />
    <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
        {videoPlay ? <BsPauseFill color='#fff' fontSize={30}/> : <BsFillPlayFill color='#fff' fontSize={30}/>}
      </div>
    </div>
  </div>
);
}
export default Intro;
