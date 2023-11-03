import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import QRCode from "react-qr-code";
import { totalContext } from '../../main';
import { useNavigate } from 'react-router-dom';



export default function Modal2({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow, grandtotal}) {
    let [isOpen, setIsOpen] = useState(false)
     
    function closeModal2() {
        setIsOpen(false)
    }

    function openModal2() {
        setIsOpen(true)
    }

    const navigate=useNavigate();
    const {total}=useContext(totalContext)

     return (
        <>
            <div className="  text-center rounded-lg text-white font-bold">
                <button
                    type="button"
                    onClick={openModal2}
                    className="w-full  bg-violet-600 py-2 text-center rounded-lg text-white font-bold"
                >
                    Pay Now
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal2}>
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
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2  text-left align-middle shadow-xl transition-all bg-gray-50">

                                    <section className="">
                                        <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">
                                          
                                            <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                                    <form className="space-y-4 md:space-y-6" action="#">
                                                        <div>
                                                        <QRCode
                                                        size={120}
                                                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                        value={`upi://pay?pn=shyam%20kumar&pa=kumarshyam03662@oksbi&am=${total}&cu=INR`}
                                                        viewBox={`0 0 120 120`}
                                                        />
                                                        </div>

                                                    </form>
                                                    <button onClick={()=>{navigate('/')}} type="button" className="focus:outline-none w-full text-white bg-violet-600  hover:bg-violet-800  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 ">Go Back</button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}