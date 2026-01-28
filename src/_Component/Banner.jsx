import React from 'react';
import bannerImg from "../../public/Images/Mask group.png"
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';

const dM_Sans = DM_Sans({
  subsets: ['latin'],
  weight : '700'
})


const Banner = () => {

    return (
        <>
          <div className=" bg-[#171B1A] flex items-center justify-center min-h-screen ">
  <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12">

  <div>
      <Image
      src={bannerImg}
      alt='banImg'
      className="max-w-92 max-h-126 bg-black rounded-lg "
    />
  </div>


    <div>
        <h3 className={`text-[1rem] font-bold ${dM_Sans.className} text-[#F89222]`}>INTRODUCTION</h3>
      <h1 className={`text-5xl ${dM_Sans.className} font-bold text-white mt-2.5 mb-4`}>I am a Creative Developer &
UI/UX Design Expert</h1>

<h3 className=" text-white mt-6">24 years   /   Robert Smith   /   UK London</h3>
     
      <p className=" text-white mt-9">
       Prolific, full stack web developer with a passion for metrics and beating former
best-yets. Prototyped 25 new product features per year for Flexor, Inc.
Decreased rework by 22% and costs by 15%. Consistently receive high
user experience scores for all web development projects, including a
55% increase for Flexor, Inc. Passionate about building world class web
applications. One of my sites received a 2020 Webby for Best 
Navigation and Structure.
      </p>

      <button className="btn bg-[#F89222] mt-10 text-white border-none rounded-[50px]">Downdolad CV</button>
    </div>

  </div>
</div>  
        </>
    );
};

export default Banner;