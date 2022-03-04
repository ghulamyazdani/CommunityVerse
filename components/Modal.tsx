import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { postMentors } from '../services/index'
import { app, storage } from '../services/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
const input = `shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`
export default function Modal() {
    let [isOpen, setIsOpen] = useState(false)
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Occup, setOccup] = useState('')
    const [Twitter, setTwitter] = useState('')
    const [Github, setGithub] = useState('')
    const [Linkedin, setLinkedin] = useState('')
    const [Bio, setBio] = useState('')
    const [File, setFile] = useState(false)
    const [Error, setError] = useState('')
    const [ImageUrl, setImageUrl] = useState('')
    const [prog, setprog] = useState(0)
    function toinitials() {
        setName('')
        setEmail('')
        setOccup('')
        setTwitter('')
        setGithub('')
        setLinkedin('')
        setBio('')
        setError('')
        setprog(0)
        setImageUrl('')
    }
    function closeModal() {
        setIsOpen(false)
        setError('')
    }

    function openModal() {
        setIsOpen(true)
    }

    function handleSubmit() {
        postMentors({
            name: Name,
            email: Email,
            occupation: Occup,
            bio: Bio,
            twitter: Twitter,
            github: Github,
            linkedin: Linkedin,
            status: 'Not Verified',
            image: ImageUrl,
        })
    }
    function message() {
        if (Error === 'false') {
            return (
                <span className="text-xs font-semibold text-center text-green-500">
                    We got your submission
                </span>
            )
        } else if (Error === 'error') {
            return (
                <span className="text-xs font-semibold absolute text-center text-red-500">
                    There was some error
                </span>
            )
        } else if (Error === 'fieldsNF') {
            return (
                <span className="text-xs font-semibold mt-2 text-center text-red-500">
                    All fields are required
                </span>
            )
        }
    }
    function fileSelectedHandler(e: any) {
        uploadImg(e.target.files[0])
        setFile(true)
    }
    function uploadImg(file: any) {
        if (!file) return
        const storageRef = ref(storage, `/mentors/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            'state_changed',
            snapshot => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
                )
                setprog(prog)
                console.log(prog)
            },
            error => console.log(error),
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    setImageUrl(downloadURL)
                })
            },
        )
    }
    function progressState(prog: any) {
        if (prog > 0) {
            return <div className="text-xs ml-3">{prog}% Uploaded</div>
        }
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
                                        className="mentor-form text-black flex flex-col"
                                        onSubmit={e => {
                                            e.preventDefault()
                                            if (
                                                Name &&
                                                Email &&
                                                Occup &&
                                                Twitter &&
                                                Github &&
                                                Linkedin &&
                                                Bio &&
                                                File
                                            ) {
                                                try {
                                                    handleSubmit()

                                                    setError('false')
                                                } catch (err) {
                                                    setError('error')
                                                }
                                                setTimeout(() => {
                                                    closeModal()
                                                    toinitials()
                                                }, 2000)
                                            } else {
                                                setError('fieldsNF')
                                            }
                                        }}
                                    >
                                        <label htmlFor="Name">Full Name</label>
                                        <input
                                            type="text"
                                            className={input}
                                            onChange={e => {
                                                setName(e.target.value)
                                            }}
                                        />
                                        <label htmlFor="Email">Email</label>
                                        <input
                                            type="text"
                                            className={input}
                                            onChange={e => {
                                                setEmail(e.target.value)
                                            }}
                                        />
                                        <label htmlFor="Email">
                                            Occupation(ex. Fullstack Dev)
                                        </label>
                                        <input
                                            type="text"
                                            className={input}
                                            onChange={e => {
                                                setOccup(e.target.value)
                                            }}
                                        />
                                        <label htmlFor="Email">Bio</label>
                                        <textarea
                                            className={input}
                                            onChange={e => {
                                                setBio(e.target.value)
                                            }}
                                        />
                                        <h1 className="text-lg font-bold">
                                            Socials
                                        </h1>
                                        <label htmlFor="Twitter">Twitter</label>
                                        <input
                                            type="text"
                                            className={input}
                                            onChange={e => {
                                                setTwitter(e.target.value)
                                            }}
                                        />
                                        <label htmlFor="Github">Github</label>
                                        <input
                                            type="text"
                                            className={input}
                                            onChange={e => {
                                                setGithub(e.target.value)
                                            }}
                                        />
                                        <label htmlFor="Linkedin">
                                            Linkedin
                                        </label>
                                        <input
                                            type="link"
                                            className={input}
                                            onChange={e => {
                                                setLinkedin(e.target.value)
                                            }}
                                        />
                                        <label htmlFor="pic">
                                            Upload your pic
                                        </label>
                                        <input
                                            type="file"
                                            onChange={fileSelectedHandler}
                                        />
                                        {progressState(prog)}
                                        {message()}
                                        <button className="inline-flex mt-5 align-center justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                            Submit
                                        </button>
                                    </form>
                                    <button
                                        className="inline-flex mt-5 align-center justify-center px-4 py-2 text-sm font-medium w-full text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
