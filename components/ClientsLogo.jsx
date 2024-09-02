import { Fragment } from "react";
import ClientSlider from "./ClientSlider";
import { useEffect, useState, useRef } from 'react';
export default function ClientsLogo() {



// --------------------motion for word animation-----------------

const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 1 } // Trigger when 10% of the element is visible
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
}, []);






  return (
    <div className="w-full h-[600px] md:h-[800px] h-aut  max-h-[800px] cursor-pointer overflow-hidden ">
      <div class="bg-white">
        <div class="w-[90%] mx-auto mt-12">
          {/* <img src="/LogoTitle.png" class="sm:w-1/3 pt-8 hidden md:block" />

          <img src="/LogoTitleSm.png" class="sm:w-1/3 pt-8 md:hidden block" /> */}

<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between leading-none">
            <p class="  text-[27px]   font-normal  text-[#191919]  md:text-[35px]">

          
            <span className="!mr-2">  We're</span>
            {/* <span className="font-raleway text-[#82C809] font-extrabold  lg:text-[60px] sm:text-[30px] text-[30px]">UN</span> */}
           
                 <img
                  class="w-[29px] h-[21px] mb-[4px] mr-[2px] sm:mb-[9px] sm:w-[45px] sm:h-[27px] sm:ml-1  inline-block object-fit   "
                  src="/UN.png"
                />
           
            {/* <span className="text-[#191919]  inline-block  uppercase font-semibold fle items-center"> */}
            
            {/* <div  ref={ref} className={`transition-transform duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 sm:translate-y-32 -translate-y-10'}`}> */}
            <span className=" font-raleway  uppercase sm:text-[35px] text-[27px] !font-bold ">

           
      
                Matched


                </span>
{/* </div> */}
              <div class="flex items-center ">
             
                   <span className=" block">in your collective experience</span>
              </div>
              {/* Potential */}
            </p>
            {/* <img class="sm:hidden w-[90%]" src="/assets/icon-ft.png" /> */}
         
          </div>


          <ClientSlider />
        </div>

        {/* <div class="swiper-slide swiper-slide-active" style="width: 203.571px;"><img class="w-[250px] h-[250px]" src="/assets/Done/cocacola.png"></div> */}
      </div>
    </div>
  );
}
