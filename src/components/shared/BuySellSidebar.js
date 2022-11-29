import React, {useState, Fragment} from 'react'
import { Dialog, Transition,RadioGroup } from '@headlessui/react'
import ConnectWallet from './ConnectWallet';

const BuySellSidebar = () => {

    let data = [
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },


        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },



        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },




        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },




        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },



        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },




        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },



        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },



        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },

        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },

        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },

        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic"
        },

    ]

    const [overflow, setoverflow] = useState('overflow-y-hidden');
    const [trade, settrade] = useState('Buy');
    const [showDropDownCoin, setshowDropDownCoin] = useState(false);
    const [showDropDown, setshowDropDown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [coin, setCoin] = useState('BTC');
    const [eye, seteye] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);
    const [paymentMethod, setpaymentMethod] = React.useState('none');
    const [plan, setPlan] = React.useState('bank of america')
  
    function closeModal() {
        setIsOpen(false);
        setIsOpen2(false);

      }
    
      function openModal() {
        setIsOpen(true)
      }

      function openModal2() {
        setIsOpen2(true)
      }


  return (
    <>
       <div className="sidebar-scroll h-full relative bg-white pt-[20px] lg2:pt-[36px] overflow-y-auto lg2:max-h-screen">
        <div className='h-[calc(100%-100px)]'>

           <div onMouseEnter={()=> {setshowDropDown(true)}} onMouseLeave={()=> {setshowDropDown(false)}} className="relative px-5 lg2:px-4">
           <button className="custom-shadow bg-white w-full p-3 rounded-3xl">
            <div className="rounded-xl border border-[#F2F2F2] p-1">
               <div className="flex items-center justify-between">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                <div className='mr-1'><svg className={`${showDropDown === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDown === false ? "#1A1A1A" : "#0085FF"}/></svg></div>
               </div>

              <div className={`${showDropDown === false ? "hidden" : "block"}`}>
              <label htmlFor="bitcoin99" className="cursor-pointer flex items-center justify-between px-3 mt-2">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                <input id="bitcoin99" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' />
               </label>


               <label htmlFor="bitcoin1099" className="cursor-pointer flex items-center justify-between px-3 mt-1 mb-1">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                <input id="bitcoin1099" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' />
               </label>
              </div>

               
            </div>
            <div className={`grid grid-cols-2 gap-2 mt-3 ${showDropDown === false ? "hidden" : ""}`}>
             <button onClick={openModal} className='block bg-main-color text-white py-3 rounded-xl text-[14px]'>Connect Wallet</button>
             <button className='block bg-transparent-main-color text-main-color py-3 rounded-xl text-[14px]'>Add new Address</button>
             </div>
            
           </button>

           </div>

           <div className="mt-3 w-full grid grid-cols-2 divide-x-2 divide-[#F9F9F9]">
              <button onClick={()=> {settrade("Buy")}} className={`px-5 lg2:px-4 flex items-center justify-center text-[17px] py-5  ${trade === "Buy" ? "text-main-color font-bold border-b-4 border-b-main-color" : "text-[#393939]"}`}>Buy</button>
              <button onClick={()=> {settrade("Sell")}} className={`px-5 lg2:px-4 flex items-center justify-center text-[17px] py-5 ${trade === "Sell" ? "text-main-color font-bold border-b-4 border-b-main-color border-color-blue" : "text-[#393939]"}`}>Sell</button>
           </div>

           <div className="px-5 lg2:px-4 mt-7">
             
             <div className="flex items-center justify-between border-b pb-4 border-[#F9F9F9]">
                <div className="flex items-center gap-3 text-main-color flex-row-reverse font-[PlusJakartaSans-Regular]">Your Wallet <svg width="25" height="27" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9964 5.37513H15.7618C13.7911 5.37859 12.1947 6.93514 12.1911 8.85657C12.1884 10.7823 13.7867 12.3458 15.7618 12.3484H20V12.6543C20 16.0136 17.9636 18 14.5173 18H5.48356C2.03644 18 0 16.0136 0 12.6543V5.33786C0 1.97862 2.03644 0 5.48356 0H14.5138C17.96 0 19.9964 1.97862 19.9964 5.33786V5.37513ZM4.73956 5.36733H10.3796H10.3831H10.3902C10.8124 5.36559 11.1538 5.03019 11.152 4.61765C11.1502 4.20598 10.8053 3.87318 10.3831 3.87491H4.73956C4.32 3.87664 3.97956 4.20858 3.97778 4.61852C3.976 5.03019 4.31733 5.36559 4.73956 5.36733Z" fill="#0085FF"/><path opacity="0.4" d="M14.0374 9.29669C14.2465 10.2479 15.0805 10.9171 16.0326 10.8997H19.2825C19.6787 10.8997 20 10.5716 20 10.1661V7.63452C19.9991 7.22985 19.6787 6.90089 19.2825 6.90002H15.9561C14.8731 6.90351 13.9983 7.80247 14 8.9103C14 9.03997 14.0128 9.16964 14.0374 9.29669Z" fill="#0085FF"/><circle cx="16" cy="8.90002" r="1" fill="#0085FF"/></svg></div>
                <div className="flex items-center gap-3 text-main-color font-[PlusJakartaSans-Regular]">{eye === true ? "140,124.58 BIDR" : <span className='translate-y-[3px]'>*********</span>} <svg onClick={()=> {seteye(!eye)}} className='cursor-pointer' width="25" height="21" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M15.7366 2.04606C17.4439 3.36388 18.8976 5.29455 19.9415 7.70909C20.0195 7.89236 20.0195 8.10667 19.9415 8.28121C17.8537 13.1103 14.1366 16 10 16H9.99024C5.86341 16 2.14634 13.1103 0.0585366 8.28121C-0.0195122 8.10667 -0.0195122 7.89236 0.0585366 7.70909C2.14634 2.87903 5.86341 0 9.99024 0H10C12.0683 0 14.0293 0.717576 15.7366 2.04606ZM6.09756 8C6.09756 10.1333 7.8439 11.8691 10 11.8691C12.1463 11.8691 13.8927 10.1333 13.8927 8C13.8927 5.85697 12.1463 4.12121 10 4.12121C7.8439 4.12121 6.09756 5.85697 6.09756 8Z" fill="#0085FF"/><path d="M12.4309 7.99687C12.4309 9.32536 11.3382 10.4114 10.0016 10.4114C8.65531 10.4114 7.56262 9.32536 7.56262 7.99687C7.56262 7.83203 7.58213 7.67784 7.6114 7.52269H7.66018C8.74311 7.52269 9.62116 6.66936 9.66018 5.60172C9.7675 5.5833 9.88457 5.57263 10.0016 5.57263C11.3382 5.57263 12.4309 6.65869 12.4309 7.99687Z" fill="#0085FF"/></svg></div>
             </div>


            {
                trade === "Buy"
                ?
                <div className="my-5">
                <div className="focus-within:border-main-color relative flex items-center justify-between border border-[#F2F2F2] rounded-full ">
                    <div className='mr-[10px] flex items-center w-full justify-between pr-2'>
                        <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className='p-2 pr-0 w-fit flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>{coin === "BTC" ? "Bitcoin" : coin === "ETH" ? "Ethereum" : coin === "SOL" ? "Solana" : ""}</span>  </div><div className="flex items-center gap-2 border-r border-[#F2F2F2] pr-2 cursor-pointer"><img src="/images/btc.svg" alt="icon" /> <svg className={`${showDropDownCoin === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDownCoin === false ? "#1A1A1A" : "#0085FF"}/></svg></div></div>
                        <input type="text" className='text-[#11047A] text-right font-extralight text-opacity-50 w-[calc(100%-130px)] outline-0 border-0 ring-0' placeholder={coin} />
                    </div>
                    <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className={`bg-white z-[99] border w-fit absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-2xl ${showDropDownCoin === false ? "hidden" : "flex"}`}>
             <div>
            
             <div className="">
                <div className="sidebar-scroll max-h-[200px] overflow-y-auto flex flex-col w-fit items-center gap-2">
                <label htmlFor="bitcoin1" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin1" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin2" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin2" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin3" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin3" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin4" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin4" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin5" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin5" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin6" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin6" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin7" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin7" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>

                </div>
             </div>
             </div>
           </div>
                </div>

                <div className="focus-within:border-main-color mt-3 flex items-center justify-between border border-[#F2F2F2] rounded-full p-2 pr-3">
                    <div>
                        <div className='flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>USD</span></div><img src="/images/usd.svg" alt="icon" /></div>
                    </div>
                    <input type="text" className='text-[#11047A] text-right font-extralight text-opacity-50 w-[calc(100%-90px)] outline-0 border-0 ring-0' placeholder="USD" />
                    
                </div>

                <button onClick={openModal2} className='w-full flex items-center justify-center py-3 bg-main-color text-white rounded-lg mt-5'>Buy Now</button>
                <div className='text-center mt-4 text-[#11047A] text-opacity-30 text-sm'>The final amount could change depending on the market conditions</div>
             </div> 
             :

             <div className="my-5">
             <div className="focus-within:border-main-color relative flex items-center justify-between border border-[#F2F2F2] rounded-full ">
                    <div className='mr-[10px] flex items-center w-full justify-between pr-2'>
                        <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className='p-2 pr-0 w-fit flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>{coin === "BTC" ? "Bitcoin" : coin === "ETH" ? "Ethereum" : coin === "SOL" ? "Solana" : ""}</span>  </div><div className="flex items-center gap-2 border-r border-[#F2F2F2] pr-2 cursor-pointer"><img src="/images/btc.svg" alt="icon" /> <svg className={`${showDropDownCoin === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDownCoin === false ? "#1A1A1A" : "#0085FF"}/></svg></div></div>
                        <input type="text" className='text-[#11047A] text-right font-extralight text-opacity-50 w-[calc(100%-130px)] outline-0 border-0 ring-0' placeholder={coin} />
                    </div>
                    <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className={`bg-white z-[99] border w-fit absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-2xl ${showDropDownCoin === false ? "hidden" : "flex"}`}>
             <div>
            
             <div className="">
                <div className="sidebar-scroll max-h-[200px] overflow-y-auto flex flex-col w-fit items-center gap-2">
                <label htmlFor="bitcoin1" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin1" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin2" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin2" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin3" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin3" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin4" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin4" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin5" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin5" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin6" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin6" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin7" className='flex items-center gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin7" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>

                </div>
             </div>
             </div>
           </div>
                </div>

             <div className="focus-within:border-main-color mt-3 flex items-center justify-between border border-[#F2F2F2] rounded-full p-2 pr-3">
                 <div>
                     <div className='flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>USD</span></div><img src="/images/usd.svg" alt="icon" /></div>
                 </div>
                 <input type="text" className='text-[#11047A] text-right font-extralight text-opacity-50 w-[calc(100%-90px)] outline-0 border-0 ring-0' placeholder="USD" />
                 
             </div>

             <button onClick={openModal2} className='w-full flex items-center justify-center py-3 bg-main-color text-white rounded-lg mt-5'>Sell Now</button>
             <div className='text-center mt-4 text-[#11047A] text-opacity-30 text-sm'>The final amount could change depending on the market conditions</div>
          </div> 

            }
             </div>

             <div className='mt-10 '>

                <div className="px-5 lg2:px-4 flex items-center justify-between border-b pb-3 border-[#F9F9F9]">
                    <div className='text-[17px] text-[#11047A] font-bold'>Recent Activity</div>
                    <button><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2175 11.3629C14.1286 11.3629 12.4342 13.072 12.4342 15.1815C12.4342 17.2898 14.1286 19 16.2175 19C18.3064 19 19.9997 17.2898 19.9997 15.1815C19.9997 13.072 18.3064 11.3629 16.2175 11.3629Z" fill="#0085FF"/><path opacity="0.4" d="M8.08337 13.6605H1.50788C0.67567 13.6605 0.00012207 14.3424 0.00012207 15.1812C0.00012207 16.0201 0.67567 16.703 1.50788 16.703H8.08337C8.91447 16.703 9.59002 16.0201 9.59002 15.1812C9.59002 14.3424 8.91447 13.6605 8.08337 13.6605Z" fill="#0085FF"/><path d="M3.78329 7.6371C5.87216 7.6371 7.56658 5.928 7.56658 3.81967C7.56658 1.71022 5.87216 0 3.78329 0C1.69443 0 0 1.71022 0 3.81967C0 5.928 1.69443 7.6371 3.78329 7.6371Z" fill="#0085FF"/><path opacity="0.4" d="M20 3.81927C20 2.98043 19.3244 2.29858 18.4933 2.29858H11.9179C11.0856 2.29858 10.4101 2.98043 10.4101 3.81927C10.4101 4.65812 11.0856 5.33997 11.9179 5.33997H18.4933C19.3244 5.33997 20 4.65812 20 3.81927Z" fill="#0085FF"/></svg></button>
                </div>


                <div className={`relative flex flex-col divide-y divide-[#F9F9F9] h-full ${overflow} ${overflow === "overflow-y-hidden" ? "max-h-[70vh]" : ""} `}>
                    {
                        data.map((ele)=>{
                            return(
                                <div className='flex items-center justify-between py-4 px-5 lg2:px-4'>
                          <div className="flex items-center gap-3">
                            {
                                ele.type === "buy"
                                ?
                                <div className="w-[50px] h-[50px] rounded-full bg-main-color flex items-center justify-center"><svg width="17" height="19" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.72571 1.25L7.72571 16.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.70131 7.2998L7.72531 1.2498L13.7503 7.2998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                                :
                                <div className="w-[50px] h-[50px] rounded-full bg-[#FF5C00] flex items-center justify-center"><svg width="17" height="19" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27429 15.75V0.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.2987 9.7002L7.27469 15.7502L1.24969 9.7002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                            }
                            <div>
                                <div className='text-[#11047A] text-[15px] font-bold'>{ele.title}</div>
                                <div className='text-sm text-not-black font-light mt-[3px]'>{ele.date}</div>
                            </div>
                          </div>

                          <div className='text-right'>
                                <div className='text-[#11047A] text-[15px] font-bold'>{ele.topValue}</div>
                                <div className='text-sm text-not-black font-light mt-[3px]'>{ele.bottomValue}</div>
                          </div>
                    </div>
                            )
                        })
                    }

             <button onClick={()=> {setoverflow('overflow-y-auto')}} className={`gradientWhiteBG min-h-[120px] pb-2 sticky bottom-0 left-0 w-full items-end justify-center text-main-color ${overflow === "overflow-y-hidden" ? "flex" : "hidden"}`}>See All</button>
                    

                </div>

             </div>



            <ConnectWallet isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />

        
        </div>
       </div>




       {/* Select Payment Method */}

       <Transition appear show={isOpen2} as={Fragment}>
        <Dialog as='div' className='relative z-[999999]' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter=''
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave=''
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-[#11047A33]' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative bg-white w-full max-w-[900px] transform overflow-hidden rounded-2xl bg-sooth p-5 text-left align-middle shadow-xl transition-all'>
                 
                 <div>
                  <div className='flex items-center justify-between mb-3'>
                  <div onClick={()=> {setpaymentMethod("none")}} className={`text-[19px] text-not-black font-bold flex items-center gap-2 flex-row-reverse ${paymentMethod === "bank" ? "cursor-pointer" : ""}`}>{paymentMethod === "none" ? "Select Payment Method" : "Select Bank"} {paymentMethod === "bank" ? <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM19 7L1 7V9L19 9V7Z" fill="black"/></svg> : ""}</div>
                  <button onClick={closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                
                 <div className={`w-full grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-5 ${paymentMethod === "none" ? "grid" : "hidden"}`}>
                     <div onClick={()=> {setpaymentMethod("bank")}} className='cursor-pointer text-center h-[250px] px-4 border border-[#EEEEEE] bg-white rounded-lg flex items-center justify-center flex-col gap-3'>
                        <img src="/images/bank.png" className='w-[80px]' alt="bank" />
                        <div className='mt-3'>
                            <div className='font-bold text-[21px]'>Bank Transfer</div>
                            <div className='mt-1 text-[#000000] text-opacity-50 text-[15px]'>Service fee : 5%*</div>
                        </div>
                     </div>

                     <div className='cursor-pointer text-center h-[250px] px-4 border border-[#EEEEEE] bg-white rounded-lg flex items-center justify-center flex-col gap-3'>
                        <img src="/images/debit-card.png" className='w-[80px]' alt="bank" />
                        <div className='mt-3'>
                            <div className='font-bold text-[21px]'>Credit/Debit Card</div>
                            <div className='mt-1 text-[#000000] text-opacity-50 text-[15px]'>Service fee : 10%</div>
                        </div>
                     </div>
                 </div>




                 <div className={`w-full mt-5 mb-5 ${paymentMethod === "bank" ? "block" : "hidden"}`}>
                 <RadioGroup value={plan} onChange={setPlan} className="flex flex-col gap-4">
      <RadioGroup.Option value="bank of america">
        {({ checked }) => (
          <div className={`relative cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white border-2 ${checked ? "border-main-color" : "border-[#F5F5F7]"}`}>
            <div>
              <div className='hidden sm:block text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>PKNF**********81569</div>
              <div className='sm2:hidden text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>*****81569</div>
              <div className="flex items-center gap-6 sm2:gap-[60px]">
                <div className="text-[#11047A] text-opacity-70 text-[15px]">Azhar Dwi</div>
                <div className="text-[#11047A] text-opacity-70 text-[15px]">BANK OF AMERICA</div>
              </div>
            </div>
         <button className='absolute top-3 right-3 sm2:relative sm2:top-auto sm2:right-auto px-5 py-2 sm4:py-2.5 rounded-xl text-[14px] sm2:text-[15px] bg-transparent-main-color text-main-color'>Default</button>
          </div>
        )}
      </RadioGroup.Option>


      <RadioGroup.Option value="times bank">
        {({ checked }) => (
          <div className={`relative cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white border-2 ${checked ? "border-main-color" : "border-[#F5F5F7]"}`}>
            <div>
              <div className='hidden sm:block text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>PKNF**********81569</div>
              <div className='sm2:hidden text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>*****81569</div>
              <div className="flex items-center gap-6 sm2:gap-[60px]">
                <div className="text-[#11047A] text-opacity-70 text-[15px]">JHON DOE</div>
                <div className="text-[#11047A] text-opacity-70 text-[15px]">TIMES BANK</div>
              </div>
            </div>
          </div>
        )}
      </RadioGroup.Option>
     
    </RadioGroup>

    <button onClick={closeModal} className="block  mt-10 mx-auto px-10 py-3 w-fit  bg-main-color text-white rounded-lg">Confirm</button>

                 </div>

              </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


    </>
  )
}

export default BuySellSidebar