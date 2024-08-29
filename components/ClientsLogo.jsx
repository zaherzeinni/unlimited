import { Fragment } from "react";
import ClientSlider from "./ClientSlider";

export default function ClientsLogo() {
  return (
    <div className="w-full h-[600px] md:h-[800px] h-aut  max-h-[800px] cursor-pointer overflow-hidden ">
      <div class="bg-white">
        <div class="w-[90%] mx-auto mt-12">
          {/* <img src="/LogoTitle.png" class="sm:w-1/3 pt-8 hidden md:block" />

          <img src="/LogoTitleSm.png" class="sm:w-1/3 pt-8 md:hidden block" /> */}

<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p class="  text-[30px]   font-normal  text-[#191919]  xl:text-[60px]">

          
            <span className="!mr-2">  We're</span>
            {/* <span className="font-raleway text-[#82C809] font-extrabold  lg:text-[60px] sm:text-[30px] text-[30px]">UN</span> */}
           
                 <img
                  class="sm:w-[29px] sm:h-[23px] sm:mb-[5px] xl:w-[72px] xl:ml-2 xl:mb-[8px] mb-[6px] inline-block object-fit xl:h-[46px] lg:w-[30px] lg:h-[23px] lg:mb-1 w-[29px] h-[23px] "
                  src="/UN.png"
                />
           
            <span className="text-[#191919] inline-block  uppercase font-semibold fle items-center">

           
      
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
