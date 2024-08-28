import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

export default function CommpanyModal({ isOpen, setIsOpen, company }) {
  function closeModal() {
    setIsOpen(false);
  }

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
                className="text-lg font-medium mt-6 pr-10 pt-3  border-t-[100px] -top-12 !  w-full  relative rounded-2xl border-red-700 text-end flex justify-end leading-6 text-gray-900"
              >
               <IoMdClose className="text-3xl  relative -top-20 text-white cursor-pointer" onClick={closeModal} />
              </Dialog.Title>
                  <div className=" flex cursor-pointer gap-12 md:flex-row flex-col ml-[15%] ">
                    <div className="relative ">
                      <img
                        src={company?.image}
                        alt="Card people"
                        className=" object-contain w-[130px] h-[80px] lg:w-[140px] lg:h-[55px]  z-10 rounded-lg "
                      />
                      {company?.link !== '' &&

<div className=" text-[12px] md:text-[18px] font-thin mt-12  ">
  <a className="!text-black flex gap-2 items-center  !no-underline" href={company?.link} target="_blank">

<span> <img src="/link.png" alt="" /> </span>
  <div className="text-sm md:w-48">{company?.link}</div>
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
                      <div className="w-[90%] text-[12px] md:text-[18px]">
                        
                       {company?.desc}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
