import Blog_Card from "./Blog_Card";


import img1 from "../../public/Images/Rectangle 12660.jpg";
import img2 from "../../public/Images/Rectangle 12662.png";
import img4 from "../../public/Images/Rectangle 12667 (1).png";
import img5 from "../../public/Images/Rectangle 12663 (1).png";
import img3 from "../../public/Images/Rectangle 12664 (1).png";
import img6 from "../../public/Images/Rectangle 12665 (1).png";
import { DM_Sans } from "next/font/google";


const dM_Sans = DM_Sans({
  subsets: ['latin'],
  weight : '700'
})



const Blog = () => {

    return (
        <>

<div className="lg:ml-114">
 <h1 className={`text-white ${dM_Sans.className} text-[3rem] font-bold text-white mt-16`}>Blog </h1>


        <div className="max-w-172 mt-6 grid lg:grid-cols-2 auto-rows-[180px] gap-6">

  <Blog_Card
    image={img1}
    title="The artist vocation is to send light into the human heart."
    excerpt="Lorem ipsum is simply dummy text of the printing industry."
    span={2}
  />

  <Blog_Card
  image={img2}
  title="The mission of art is to represent nature"
  excerpt="Lorem ipsum dolor sit amet consectetur."
  author="Amitaz Ahmed"
   span={2}
/>


  <Blog_Card
    image={img4}
    title="The principles of art are not to portray but to evoke"
    excerpt="Lorem ipsum dolor sit amet."
     span={2}
  />

  <Blog_Card
    image={img3}
    title="There are countless versions of lorem ipsum"
    excerpt="Lorem ipsum has been the industry's standard."
    span={2}
  />

  <Blog_Card
    image={img5}
    title="Illustrations of the week"
    excerpt="Lorem ipsum dolor sit amet."
     span={2}
  />

  <Blog_Card
    image={img6}
    title="Party Ideas Starting But Unnecessary"
    excerpt="Lorem ipsum dolor sit amet."
    span={2}
  />

</div>


</div>
        
            
        </>
    );
};

export default Blog;