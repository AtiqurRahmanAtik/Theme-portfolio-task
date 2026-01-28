import React from 'react';

const Contact = () => {

    return (
        <>
       <div class=" flex px-4 py-10">
  <div class="w-full lg:min-w-172 rounded-xl p-8">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

      
      <form class="space-y-6 w-full max-w-172">

       
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div class="space-y-1">
            <label class="text-[20px] text-white">First Name</label>
            <input
              type="text"
             
              class="w-full bg-black text-white border border-[#F5BD4D] rounded-md px-4 py-3 "
              required
            />
          </div>

          <div class="space-y-1">
            <label class="text-[20px] text-white">Last Name</label>
            <input
              type="text"
             
              class="w-full bg-black text-white border border-[#F5BD4D] rounded-md px-4 py-3 "
              required
            />
          </div>

        </div>

        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div class="space-y-1">
            <label class="text-[20px] text-white">Email</label>
            <input
              type="email"
              p
              class="w-full bg-black text-white border border-[#F5BD4D] rounded-md px-4 py-3 "
              required
            />
          </div>

          <div class="space-y-1">
            <label class="text-[20px] text-white">Phone</label>
            <input
              type="tel"
             
              class="w-full bg-black text-white border border-[#F5BD4D] rounded-md px-4 py-3"
            />
          </div>

        </div>


        <div class="space-y-1">
          <label class="text-[20px] text-white">Message</label>
          <textarea
            rows="5"
         
            class="w-full bg-black text-white border border-[#F5BD4D] rounded-md px-4 py-3 
            "
            required
          ></textarea>
        </div>

      
        <button
          type="submit"
          class="w-full bg-[#F89222] text-white py-3 rounded-md font-semibold  transition"
        >
          Send Message
        </button>

      </form>

    </div>
  </div>
</div>

            
        </>
    );
};

export default Contact;