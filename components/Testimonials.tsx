/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Testimonials() {
    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 py-16 mx-auto">
                <h1 className="text-3xl dark:text-white font-medium title-font  mb-12 text-center">
                    Testimonials
                </h1>
                <div className="flex justify-center flex-wrap -m-4">
                    <div className="p-4 md:w-1/3 w-full ">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="block w-5 h-5 text-gray-400 mb-4"
                                viewBox="0 0 975.036 975.036"
                            >
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">
                                This is one of the best platform for learning
                                that i have ever used.All the mentors listed
                                here really good at there respective fields and
                                they perfectly solved the queries which i had.
                            </p>
                            <a className="inline-flex items-center">
                                <img
                                    alt="testimonial"
                                    src="https://avatars.githubusercontent.com/u/69730338?v=4"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                ></img>
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">
                                        Abdullah Shahid
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        Datascience enthusiast
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="block w-5 h-5 text-gray-400 mb-4"
                                viewBox="0 0 975.036 975.036"
                            >
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">
                                Main thing i love about this platform is the
                                motive to help newcomers in tech with solving
                                there queries by the mentors who are well versed
                                in their respective fields.
                            </p>
                            <a className="inline-flex items-center">
                                <img
                                    alt="testimonial"
                                    src="https://avatars.githubusercontent.com/u/76521428?v=4"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                ></img>
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">
                                        Akshar nema
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        Fullstacks dev
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
