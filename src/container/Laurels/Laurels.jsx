import React from 'react';

import './Laurels.css';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';

const AwardCard = ({award : {title,imgUrl,subtitle}})=>{
  return(
    <div className='app__laurels_awards-card'>
      <img src={imgUrl} alt="" />
      <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
        <p className='p__cormorant' >{subtitle}</p>
      </div>
    </div>)
}

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id="awards">
    <div className='app__wrapper_info'>
      <SubHeading title = "Awards and Recognition"/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels_awards'>
        {data.awards.map((award)=><AwardCard key={award.title} award={award} />)}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="" />
    </div>

  </div>
);

export default Laurels;
