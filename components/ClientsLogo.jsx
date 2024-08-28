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
            <span className="text-[#191919] inline-block  uppercase font-semibold fle items-center">

           
            <img
                  class="xl:w-[72px]  inline-block object-fi xl:h-[46px] w-[25px] h-[25px] "
                  src="/UN.png"
                />
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
