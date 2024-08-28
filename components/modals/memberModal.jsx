import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

export default function MemberModal({ isOpen, setIsOpen, member }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 overflow-scroll" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-1000"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full mt-24 !max-w-[80%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {member?.first}
                </Dialog.Title> */}


              <Dialog.Title
                as="h3"
                className="text-lg font-medium text-end flex justify-end leading-6 text-gray-900"
              >
               <IoMdClose className="text-3xl  cursor-pointer" onClick={closeModal} />
              </Dialog.Title>

                
                <div className="mt-2 ">
                  <div className=" flex cursor-pointer gap-12 md:flex-ro flex-col ">
                    <div className="relative md:w-[70%]">
                      <img
                        src="/peoopleBg.png "
                        alt="Card people"
                        className=" 
 
  rounded-full w-[170px] h-[200px] "
                      />

                      <img
                        className="absolute w-[170px] object-cover  rounded-full h-[170px]  top-[1rem] left-4"
                        src={member?.image}
                        alt=""
                      />
                    </div>

                    {/* ----Desc-- */}

<div className="">

<div>
    <p className=" font-thin text-[20px] md:text-[32px]"> 
    <a className="w-full h-full text-thin my-2  !no-underline !text-black" href={member?.link} target="_blank">

    <span className=" font-bold">{member?.first} </span>  {member?.last}

    </a>
       
       
       </p>


<p className=" text-[12px] md:text-[18px] opacity-[0.8]  mb-4 font-thin  text-[#191919]">{member?.title}</p>


{/* {member?.link !== '' && */}
{/* <p className=" text-[18px]   w-full h-auto bg-black"> */}
  {/* <a className="w-full h-full text-thin my-2 !text-black" href={member?.link} target="_blank">{member?.link}</a> */}
{/* </p> */}
{/* } */}

</div>
                    <div className="w-[90%] text-[12px] md:text-[18px] text-black">



{member?.desc}
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


