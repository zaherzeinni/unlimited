import { Fragment } from "react";
import ClientSlider from "./ClientSlider";

export default function ClientsLogo() {
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
                  class="sm:w-[29px] sm:h-[23px] sm:mb-[5px] md:w-[45px] md:ml-0 md:mb-[8px] mb-[6px] inline-block object-fit md:h-[27px] w-[29px] h-[23px] "
                  src="/UN.png"
                />
           
            {/* <span className="text-[#191919]  inline-block  uppercase font-semibold fle items-center"> */}
            <span className=" font-raleway  uppercase md:text-[35px] text-[27px] !font-bold ">

           
      
                Matched


                </span>

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
