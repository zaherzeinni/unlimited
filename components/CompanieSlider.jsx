import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import CompanyModal from "./modals/companyModal";
import Slider from "react-slick";
import { companyData } from "./Functions/data";
export default function DigiSuggestion({}) {
  const product = true;

  const [isOpen, setIsOpen] = useState(false);
  const [company, setCompany] = useState(null);







  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay:true,
    arrows: false,
    dots: true,
    autoplay: {
      delay: 100,
    },

    slidesPerRow: 2,
    rows: 2,
    slidesPerRow: 1,

    slidesToShow: 6,
    slidesToScroll: 3,
 

    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    product && (
      <>
        {/* <h5 className="text-center py-5 text-xl font-semibold">
          پیشنهاد دیجی‌کالا
        </h5> */}
       
        <div className="w-full min-h-80 cursor-pointer !mb-24 ">
          <Slider {...settings}  className="mb-5">
            {companyData?.map((product, index) => {
              return (
                //   <Fragment key={index}>

                <div>
                  <div key={index} className=" flex cursor-pointer">
                    <img
                      src="/SubtractCompany.png"
                      alt="Card people"
                      className=" object-contain relative justify-start flex items-center

w-[100px] h-[170px] rounded-full    lg:w-[170px] lg:h-[250px]  "
                    />
                    <div className="my-9 -ml-24 lg:-ml-[155px]">
                      <div
                        onClick={() => {
                          setIsOpen(true);
                          setCompany(product);
                        }}

                        className=" bg-white   px-8 ml-4 rounded-3xl  relative h-[100px]  font-bold text-wrap   content-center  

                        lg:w-[225px] lg:h-[170px] 
"
                      >
                        <div className="mt-0">
                          <img
                            src={product?.image}
                            className="object-contain w-[65px] lg:w-[140px] lg:h-[55px]  z-10 rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                //   </Fragment>
              );
            })}
          </Slider>

          {/* <Swiper


autoplay={true}

            slidesPerView="auto"
            breakpoints={{
              0: {
                slidesPerView: 2,
                grid: {
                  rows: 3,
                },
              },
              640: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                },
              },
              1200: {
                slidesPerView: 5,
                grid: {
                  rows: 2,
                },
              },
            }}
            navigation={true}
            modules={[Grid, Navigation]}
            className="suggestion w-full h-full rounded-2xl "

            style={{
                backgroundImage:
                  "url(/Mask.png)",
              }}



          >
            {products
            
              .map((product, index) => {
                return (
                //   <Fragment key={index}>
                    <SwiperSlide>
                    <div>
                    <div key={index} className=" flex cursor-pointer">
                      <img
                      
                        src="/SubtractCompany.png"
                        alt="Card people"
                        className=" object-contain relative justify-start flex items-center
 
 w-[100px] h-[170px] rounded-full "
                      />
                      <div className="my-9 -ml-24">
                        <div
                          onClick={() =>{ setIsOpen(true) ; setCompany(product) }}
                          className=" bg-white   px-8 ml-4 rounded-3xl  relative h-[100px]  font-bold text-wrap   content-center  
"
                        >
                          <div className="mt-1">
                         
                            <img
                              src="/cmd.png"
                              className="object-contain w-[65px]  z-10 rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>



                    </div>
                    </SwiperSlide>
                //   </Fragment>
                );
              })}
          </Swiper> */}

          <CompanyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            company={company}
          />
        </div>
      </>
    )
  );
}
