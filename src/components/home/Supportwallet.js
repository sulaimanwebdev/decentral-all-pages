import React from "react";
import coinbase from "../../assets/images/coinbase_wallet_icon 1.png";
import metamask from "../../assets/images/metamask-2728406-2261817 1.png";

export default function Supportwallet() {
  return (
    <div className="bg-white py-6 drop-shadow-2xl   ">
      <div className="w-11/12 lg:w-10/12  2xl:w-8/12  ml-auto mr-auto">
        <div class="grid grid-cols-12 gap-4     ">
          <div class=" col-span-12 md:col-span-6 lg:col-span-8  ">
            <h1 className=" text-black text-center text-lg sm:text-xl f-f-b mt-6">
              Suppported Wallets
            </h1>
          </div>
          <div class=" col-span-12 md:col-span-3 lg:col-span-2  ">
            <div className=" text-center ">
              <img
                src={coinbase}
                height="81px"
                width="81px"
                className=" ml-auto mr-auto"
              />
              <h1 className="text-base text-black f-f-b mt-1 ">Coinbase</h1>
            </div>
          </div>
          <div class=" col-span-12 md:col-span-3 lg:col-span-2  ">
            <div className=" text-center ">
              <img
                src={metamask}
                height="81px"
                width="81px"
                className=" ml-auto mr-auto"
              />
              <h1 className="text-base text-black f-f-b mt-1 ">Metamask</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
