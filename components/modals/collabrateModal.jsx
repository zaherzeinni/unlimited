import { Dialog, Transition } from "@headlessui/react";
import { Fragment ,useState } from "react";
import axios from 'axios'
import { Button } from "@chakra-ui/react";

import { IoMdClose } from "react-icons/io";


export default function CollabrateModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

      //const token = getCookie('token');
      const [formData, setFormData] = useState({
        type: "international_request",
        name: "",
        email: "",
        phone: "",
        body: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {

        e.preventDefault();


        // axios.post(url + "/" + prefix + '/request/send', formData , {
        //         headers:{
        //         'Authorization' : 'Bearer ' + token,
        //         }
        //     })
        //     .then((response) => {
        //         toast.success("سفارش با موفقیت ثبت شد منتظر تماس کارشناسان ما باشید");
        //     })
        //     .catch((error) => {
        //         toast.error(error.response.data)
        //     })
        //     .finally(() => {
        //         console.log("final")
        //     });
    };





  return (
    <Transition  className='mt-12 !z-40' appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative   z-40" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-[80%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium text-end flex justify-end leading-6 text-gray-900"
              >
               <IoMdClose className="text-3xl  cursor-pointer" onClick={closeModal} />
              </Dialog.Title>
              <div className=" mt-4 container">

<div className=" w-[80%] mx-auto px-2 lg:mx-20">

<div>
  <img className=" lg:w-[60px] lg:h-[40px]  w-[45px] h-[25px]" src="/collogo.png" alt="" />
</div>

<div className=" flex mt-3 items-center">
<img className="w-[28px]  h-[20px] lg:w-[74px] lg:h-[50px]  " src="/cplln.png" alt="" />
<span className="text-[20px] lg:text-[75px] text-[#080852] ">Lock Potential</span>
</div>


<div>
<form>
                    <div className=" w-full flex max-md:flex-col gap-3 mb-3 ml-1">
                        <div className="w-1/3 max-md:w-full">
                            <input 
                                name="name"
                                className="p-2 w-full bg-[#EEEEEE]" 
                                type="text" 
                                placeholder="Full Name" 
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/3 max-md:w-full">
                            <input 
                                name="email"    
                                className="p-2 w-full bg-[#EEEEEE]" 
                                type="email" 
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="w-1/3 max-md:w-full">
                            <input 
                                name="phone"    
                                className="p-2 w-full bg-[#EEEEEE]" 
                                type="text" 
                                placeholder="Phone" 
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>


                    </div>
         
                    <div className=" w-full ml-1">
                        <textarea 
                            name="body"
                            style={{resize : "none"}} 
                            className="w-full p-2 bg-[#EEEEEE]" 
                            rows={4} 
                            placeholder="Message" 
                            value={formData.body}
                            onChange={handleChange}
                        />
                    </div>
                    <div className=" mb-10 mt-4  mx-auto  flex justify-center" onClick={handleSubmit}>
                        <Button className="!text-white w-[200px] h-[72px] !bg-[#82C809] hover:!bg-green-700 flex justify-center mx-auto">
                            Submit
                        </Button>
                    </div>
                </form>
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
