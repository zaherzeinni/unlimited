import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

export default function CommpanyModal({ isOpen, setIsOpen, company }) {
  function closeModal() {
    setIsOpen(false);
  }


  const cardColor = `${company?.title === 'JURNEE' ? 'border-[#0101FF]' : company?.title === 'Lava Brands' ? 'border-red-500' :    
  company?.title === 'DAF' ? 'border-black' : 
  company?.title === 'CMD+' ? 'border-black' : 
  company?.title === 'ADCREATORS MENA' ? 'border-black' : 
  company?.title === 'The Bold Option' ? 'border-yellow-500' : 
  company?.title === 'Livingroomksa' ? 'border-[#FFBC00]' : 
  company?.title === 'Black Rhino' ? 'border-black' : 
  company?.title === 'Mia' ? 'border-black' : 
  company?.title === 'Vidmatic' ? 'border-black' : 
  company?.title === 'Mindfield' ? 'border-[#00ADDD]' : 
  company?.title === 'Antworks' && 'border-[#A60000]'  

  } `;

// Check if the text length exceeds 300 characters
   const isLongText = company?.desc.length > 300;
 // Determine the class based on the text length
 const textClass = isLongText ? 'text-base' : 'text-base';



  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >





    
              <Dialog.Panel  className="  w-full  mt-24 !max-w-[80%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="mt-2 md:1px-4 md:1py-4 -mx-10  ">
                <Dialog.Title
                as="h3"
                className={`text-lg font-medium mt-6 pr-10 pt-3  border-t-[100px] -top-12 !  w-full  relative rounded-2xl text-end flex justify-end leading-6 text-gray-900      ${cardColor}    `}
              >
               <IoMdClose className="text-3xl  relative -top-20 text-white cursor-pointer" onClick={closeModal} />
              </Dialog.Title>
                  <div className=" flex cursor-pointer gap-12 md:flex-row flex-col ml-[15%] ">
                    <div className="relative ">
                      <img
                        src={company?.image}
                        alt="Card people"
                        className=" object-contain w-[130px] h-[80px] 1lg:w-[30%] 1lg:h-[30%] lg:w-[200px]1 lg:h-[100px]1  z-10 rounded-lg "
                      />
                      {company?.link !== '' &&

<div className=" text-[12px] md:text-[18px] font-thin mt-12  ">
  <a href={company?.link} target="_blank" rel="noopener noreferrer" className="!text-black flex gap-2 items-center  underline" >

<span> <img src="/link.png" alt="" /> </span>
  <div className="text-sm md:w-52 w-full">{company?.link}</div>
  </a>
</div>
}

                    </div>


{/* ----link-- */}



                    {/* ----Desc-- */}

                    <div className="">
                      <div>
                        <p className=" font-thin mb-4 text-[20px] md:text-[32px]">
                          {" "}
                          <span className=" font-bold">{company?.title} </span>
                        </p>
                      </div>
                      <div className={`${textClass} w-[90%] text-[12px] md:text-[18px] md:mr-16 lg:mr-80 xl:mr-96 2xl:mr-[700px]`}>
                        
                       {company?.desc}
                      </div>
                    </div>
                  </div>
                </div>

  
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
