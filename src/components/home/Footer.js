import React from "react";

export default function Footer() {
  return (
    <div className="bg-grey-light py-16   ">
      <div className="w-11/12 lg:w-10/12  2xl:w-8/12  ml-auto mr-auto">
        <div className="border border-white-light my-4  "></div>

        <div class="grid grid-cols-12 gap-8  mt-8  text-center lg:text-left  ">
          <div class=" col-span-12  lg:col-span-5 ">
            <h1 className="text-black f-f-b text-tiny  ">About Rareblocks</h1>
            <h2 className=" text-grey f-f-r text-sm mt-3 ">
              Adipiscing cursus metus in est aliquam diam sed nulla in. Sit quam
              in egestas morbi. Vel diam praesent netus sem amet urna non. Porta
              blandit sagittis purus a. Nisl pretium aliquam platea duis nunc
              rhoncus. Vitae morbi facilisis nisl vitae.
            </h2>
            <ul className=" inline-flex  mt-6">
              <li>
                <i
                  class="fa fa-twitter fa-lg cursor-pointer    "
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                <i
                  class="fa fa-facebook fa-lg cursor-pointer ml-5  "
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                <i
                  class="fa fa-instagram fa-lg cursor-pointer ml-5  "
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                <i
                  class="fa fa-github fa-lg cursor-pointer ml-5  "
                  aria-hidden="true"
                ></i>
              </li>
            </ul>
          </div>
          <div class=" col-span-12 lg:col-span-7 ">
            <div class="grid grid-cols-12 sm:gap-12     ">
              <div class=" col-span-6  sm:col-span-4  lg:col-span-4 ">
                <h2 className=" text-black f-f-b text-tiny ">Company</h2>
                <ul>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm ">
                      {" "}
                      About{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm  ">
                      {" "}
                      Features{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm  ">
                      {" "}
                      Works{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm  ">
                      {" "}
                      Career{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div class=" col-span-6  sm:col-span-4  lg:col-span-4 ">
                <h2 className=" text-black f-f-b text-tiny ">Help</h2>
                <ul>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm ">
                      {" "}
                      Customer Support{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm  ">
                      {" "}
                      Delivery Details{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm  ">
                      {" "}
                      Terms & Conditions{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm  ">
                      {" "}
                      Privacy Policy{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div class=" col-start-3 col-end-11  sm:col-span-4  lg:col-span-4  mt-8 sm:mt-0 ">
                <h2 className=" text-black f-f-b text-tiny ">Company</h2>
                <ul>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm ">
                      {" "}
                      Free eBooks{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm  ">
                      {" "}
                      Development Tutorial{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm  ">
                      {" "}
                      How to - Blog{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-sm  ">
                      {" "}
                      Youtube Playlist{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
