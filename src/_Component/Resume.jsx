import { DM_Sans } from "next/font/google";
import Image from "next/image";
import edu from "../../public/Images/Frame 8630.png";
import work from "../../public/Images/Frame 8632.png";


const dM_Sans = DM_Sans({
  subsets: ['latin'],
  weight : '700'
})

const Resume = () => {

    return (

        <>
            <h1 className={`text-white ${dM_Sans.className} text-[3rem] font-bold text-white mt-16`}>Resume </h1>


<div className="parent ">
            <div className="flex gap-2 mt-10">
                <Image src={edu} alt="education"  />
                <h1 className={`${dM_Sans.className} font-bold text-white text-2xl`}>Education</h1>
            </div>


            <div className="custom-border border-l mt-8 border-[#646464]  p-4">
            <div className="">
            <div className="mt-7 ">
                <button className="border rounded-sm border-[#646464] p-2 bg-[#121414] text-white">2016 - 2020</button>

 </div>

        <div className="max-w-161.5 max-h-80 border rounded-xl p-5 border-[#222222] my-4">
            <h1 className={`${dM_Sans.className} font-bold text-[18px] text-[#F89222]`}>Harvard University</h1>
            <p className={`${dM_Sans.className} text-[#8F8F8F] font-normal text-[12px] `}>B.A. and M.S., Computer Science</p> <br />

            <hr  className="text-[#222222] my-4"/>

            <p className={`${dM_Sans.className} text-[1rem] font-normal text-white`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum
eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.
            </p>
        </div>

        </div>


            <div className="mt-8">
            <div className="mt-7 borderimg">
                <button className="border rounded-sm border-[#646464] p-2 bg-[#121414] text-white">2014 - 2016</button>

 </div>

        <div className="max-w-161.5 mix-h-[154px] border rounded-xl p-5 border-[#222222] my-4">
            <h1 className={`${dM_Sans.className} font-bold text-[18px] text-[#F89222]`}>Helwan University</h1>
            <p className={`${dM_Sans.className} text-[#8F8F8F] font-normal text-[12px] `}>Bachelor Degree</p> <br />

            <hr  className="text-[#222222] my-4"/>

            <p className={`${dM_Sans.className} text-[1rem] font-normal text-white`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum
eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.
            </p>
        </div>

        </div>
        </div>

</div>



<div className="parent mt-20">
            <div className="flex gap-2 mt-10">
                <Image src={work} alt="education"  />
                <h1 className={`${dM_Sans.className} font-bold text-white text-2xl`}>Work History</h1>
            </div>


            <div className="custom-border border-l mt-8 border-[#646464]  p-4">
            <div className="">
            <div className="mt-7 ">
                <button className="border rounded-sm border-[#646464] p-2 bg-[#121414] text-white">2016 - 2022</button>

 </div>

        <div className="max-w-161.5 max-h-80 border rounded-xl p-5 border-[#222222] my-4">
            <h1 className={`${dM_Sans.className} font-bold text-[18px] text-[#F89222]`}>UI/UX design</h1>
            <p className={`${dM_Sans.className} text-[#8F8F8F] font-normal text-[12px] `}>Web site design</p> <br />

            <hr  className="text-[#222222] my-4"/>

            <p className={`${dM_Sans.className} text-[1rem] font-normal text-white`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum
eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.
            </p>
        </div>

        </div>


            <div className="mt-8">
            <div className="mt-7 borderimg">
                <button className="border rounded-sm border-[#646464] p-2 bg-[#121414] text-white">2012 - 2016</button>

 </div>

        <div className="max-w-161.5 mix-h-[154px] border rounded-xl p-5 border-[#222222] my-4">
            <h1 className={`${dM_Sans.className} font-bold text-[18px] text-[#F89222]`}>Junior Web  designers</h1>
            <p className={`${dM_Sans.className} text-[#8F8F8F] font-normal text-[12px] `}>Product designer</p> <br />

            <hr  className="text-[#222222] my-4"/>

            <p className={`${dM_Sans.className} text-[1rem] font-normal text-white`}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum
eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.
            </p>
        </div>

        </div>
        </div>

</div>



        </>
    );
};

export default Resume;