import React from "react";
import arrowright from "../../assets/images/arrow-right.png";
import dollaricon from "../../assets/images/dollaricon.png";
import Arrow from "../../assets/images/Arrow - Up.png";
import Picture from "../../assets/images/Picture Container.png";

export default function Instantly() {
  return (
    <>
      <div className="w-11/12 lg:w-10/12  2xl:w-8/12  ml-auto mr-auto">
        <div class="grid grid-cols-12 gap-4     ">
          <div class=" col-span-12 lg:col-span-6  relative  text-center lg:text-left ">
            <h1 className=" text-2xl sm:text-3xl f-f-sm text-black mt-10 ">
              Instantly buy and sell crypto on our platform!
            </h1>
            <button
              type="button"
              className="text-primary bg-primary-light mt-2 focus:ring-4 focus:outline-none  rounded-3xl text-xs md:text-sm px-6 py-2 text-center f-f-b mr-3 md:mr-0 "
            >
              NO MORE WAITING! 🔥
            </button>
            <h2 className=" text-grey text-tiny f-f-r my-5 ">
              When you buy crypto at Decentral, the crypto is instantly
              transferred to your software wallet. No more waiting 5-7 days to
              use your crypto
            </h2>

            <button
              type="button"
              className="text-white bg-primary  focus:ring-4 focus:outline-none  rounded-3xl text-xs md:text-sm px-6 py-3 text-center f-f-sm mr-3 md:mr-0 "
            >
              <ul className="inline-flex">
                <li>Get started</li>
                <li>
                  {" "}
                  <img
                    src={arrowright}
                    className="ml-3 mt-1"
                    width="16px"
                    height="16px"
                    alt="Flowbite Logo"
                  />
                </li>
              </ul>
            </button>

            <div class="grid grid-cols-12 gap-4  my-4  text-center lg:text-left  ">
              <div class=" col-span-12  lg:col-span-5 lg:border-r lg:border-grey-dark ">
                <ul className="inline-flex">
                  <li className="text-black f-f-b text-2xl ">4624</li>
                  <li className="ml-4 mt-4">
                    <h2 className="text-black f-f-r text-sm ">
                      Customer Served{" "}
                    </h2>
                  </li>
                </ul>
              </div>
              <div class=" col-span-12  lg:col-span-4">
                <ul className="inline-flex">
                  <li className="text-black f-f-b text-2xl ">$239K</li>
                  <li className="ml-4 mt-4">
                    <h2 className="text-black f-f-r text-sm ">
                      Transaction Till Now{" "}
                    </h2>
                  </li>
                </ul>
              </div>
            </div>
            {/* renu section started */}
            <div className="  lg:absolute lg:bottom-3 lg:left-full w-full ">
              <div class="grid grid-cols-12 gap-4  my-4   ">
                <div class=" col-start-3 col-end-11 sm:col-start-3 sm:col-end-10  lg:col-span-4 ">
                  <div className=" bg-white p-4  shadow-lg ">
                    <ul className="inline-flex">
                      <li>
                        <div className="bg-primary-light p-1 rounded-lg">
                          <img
                            src={dollaricon}
                            width="24px"
                            height="24px"
                            alt="Flowbite Logo"
                          />
                        </div>
                      </li>
                      <li className="ml-4 mt-1 ">
                        <ul className="inline-flex">
                          <li>
                            {" "}
                            <h2 className="text-primary f-f-b text-xs  ">
                              +48.50%{" "}
                            </h2>
                          </li>
                          <li>
                            {" "}
                            <div className="bg-primary-light p-1 rounded-lg ml-3">
                              <img
                                src={Arrow}
                                width="14px"
                                height="14px"
                                alt="Flowbite Logo"
                              />
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <h2 className=" text-lg f-f-b text-black ">$36,845</h2>
                    <h2 className=" text-grey text-sm f-f-r  ">
                      Total Revenue
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* renu section ended */}
          </div>
          <div class=" col-span-12 lg:col-span-6">
            <img
              src={Picture}
              width="445px"
              height="540px"
              className="ml-auto mr-auto mt-6 "
              alt="Flowbite Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
