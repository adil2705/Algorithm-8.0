import React from "react";

const Popup = ({
    onClose,
    onOkay,
    onRevert
}) => {
    return (
        <div role="alert" className="border border-gray-100 bg-white p-4">
            <div className="flex items-start gap-4">
                <div className="flex-1">
                    <strong className="block text-xl font-bold text-orange-600">Are you sure you want to remove this member? (Note : Your action is irreversible.)</strong>
                    <div className="mt-4 flex gap-2">
                        <button onClick={onOkay} className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                            <span className="text-xl font-bold">Yes</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </button>

                        <button className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-50" onClick={onRevert}>
                            <span className="text-xl font-bold">No</span>
                        </button>
                    </div>
                </div>

                <button className="text-gray-500 transition hover:text-gray-600" onClick={onClose}>
                    <span className="sr-only">Dismiss popup</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Popup;