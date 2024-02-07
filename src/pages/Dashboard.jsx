import React from "react";

const Dashboard = () => {
  return (
    <div className="fixed isolate overflow-hidden h-screen w-screen flex items- justify-center">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl "
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#554b00] to-[#eb5600] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff0000] to-[#ff0000] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="box m-12 p-6 lg:p-8 bg-orange-100 rounded-lg w-full md:overflow-hidden overflow-y-auto bg-opacity-10 ">
      {/* Start Carousel*/}
        {/* <div       
          x-data="{}"
          x-init="$nextTick(() => { let ul = $refs.logos; ul.insertAdjacentHTML('afterend', ul.outerHTML); ul.nextSibling.setAttribute('aria-hidden', 'true'); })"
          className="my-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
                    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg" alt="Apple" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg" alt="Spark" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg" alt="Samsung" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg" alt="Quora" />
                        </li>
                        <li>
                            <img src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg" alt="Sass" />
                        </li>
                    </ul>                
                </div> */}
      {/* End Carousel */}
      {/* start inner content */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-full md:grid-rows-4 gap-4 text-black h-full">
          <div className="h-96 md:h-full md:row-span-4 col-span-1 md:col-span-3 border text-white border-black overflow-y-auto">
            <div className="bg-gradient-to-r from-amber-500 to-orange-900 rounded-md p-3 pl-4 sticky top-0"> {/* background-linear-gradient(90deg, rgba(163,55,4,1) 0%, rgba(255,122,13,1) 61%, rgba(157,6,6,1) 100%); */}
              Team : Test 1
            </div>
          
              <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                  <div className="space-y-2 col-span-full lg:col-span-1 ">
                    <p className="font-medium">Member 1</p>
                    <p className="text-xs">has access of deleting </p>
                  </div>
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3 border-b">
                      <label for="firstname" className="text-sm">First name</label>
                      <input id="firstname" type="text" placeholder="First name" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-3 border-b">
                      <label for="lastname" className="text-sm">Last name</label>
                      <input id="lastname" type="text" placeholder="Last name" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-3 border-b">
                      <label for="email" className="text-sm">Email</label>
                      <input id="email" type="email" placeholder="Email" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full border-b">
                      <label for="address" className="text-sm">Address</label>
                      <input id="address" type="text" placeholder="" disabled="dsabled"  className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-2 border-b">
                      <label for="city" className="text-sm">City</label>
                      <input id="city" type="text" placeholder="Jo " disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-2 border-b">
                      <label for="state" className="text-sm">State / Province</label>
                      <input id="state" type="text" placeholder="bhi chahiye " disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-2 border-b">
                      <label for="zip" className="text-sm">ZIP / Postal</label>
                      <input id="zip" type="text" placeholder="daalo" disabled="dsabled"  className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                  <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Member 2</p>
                    <p className="text-xs">has access of deleting </p>
                  </div>
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3 border-b">
                      <label for="firstname" className="text-sm">First name</label>
                      <input id="firstname" type="text" placeholder="First name" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-3 border-b">
                      <label for="lastname" className="text-sm">Last name</label>
                      <input id="lastname" type="text" placeholder="Last name" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-3 border-b">
                      <label for="email" className="text-sm">Email</label>
                      <input id="email" type="email" placeholder="Email" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full border-b">
                      <label for="address" className="text-sm">Address</label>
                      <input id="address" type="text" placeholder="" disabled="dsabled"  className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-2 border-b">
                      <label for="city" className="text-sm">City</label>
                      <input id="city" type="text" placeholder="Jo " disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-2 border-b">
                      <label for="state" className="text-sm">State / Province</label>
                      <input id="state" type="text" placeholder="bhi chahiye " disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-2 border-b">
                      <label for="zip" className="text-sm">ZIP / Postal</label>
                      <input id="zip" type="text" placeholder="daalo" disabled="dsabled"  className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                  <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Member 3</p>
                    <p className="text-xs">has access of deleting </p>
                  </div>
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3 border-b">
                      <label for="firstname" className="text-sm">First name</label>
                      <input id="firstname" type="text" placeholder="First name" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-3 border-b">
                      <label for="lastname" className="text-sm">Last name</label>
                      <input id="lastname" type="text" placeholder="Last name" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-3 border-b">
                      <label for="email" className="text-sm">Email</label>
                      <input id="email" type="email" placeholder="Email" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full border-b">
                      <label for="address" className="text-sm">Address</label>
                      <input id="address" type="text" placeholder="" disabled="dsabled"  className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-2 border-b">
                      <label for="city" className="text-sm">City</label>
                      <input id="city" type="text" placeholder="Jo " disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-2 border-b">
                      <label for="state" className="text-sm">State / Province</label>
                      <input id="state" type="text" placeholder="bhi chahiye " disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                    <div className="col-span-full sm:col-span-2 border-b">
                      <label for="zip" className="text-sm">ZIP / Postal</label>
                      <input id="zip" type="text" placeholder="daalo" disabled="dsabled"  className="w-full h-8 rounded-md focus:ring bg-inherit" />
                    </div>
                  </div>
                </fieldset>
              </form>
          </div>
          <div className="row-span-2 col-span-1 md:col-span-2 border border-black md:overflow-y-auto">
          <div className="text-white">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-xl font-bold hover:underline">NOTICE 1</a>
			<p className="mt-2 text-sm">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
		</div>
	</div>
</div>
          </div>
          <div className="row-span-2 col-span-1 md:col-span-2 border border-black ">
            <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-1 py-5">
              {/* card */}
              <div className="flex overflow-hidden rounded-lg bg-orange-600 bg-opacity-50">
                <div className="flex items-center justify-center px-4 bg-black text-2xl text-white bg-opacity-60">
                  1
                </div>
                <div className="flex items-center justify-between flex-1 p-3 text-white">
                  <p className="text-2xl font-semibold">Member 1</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="28px" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>                
                </div>
              </div>
              <div className="flex overflow-hidden rounded-lg bg-black bg-opacity-50">
                <div className="flex items-center justify-center px-4 bg-orange-600 text-2xl text-white bg-opacity-60">
                  2
                </div>
                <div className="flex items-center justify-between flex-1 p-3 text-white">
                  <p className="text-2xl font-semibold">Member 2</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="28px" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>               
                </div>
              </div>
              <div className="flex overflow-hidden rounded-lg bg-orange-600 bg-opacity-20">
                <div className="flex items-center justify-center px-4 bg-orange10 text-2xl text-white bg-opacity-40">
                  3
                </div>
                <div className="flex items-center justify-between flex-1 p-3 text-white">
                  <p className="text-2xl font-semibold">Member 3</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="28px" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>               
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className="row-span-4 col-span-1 md:col-start-6 md:row-start-1 border border-black md:overflow-y-auto ">
            4
            <div class="p-2">
              <div class="container">
                <div className="m-4 text-white text-2xl">Timeline</div>
                <div class="flex flex-col md:grid grid-cols-12 text-white">
                  <div class="flex md:contents">
                    <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                      </div>
                      <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                        <i class="fas fa-check-circle text-white"></i>
                      </div>
                    </div>
                    <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                      <p class="leading-tight text-justify w-full">
                        Registration Completed
                      </p>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                      </div>
                      <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                        <i class="fas fa-check-circle text-white"></i>
                      </div>
                    </div>
                    <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                      <p class="leading-tight text-justify">Quiz</p>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
                      </div>
                      <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                        <i class="fas fa-times-circle text-white"></i>
                      </div>
                    </div>
                    <div class="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                      <p class="leading-tight text-justify">Selection</p>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                      </div>
                      <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                        <i class="fas fa-exclamation-circle text-gray-400"></i>
                      </div>
                    </div>
                    <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                      <p class="leading-tight text-justify">Selection Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* end inner content */}
      </div>
      <div id="footer" className=" bottom-3 fixed flex justify-center items-center">Follow for more updates Insta, Whatsapp, etc links</div>
    </div>
  );
};

export default Dashboard;
