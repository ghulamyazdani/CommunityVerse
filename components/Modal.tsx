import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
const input = `shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`
export default function Modal() {
    let [isOpen, setIsOpen] = useState(false)
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Twitter, setTwitter] = useState('')
    const [Github, setGithub] = useState('')
    const [Linkedin, setLinkedin] = useState('')
    const [Stack, setStack] = useState('')
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div
                className="flex flex-col cursor-pointer align-center justify-center text-center items-center w-60 "
                onClick={() => {
                    openModal()
                }}
            >
                <IoIosAddCircle className="w-20 h-20 opacity-60" />
                <span className="text-m opacity-60">
                    Add Yourself as a mentors
                </span>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed bg-black bg-transparent inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Become A mentor!
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form
                                        action=""
                                        className="mentor-form text-black flex flex-col"
                                    >
                                        <label htmlFor="Name">Name</label>
                                        <input type="text" className={input} />
                                        <label htmlFor="Email">Email</label>
                                        <input type="text" className={input} />
                                        <label htmlFor="Email">
                                            Occupation(ex. Fullstack Dev)
                                        </label>
                                        <input type="text" className={input} />
                                        <h1 className="text-lg font-bold">
                                            Socials
                                        </h1>
                                        <label htmlFor="Twitter">Twitter</label>
                                        <input type="text" className={input} />
                                        <label htmlFor="Github">Github</label>
                                        <input type="text" className={input} />
                                        <label htmlFor="Linkedin">
                                            Linkedin
                                        </label>
                                        <input type="link" className={input} />
                                        <label htmlFor="Linkedin">
                                            Stackoverflow
                                        </label>
                                        <input type="text" className={input} />
                                        <button
                                            type="button"
                                            className="inline-flex mt-5 align-center justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex mt-5 align-center justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
