import React from "react";
import { logo } from "../assets/images";

export default function Foot() {
    return (
        <footer className="relative pt-8 pb-6 flex justify-center border-t-2 border-orange-600 bg-blur">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left max-w-7xl mx-auto">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex gap-4 items-center">
                        <img src={logo} alt='logo' className='w-16 h-16 object-contain' />
                            <h1 className="text-white font-bold text-xl ">AIKTC's Algorithm 8.0</h1>
                        </div>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button className="bg-blur text-orange-600 m-1 shadow-lg font-normal h-12 w-12 items-center justify-center align-center focus:outline-none mr-2 transform transition hover:-translate-y-0.5" type="button">
                                <a href="https://www.instagram.com/algorithm_aiktc/" className="fab fa-3x fa-instagram" target='_blank'></a>
                            </button>
                            <button className="bg-blur text-orange-600 m-1 shadow-lg font-normal h-12 w-12 items-center justify-center align-center focus:outline-none mr-2 transform transition hover:-translate-y-0.5" type="button">
                                <a href="https://www.linkedin.com/in/algorithm-aiktc-a6871a2b5/" className="fab fa-linkedin fa-3x" target='_blank'></a>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full px-4">
                                <span className="block uppercase text-gray-200 text-lg font-semibold mb-2">Reach us at</span>
                                <ul className="list-unstyled">
                                    <li className="flex gap-4 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-12 md:w-5" viewBox="0 0 20 20" fill="white">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <a className="text-gray-200 hover:text-white font-semibold block pb-2 text-lg" href="https://maps.app.goo.gl/aVcguAUbhBLJEzqc6">Anjuman-I-Islam's Kalsekar Technical Campus - AIKTC, Navi Mumbai</a>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        <a className="mail text-gray-200 hover:text-white font-semibold block pb-2 text-lg" href="mailto:pc@aiktc.ac.in">pc@aiktc.ac.in</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-400" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-lg text-orange-600 font-bold py-1">Copyright © AIKTC's Algorithm 8.0 <span id="get-current-year">2024</span> </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
