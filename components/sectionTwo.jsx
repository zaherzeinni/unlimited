import React from "react";




// --------------------------- sectionTWO SERVICES LIST right and left Columns----------------

export default function SectionTwo() {
  return (
    <div id="services">
      <div className="py-16  md:py-28 bg-gradient-to-tr bg-[#080852]  relative mx-auto w-full">
        <img 
        
  //  src='bg-sec3.png'
   src="/Mask.png"
  
  alt="wallpaper" className="absolute !bg-opacity-5 !bg-whit  inset-0 w-full h-full object-cover mix-blend-overla z-50"/>

        <div className="sm:w-[90%] mx-auto mt-12 !mb-28">
          <div className="flex sm:flex-row  gap-1">
            <img
              className="object-cover hidden1 sm:block1 w-[130px] h-[150px] sm:w-[160px] sm:h-[180px] md:w-[240px] md:h-[280px] p-2"
              src="/Subtract.svg"
            />


<div className='text-white my-10 sm:my-0 '>
           
           <p className='raleway mt-5    sm:ml-4 md:ml-3  text-[20px] w-[90%] sm:w-auto sm:text-[30px] md:text-[40px] lg:text-[50px] leading-none'>Business excellence made</p>
           
           <div>              
        <div className='flex items-center justify-start sm:ml-4   md:ml-3  leading-none '>
        <div className='flex '>
        {/* <span className="font-raleway text-[#82C809]  text-[20px] font-extrabold  sm:text-[38px] md:text-[50px] ">UN</span> */}
       
        <img
                  class="w-[25px] h-[16px] sm:w-[40px] sm:h-[33px] md:w-[48px] md:h-[41px]   inline-block object-fit  "
                  src="/UN.png"
                />
        <div className="staatliches-regular text-[20px] sm:text-[40px] md:text-[50px] items-end flex  !font-bold  ">BELIEVABLY</div>
        <p className='raleway sm:ml-3 text-[18px] sm:text-[30px] md:text-[40px] lg:text-[50px] items-end flex'>easy</p>
        
        
  
        </div>
       

        </div>
        <p className="text-white p-2 sm:p-0 sm:ml-4 -ml-32 sm:w-[80%] text-[14px] w-[300px] md:text-[22px] mt-10 sm:mt-1  md:w-[80%] lg:w-[50%] font-extralight">
                Give your business the <span className="font-bold">Unlmtd</span>{" "}
                advantage by leveraging diverse skills with tailored strategies
                and innovative problem-solving to address your unique
                challenges.
              </p>
</div>

      </div>

          </div>
          <div className="text-white hidden sm:flex  lg:text-[32px]  space-x-4 sm:space-x-24  justify-center text-center mt-10 lg:mt-24">
            <div className="space-y-16 text-end">
       
            <div>Marketing and Communication</div>
            <div>Content Development  &amp; Production</div>
            <div>Social, Digital &amp; Performance Marketing</div>
            <div>PR &amp; Corporate Communications</div>
            <div>Technology</div>
            <div>Branded integration, Branded Content</div>
            <div>Management Consultancy</div>
            <div>Business Consulting &amp; Transformation</div>
            <div>Corporate Governance</div>
            <div>Training &amp; Development</div>
            
            </div>
            <div className="relative w-[30px]">
              <div className="w-[2px] h-full bg-gradient-to-b from-[#82C809] to-[rgba(255,255,255,0)]"></div>
              <img
                className="absolute top-3/4 right-4"
                src="/circle.png"
              />
            </div>
            <div className="space-y-16 mt-10 text-start">
 <div>Strategy and Planning</div>
 <div>Experiential &amp; Events management</div>
 <div>Media Planning &amp; Buying</div>
 <div>UX/UI &amp; Web/App Design</div>
 <div>AI integration</div>
 <div>Content Monetization Solutions</div>
 <div>Fractional Executive Support</div>
 <div>Business Coaching</div>
 <div>Sustainability</div>
 
            </div>
          </div>
{/* -------------------------mobile screen ONE COLUMN---------------------------- */}

          <div className="text-white  sm:hidden flex     justify-center  mt-10">
            <div className="relative w-[30px]">
              <div className="w-[2px] h-full bg-gradient-to-b  to-[rgba(255,255,255,0)] from-[#82C809]"></div>
              <img
                className="absolute top-[14px] right-4"
                src="/circle.png"
              />
            </div>
            <div className="space-y-8 mt-4">
              <div>Marketing and Communication</div>
              <div>Strategy and Planning</div>
              <div>Content Development  &amp; Production</div>
              <div>Experiential &amp; Events management</div>
              <div>Social, Digital &amp; Performance Marketing</div>
              <div>Media Planning &amp; Buying</div>
              <div>PR &amp; Corporate Communications</div>
              <div>UX/UI &amp; Web/App Design</div>
              <div>Technology</div>
              <div>AI integration</div>
              <div>Branded integration, Branded Content</div>
              <div>Content Monetization Solutions</div>
              <div>Management Consultancy</div>
              <div>Fractional Executive Support</div>
              <div>Business Consulting &amp; Transformation</div>
              <div>Business Coaching</div>
              <div>Corporate Governance</div>
              <div>Sustainability</div>
              <div>Training &amp; Development</div>
            </div>
          </div>
        </div>

{/* <div classNameName=" relative">
 
<img classNameName="hidden xl:block  absolute -right-16 -top-[166px] w-[500px] h-[400px]" src="/sec-three-green.png" alt="" />

</div> */}




      </div>
    </div>
  );
}
