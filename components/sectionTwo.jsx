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
          <div className="flex flex-col sm:flex-row  gap-4">
            <img
              className="object-cover hidden sm:block w-[250px] h-[280px] p-2"
              src="/A_image.png"
            />
            <div className="flex gap-4 sm:hidden">
              <img
                className="object-cover w-[80px] sm:w-[150px]"
                src="/A_image.png"
              />
              <img
                className="object-cover w-[280px] h-[120px] sm:hidden"
                src="/sectionThreeTitle.png"
              />
            </div>
            <div>
              <img
                className="object-cover hidden sm:block w-1/2"
                src="/sec3td.png"
              />
              <p className="text-white p-4 sm:p-0  sm:w-1/2 text-[16px] mt-4 font-extralight">
                Give your business the <span className="font-bold">Unlmtd</span>{" "}
                advantage by leveraging diverse skills with tailored strategies
                and innovative problem-solving to address your unique
                challenges.
              </p>
            </div>
          </div>
          <div className="text-white hidden sm:flex   space-x-4 sm:space-x-24  justify-center text-center mt-10 lg:mt-24">
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
