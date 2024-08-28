import React from "react";
import CountUp from 'react-countup';



// -----------------------------sectionOne ABOUT section after Animation------------------

export default function SectionOne() {



  return (
    <div id="about" className="bg-[#ffff] h-[1100px] -mt- lg:mt-0 !overflow-x-hidde  relative   w-full   ">





<img 
    src='/clip-path-group.png' 
    alt='un background' 
    className='absolute right-0 hidde lg:block  object-fill   bg-cover  bg-[#f5f5f5]1 bg-[#fff]  md:bg-transparent  transform -translate-y-1/2 !w-full lg:!w-1/2 !h-full top-[550px] max-w-full'
  />

<div className=" w-full h-full">

      
      <div className=" bg-mas flex items-center relative    h-[600px]">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col">
            {/* <div className="">
              <img src="/sectionOneTitle.png" className="w-[90%] sm:w-[50%]" />
            </div> */}

<p className="raleway sm:mt-44 md:mt-52 lg:mt-20 leading-none sm:w-[550px] sm:text-[35px] w-[100%] mb-1 sm:mb-0 text-[25px]  text-wrap">
          Revolutionizing the consultancy and management experience,
        </p>

        <div className="flex items-center justify-start leading-none ">

        <span className="font-raleway text-[#82C809] font-extrabold  sm:text-[38px] text-[27px]">UN</span>

          <span className="staatliches-regular sm:text-[38px] text-[27px] w-[500px] !font-bold  ">
            APOLOGETICALLY
          </span>
        </div>






            <div className="flex flex-col-reverse gap-4  sm:flex-row md:gap-14 mt-8 ">
              <div className="flex  gap-8 md:w-[100%] justify-center">
                <div className="flex  flex-col w-1/2">
                  <span className="lg:w-1/2  font-tajwal text-[#82C809] font-medium text-[40px]">
                  

                    <CountUp
                className="counter font-bold text-[45px]"
                enableScrollSpy={true}
                scrollSpyDelay={1000}
                scrollSpyOnce={true}
                start={0}
                end={30}
                duration={2}
                delay={0.2}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" " //left side of counter
                suffix="" //right side of counter
              ></CountUp>



                  </span>
                  <span className="text-[15px]">Years&nbsp;on the market</span>
                </div>
                <div className="  flex flex-col w-1/2">
                  <span className="lg:w-1/2 font-tajwal text-[#82C809] font-medium text-[45px]">
                  <CountUp
                className="counter font-bold text-[45px] "
                enableScrollSpy={true}
                scrollSpyDelay={1000}
                scrollSpyOnce={true}
                start={0}
                end={400}
                duration={2}
                delay={0.2}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" " //left side of counter
                suffix="" //right side of counter
              ></CountUp>

                  </span>
                  <span className="text-[15px]">Satisfied Customers</span>
                </div>

                <div className="  flex flex-col w-1/2">
                  <span className="lg:w-1/2 font-tajwal text-[#82C809] font-bold text-[45px]">
                  <CountUp
                className="counter font-bold text-[45px]"
                enableScrollSpy={true}
                scrollSpyDelay={1000}
                scrollSpyOnce={true}
                start={0}
                end={10}
                duration={2}
                delay={0.2}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" " //left side of counter
                suffix="" //right side of counter
              ></CountUp>
+
                  </span>
                  <span className="text-[15px]"> Countries</span>
                </div>


              </div>
              <div className="    sm:w-1/3 text-[14px] sm:text-[22px] lg:w-[600px] xl:w-[800px] items-center">
                At <span className="font-bold">Unlmtd</span>, our collective
                success starts with you. We work with top independent agencies
                and industy experts to unlock growth, innovation and strategic
                business opportunities that enable you to excel in the
                competitive global marketplace.
              </div>
            </div>
          </div>



{/* <div className="bg-[#f5f5f5] -z-1 opacity-6 top-0 left-2 w-full h-full absolute  bg-[url('/clip-path-group.png')] bg-contain ">

</div> */}


        </div>
      </div>

</div>


    </div>
  );
}
