import { DM_Sans } from "next/font/google";
import Image from "next/image";
import img1 from "../../public/Images/Rectangle 12668.png";
import img2 from "../../public/Images/Rectangle 12663.png";
import img3 from "../../public/Images/Rectangle 12662.jpg";
import img4 from "../../public/Images/Rectangle 12664.png";
import img5 from "../../public/Images/Rectangle 12665.png";
import img6 from "../../public/Images/Rectangle 12666.png";
import img7 from "../../public/Images/Rectangle 126666.png";
import img8 from "../../public/Images/Rectangle 12667 (1).png";
import img9 from "../../public/Images/Group 9574.png";
import img10 from "../../public/Images/Group 9575.png";


const dM_Sans = DM_Sans({
  subsets: ['latin'],
  weight : '400'
})


const Portfolio = () => {

    return (
        <>

        <div className="parents lg:ml-114">
             <h1 className={`text-white ${dM_Sans.className} text-[3rem] font-bold text-white `}>Portfolio </h1>



           <div className="max-w-full md:max-w-688 mt-10 bg-black border rounded-md px-4">
  <ul className="flex flex-wrap md:flex-nowrap gap-4 md:gap-10 justify-center py-5 overflow-x-auto scrollbar-hide">
    <li className={`${dM_Sans.className} text-sm md:text-base font-normal text-[#F89222] border-b-2 border-[#F89222] whitespace-nowrap`}>
      All
    </li>
    <li className={`${dM_Sans.className} text-sm md:text-base font-normal text-white whitespace-nowrap`}>
      Graphic Design
    </li>
    <li className={`${dM_Sans.className} text-sm md:text-base font-normal text-white whitespace-nowrap`}>
      Mobile App
    </li>
    <li className={`${dM_Sans.className} text-sm md:text-base font-normal text-white whitespace-nowrap`}>
      Photography
    </li>
    <li className={`${dM_Sans.className} text-sm md:text-base font-normal text-white whitespace-nowrap`}>
      UI/UX Design
    </li>
  </ul>
</div>



        {/* images category  */}
      <div className="max-w-172 mt-6 grid lg:grid-cols-2 auto-rows-[200px] gap-6">

 
  <div className="row-span-2">
    <Image
      src={img1}
      alt="img1"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>

  <div>
    <Image
      src={img2}
      alt="img2"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>

  <div className="row-span-1">
    <Image
      src={img4}
      alt="img4"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>

<div className="row-span-2">
  <div>
    <Image
      src={img3}
      alt="img3"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
  </div>

  <div>
    <Image src={img5} alt="img5" className="w-full h-full object-cover rounded-xl" />
  </div>

  <div className="row-span-1">
    <Image src={img6} alt="img6" className="w-full h-full object-cover rounded-xl" />
  </div>

  <div>
    <Image src={img8} alt="img8" className="w-full h-full object-cover rounded-xl" />
  </div>

  <div>
    <Image src={img7} alt="img7" className="w-full h-full object-cover rounded-xl" />
  </div>

  <div>
    <Image src={img9} alt="img9" className="w-full h-full object-cover rounded-xl" />
  </div>

  <div>
    <Image src={img10} alt="img10" className="w-full h-full object-cover rounded-xl" />
  </div>

</div>




   

             </div>
        </>
    );
};

export default Portfolio;