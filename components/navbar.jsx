import React from "react";
import { useState, useEffect } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { Container, Divider, SimpleGrid } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import ContactModal from "./modals/contactModal";
import CollabrateModal from "./modals/collabrateModal";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenContact ,setIsOpenContact]  = useState(false)

  const handleToggleMenu = () => {
    setOpen(!open);
  };

 

  const items = [
    {
      id: "1",
      name: "ABOUT",
      title: "",
      body: "Content for modal 1.",
      section: "about",
    },
    {
      id: "2",
      name: "SERVICES",
      title: "Modal 2",
      body: "Content for modal 2.",
      section: "services",
    },
    {
      id: "3",
      name: "MEMBERS",
      title: "Modal 3",
      body: "Content for modal 3.",
      section: "members",
    },
    {
      id: "4",
      name: "CLIENTS",
      title: "Modal 4",
      body: "Content for modal 4.",
      section: "clients",
    },
    { id: "5", name: "CONTACT", title: "", body: "con", section: "contact" },
  ];


  // ---------------- fixed of navbar---------------------------
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  const text = [
    "BEATABLE",
    "DERSTANDABLE",
    "STOPPABLE",
    "AFRAID",
    "CONVENTIONAL",
    "WAVERING",
    "PARALLELED",
    "COMPROMISING",
    "BELIEVABLE",
    "EXPECTED",
    "LMTD"
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className=" h-[555px]  z-50  md:h-[800px]  xl:w-[1920px] xl:h-[1080px]   !overflow-x-hidden  ">
      <div
        style={{
          backgroundImage:
            "url(/wallpaper.jpeg)",
            
        }}
        className="bg w-full h-full   m-0 "
      >
        <ContactModal isOpen={isOpenContact} setIsOpen={setIsOpenContact} />
        <CollabrateModal isOpen={isOpen} setIsOpen={setIsOpen} />
        

        <div className=" !overflow-x-hidden  m-0">
          {/* <div className="absolute hidden lg:block !overflow-x-hidden -right-[200px]  top-32    ">
            <img src="/section1.png" className="w-[720px]" />
          </div> */}



         <div className="absolute hidden lg:block   !overflow-x-hidden -right-[6px] top-32    ">
            <img src="/section1.png" className="w-[720px] " />
          </div>



          <div className="absolute hidden lg:hidden  !overflow-x-hidden -right-[6px] top-32    ">
            <img src="/circlenavMobile.png" className="w-[300px] " />
          </div>
        </div>




        <div
          className={`fixed  left-0  overflow-hidden  false  z-[9999]   w-screen py-4 ${
            isFixed ? "bg-[#080852] top-0" : " top-4"
          }`}
        >
          <div className="w-[90%] flex items-center   justify-between mx-auto">
            <div>
              {!open && (
                <Link href='/'>
               
                <img
                  className="md:w-[204px] md:h-[71px] w-[165px] h-[60px]"
                  src="/logo.png"
                />
                </Link>
              )}
            </div>
            <menu className="flex sm:hidden gap-4 items-center">
              <img
                className="w-[22px]  h-[22px] -z-3 hidden"
                src="https://unlimed-com.vercel.app/img/color-wheel-1.png"
              />
              <li>
                <button onClick={handleToggleMenu}>
                <CiMenuFries className="text-white text-3xl mr-2    !font-bold" />
                </button>
              </li>
            </menu>
            <ul className=" !cursor-pointer lg:text-[20px] z-50 hidden sm:flex gap-10 ml-2 list-none items-center text-white">
              <li
                onClick={() => {
                  const element = document.getElementById("about");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  const element = document.getElementById("services");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Services
              </li>

              <li
                onClick={() => {
                  const element = document.getElementById("members");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Members
              </li>
              <li
                onClick={() => {
                  const element = document.getElementById("clients");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Clients
              </li>
              <li
                onClick={() => {
                  // const element = document.getElementById("contact");
                  // element?.scrollIntoView({
                  //   behavior: "smooth",
                  // });

                  setIsOpenContact(true)
                }}
              >
                Contact
              </li>
              <li>
                <img
                  className="w-[39px] h-[39px] hidden"
                  src="https://unlimed-com.vercel.app/img/color-wheel-1.png"
                />
              </li>
            </ul>
          </div>
        </div>


{/* ------OVERLAY----- */}
        <div className="bg-ble-950  bg-[#080852]   !over-flow-x-hidden  z-1  bg-opacity-50 w-full h-full">
          <div className="flex z-50 pt-12 md:pt-2 items-center w-[90%] h-full mx-auto">
            <div>
              {/* <img src="/titleDesk.png" /> */}

              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p class="sm: hidde cursor-pointer1  text-[28px] sm:text-[32px] lg:text-[84px]  items-center font-normal  text-white   -mt-20 lg:-mt-32 ">
                  WE ARE
                  <div class="flex  !items-center mx-2">
                    <img
                      class=" h-[22px] w-[34px] mb-[1px] mr-[2px] sm:w-[60px] sm:h-[52px] sm:mr-1 md:ml-0 lg:w-[130px] lg:h-[80px] lg:mr-2 xl:w-[130px] xl:h-[93px] object-center  sm:mb-[1px]"
                      src="/un.png"
                    />
                    

                    <motion.span
                    
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                  
                    key={text[currentIndex]}
                    
                    className={`content-list !overflow-hidden text-white animation1 text-[29px] sm:text-[65px] lg:text-[100px] xl:text-[130px]  uppercase font-semibold transition-transform duration-500 ease-in-out  
                  `}
                    
                    >
                  


{text[currentIndex]}







                    </motion.span>

                  </div>
                
                </p>
             
              </div>

      




              <Button
                onClick={() => setIsOpen(true)}
                className="relative z-20 text-[13px]  lg:text-[22px] bg-white flex justify-center items-center p-4 w-[182px] lg:!w-[364px] lg:!h-[72px] text-[#080852] font-bold rounded-md mt-[25px] lg:mt-4 hover:text-white hover:!bg-[#080852]   "
              
              >
                <span>
                  {/* <img
                    className="lg:w-[24px] w-[16px] h-[10px] lg:h-[16px]"
                    src="/btn2.png"
                    alt=""
                  /> */}

<span className="font-raleway text-[#82C809] font-extrabold  text-[18px]">Un</span>
                   
                </span>
                lock Potential
              </Button>
            </div>
          </div>
        </div>


{/* ----------------------MOBILE NAVBAR -------------------------------------- */}

        {open && (
          <div className=" !z-50 fixed top-0 right-0 left-0 bottom-0 ">
            <div className="!w-full  !max-w-screen-lg -top-[110px] !z-50 relativ absolute  ">
              <div
                className={`sm:flex flex-col h-[400px] w-[100vw] justify-between  bg-white relative !z-10 pt-[8rem] pb-10    ${
                  open ? "block" : "hidden"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex justify-between w-full   px-12">
                  <Link href='/'>
                    <img
                      src="/logowhite.png"
                      className="w-[165px]  h-[60px]"
                    />

</Link>
                    <button onClick={handleToggleMenu}>
                      <img src="/close.png" className="w-5 h-4 ml-4  cursor-pointer absolute  " alt="" />
                    </button>
                  </div>
                </div>

                <Divider className="mt-10" />

                <div className=" p-7 ">
                  <div className="grid grid-cols-2 gap-40 !w-full mx-auto  md:grid-cols-5 text-black">
                    <div className="flex flex-col ml-10 sm:ml-20 items-start space-y-2 md:col-span-3  ">
                      {items.slice(0, 3).map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            const element = document.getElementById(
                              item?.section
                            );
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                          className="hover:text-blue-600 text-[20px]"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col -ml-10 sm:ml-0 items-start space-y-2 md:col-span-2">
                      {items.slice(3).map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
if(item?.section !== 'contact'){
                            const element = document.getElementById(
                              item?.section
                            );
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }

else {

  setIsOpenContact(true)
  setOpen(false)
}


                          }

                      


                        }
                          className="hover:text-blue-600 text-[20px]"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
