import Blog from "@/_Component/Blog";
import Portfolio from "@/_Component/Portfolio";
import Resume from "@/_Component/Resume";
import Skills from "@/_Component/Skills";


export default function Home() {


  return (

    <div className="">
      <main className="">
        
     



  
     {/* Rusume  */}
    <section>

    <Resume/>
    </section>

{/* skill */}
    <section>
      <Skills/>
    </section>


{/* portfolio */}
    <section>
      <Portfolio/>
    </section>


    {/* Blog */}
    <section>
      <Blog/>
    </section>


   
       
      </main>
    </div>
  );
}
