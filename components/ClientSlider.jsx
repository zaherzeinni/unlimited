import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";

export default function ClientSlider({}) {
  const product = true;

  const products = [
    { id: 1, image: "/Done/cocacola.png" },
    { id: 2, image: "/Done/bk.png" },
    { id: 3, image: "/Done/visa.png" },
    { id: 4, image: "/Done/pandg.png" },
    { id: 5, image: "/Done/unilever.png" },
    { id: 6, image: "/Done/mondelez.png" },
    { id: 7, image: "/Done/sony.png" },
    { id: 8, image: "/Done/visa.png" },
    { id: 9, image: "/Done/etisalat.png" },
    { id: 10, image: "/Done/zain.png" },
    { id: 11, image: "/Done/emirates.png" },
    { id: 12, image: "/Done/mcdonalds.png" },
    { id: 13, image: "/Done/stc.png" },
    { id: 14, image: "/Done/neom.png" },
    { id: 15, image: "/Done/doct.png" },
    { id: 16, image: "/Done/sta.png" },
    { id: 17, image: "/Done/yas.png" },
    { id: 18, image: "/Done/heinz.png" },
    { id: 19, image: "/Done/dubai.png" },
    { id: 20, image: "/Done/hungerstation.png" },
    { id: 21, image: "/Done/nestle.png" },
    { id: 22, image: "/Done/almarai.png" },
    { id: 23, image: "/Done/google.png" },
    { id: 24, image: "/Done/ikea.png" },
    { id: 25, image: "/Done/toyota.png" },
    { id: 26, image: "/Done/ford.png" },
    { id: 27, image: "/Done/audi.png" },
    { id: 29, image: "/Done/jaguar.png" },
    { id: 30, image: "/Done/saudia.png" },


    { id: 31, image: "/Done/turkishal.png" },
    { id: 32, image: "/Done/bat.png" },
    { id: 33, image: "/Done/mercedesbenz.png" },
    { id: 34, image: "/Done/renault.png" },

    { id: 36, image: "/Done/flydubai.png" },
    { id: 37, image: "/Done/netflix.png" },

    { id: 38, image: "/Done/loreal.png" },
    { id: 39, image: "/Done/rta.png" },
    { id: 40, image: "/Done/mf.png" },
    
    
    
    
    { id: 41, image: "/Done/majid.png" },


  
    { id: 42, image: "/Done/ford.png" },

    { id: 43, image: "/Done/hershey.png" },

    { id: 44, image: "/Done/anghami.png" },
    
    { id: 45, image: "/Done/cadilac.png" },
    { id: 46, image: "/Done/t3tezos.png" },
    { id: 47, image: "/Done/mclaren.png" },
    { id: 48, image: "/Done/yap.png" },
    { id: 49, image: "/Done/zm.png" },

    { id: 50, image: "/Done/pepsi.png" },

    { id: 51, image: "/Done/op.png" },
    { id: 52, image: "/Done/apple.png" },
    { id: 53, image: "/Done/dcf.png" },


    { id: 55, image: "/Done/pandg.png" },
    { id: 56, image: "/Done/qasrwatan.png" },
    { id: 57, image: "/Done/renault.png" },
    { id: 58, image: "/Done/rta.png" },
    { id: 59, image: "/Done/samba.png" },
    { id: 60, image: "/Done/saudia.png" },
    { id: 61, image: "/Done/seaworld.png" },
    { id: 62, image: "/Done/sib.png" },
    { id: 63, image: "/Done/snbc.png" },
    { id: 64, image: "/Done/SOLICO-FOOD MANAGEMENT.png" },
    { id: 65, image: "/Done/sony.png" },
    { id: 66, image: "/Done/stc.png" },
    { id: 67, image: "/Done/tezo.png" },
    { id: 68, image: "/Done/toyota.png" },
    { id: 69, image: "/Done/turkishal.png" },
    { id: 70, image: "/Done/unilever.png" },
    { id: 71, image: "/Done/un.png" },
    { id: 72, image: "/Done/visa.png" },
    { id: 73, image: "/Done/wb.png" },
    { id: 74, image: "/Done/watania.png" },
    { id: 75, image: "/Done/wujha.png" },
    { id: 76, image: "/Done/yap.png" },
    { id: 77, image: "/Done/yas.png" },
    { id: 78, image: "/Done/zain.png" },
    { id: 79, image: "/Done/zm.png" },
    { id: 80, image: "/Done/has.png" },
    
    { id: 81, image: "/Done/Al Ula Logo.png" },
    { id: 82, image: "/Done/Charlotte Tilbury Logo.png" },
    { id: 83, image: "/Done/Cinnabon.png" },
    { id: 84, image: "/Done/ENBD.png" },
    { id: 85, image: "/Done/ET Bil Arabi Logo.png" },
    { id: 86, image: "/Done/Hempel.png" },
    { id: 87, image: "/Done/KFSHRC.png" },
    { id: 88, image: "/Done/Sephora Logo.png" },
    { id: 89, image: "/Done/Spotify Logo.png" },
    { id: 90, image: "/Done/YouTube Logo.png" },


  ];

  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplay: {
      delay: 100,
    },
    // rows: 2,

    rows: 3,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
    ],
  };

  return (
    product && (
      <div id="clients">
        {/* <h5 className="text-center py-5 text-xl font-semibold">
          پیشنهاد دیجی‌کالا
        </h5> */}

        <img
          //  src='bg-sec3.png'
          src="/Mask.png"
          alt="wallpaper"
          class="absolute inset-0 w-full h-[1000px] object-cover mix-blend-overlay cursor-default"
        />

        <div className="w-full cursor-pointer mb-5 mt-16">
          <Slider {...settings}  className="mb-5">
            {products.map((product, index) => {
              return (
                //   <Fragment key={index}>

                <div key={index}>
                  <img
                    class="md:w-[120px] py-2 object-contain md:h-[120px]  w-[77px] h-[77px] grayscale hover:grayscale-0"
                    src={product?.image}
                  />
                </div>

                //   </Fragment>
              );
            })}
          </Slider>

          {/* <Swiper
            autoplay={true}
            slidesPerView="auto"
            pagination={true}
            grid={{
              cols: 7,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                grid: {
                  rows: 3,
                },
              },
              640: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                },
              },
              1200: {
                slidesPerView: 5,
                grid: {
                  rows: 3,
                },
              },
            }}
            navigation={true}
            modules={[Grid, Navigation, Pagination]}
            className="suggestion w-full h-full rounded-2xl "
          >
            {products.map((product, index) => {
              return (
                //   <Fragment key={index}>
                <SwiperSlide>
                  <div>
                    <img class="w-[250px] h-[250px]" src={product?.image} />
                  </div>
                </SwiperSlide>
                //   </Fragment>
              );
            })}
          </Swiper> */}



        </div>
      </div>
    )
  );
}
