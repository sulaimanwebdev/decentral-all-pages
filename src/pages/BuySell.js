import React, {Fragment} from 'react'
import SideNavbar from '../components/shared/SideNavbar'
import PortfolioUser from '../components/portfolio/PortfolioUser'
import {Link} from 'react-router-dom'
import RecentActivity from '../components/shared/RecentActivity'
import BuySellMain from '../components/shared/BuySellMain'
import ConnectWallet from '../components/shared/ConnectWallet';
import { Dialog, Transition,RadioGroup } from '@headlessui/react'

const BuySell = () => {

  const [navBar, setnavBar] = React.useState('-translate-x-full');
  const [showDropDown, setshowDropDown] = React.useState(false);
  const [showDropDown2, setshowDropDown2] = React.useState(false);
  const [showDropDown3, setshowDropDown3] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [newaddress, setnewaddress] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
    setIsOpen2(false);
    setnewaddress(false)

  }

  function openModal() {
    setIsOpen(true)
  }
  React.useEffect(() => {
    document.body.classList.add('dashboard');
  }, [])

  return (
    <>
    <div className="mainCont grid grid-cols-1 lg2:grid-cols-[300px,1fr,350px] overflow-y-hidden ">
      <div className="px-5 w-full pt-4 flex gap-1 lg2:hidden items-center justify-between">
       <div className="h-fit"><Link to="/"><img src="/images/logo.svg" alt="logo" /></Link></div>
            <div className="flex items-center gap-2">
            
            <button onClick={()=> {navBar === "-translate-x-full" ? setnavBar('translate-x-0') : setnavBar('-translate-x-full')}} className='z-[999999] bg-white w-[45px] flex items-center justify-center h-[54px] rounded-xl border border-[#F2F2F2]'> <img src="/images/menu.svg" className={`w-[25px] ${navBar === "-translate-x-full" ? "" : "hidden"}`} alt="icon" /> <img src="/images/close.svg" className={`w-[25px] ${navBar === "-translate-x-full" ? "hidden" : ""}`}  alt="icon" /></button>
            </div>
      </div>
      <div className={`${navBar} lg2:translate-x-0 transition fixed pr-[75px] lg2:pr-0 max-w-[300px] lg2:max-w-[100%] w-full top-0 left-0 z-[9999] lg2:relative lg2:top-auto lg2:left-auto`}><SideNavbar/></div>
      <div onClick={()=> setnavBar('-translate-x-full')} className={`${navBar === "-translate-x-full" ? "opacity-0 invisible" : "opacity-100 visible"} transition lg2:hidden fixed top-0 z-[999] left-0 w-screen h-screen bg-[#11047A33] bg-opacity-20 pr-4`}></div>
      <div className="pt-5 bg-white overflow-hidden">

      <div className="sidebar-scroll bg-transparent-main-color p-5 rounded-lg lg2:rounded-tl-lg lg2:rounded-tr-lg h-full lg2:max-h-screen overflow-y-auto">
        <div className="bg-white rounded-xl px-4 py-4 sm2:py-2 flex items-center justify-center sm2:justify-between flex-wrap gap-3">
          <div className='text-not-black font-bold text-[20px]'>Buy/Sell</div>

          <div className="flex items-center gap-3 w-full sm2:w-auto">
          <div onMouseEnter={()=> {setshowDropDown(true)}} onMouseLeave={()=> {setshowDropDown(false)}} className="relative w-full">
           <button className="bg-white w-full rounded-3xl">
            <div className="rounded-xl border border-[#F2F2F2] p-1">
               <div className="flex items-center justify-between gap-10">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                <div className='mr-1'><svg className={`${showDropDown === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDown === false ? "#1A1A1A" : "#0085FF"}/></svg></div>
               </div>

              <div className={`custom-shadow  rounded-lg absolute top-full left-0 w-full bg-white z-[99] ${showDropDown === false ? "hidden" : "block"}`}>
              <label htmlFor='bitcoin9123' className="flex items-center justify-between px-3 mt-2 cursor-pointer">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                <input id="bitcoin9123" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' />
               </label>


               <label htmlFor='bitcoin91212s' className="flex items-center justify-between px-3 mt-1 mb-2 cursor-pointer">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                <input id="bitcoin91212s" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' />
               </label>

               <div className={`grid grid-cols-1 px-3 mb-3 gap-2 mt-3 ${showDropDown === false ? "hidden" : ""}`}>
             <button onClick={openModal} className='block bg-main-color text-white py-3 rounded-xl text-[14px]'>Connect Wallet</button>
             <button onClick={()=> {setnewaddress(true)}} className='block bg-transparent-main-color text-main-color py-3 rounded-xl text-[14px]'>Add new Address</button>
             </div>

              </div>

               
            </div>
            
           </button>

           </div>
          

          </div>
          </div>

          <div className="flex items-center justify-between flex-col sm11:flex-row gap-3 bg-white rounded-xl px-4 py-4 mt-2 sm8:mt-6">

            <div className="flex items-center gap-3">
              <img src="/images/btc.svg" className='w-[60px]' alt="icon" />
              <div>
                <div className="text-[14px] text-[#5F6374]">Exchange rate</div>
                <div className="text-[19px] font-bold text-not-black mt-1">16.436.60 USD</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className='flex gap-1'><span className='text-[14px] font-bold text-[#FF3A29]'>-$6,963</span> <span className='text-[14px] text-[#A3AED0]'>since last month</span></div>
            
              <svg width="165" height="56" viewBox="0 0 165 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 31.6881C9.41936 31.6606 9.45023 4.16727 14.2986 2.14841C19.147 0.129547 33.9733 19.3446 38.8958 21.1292C43.8184 22.9138 44.8087 50.8431 51.2999 53.3601C57.791 55.8771 70.3156 30.24 76.3507 30.24C82.3858 30.24 82.2711 20.4731 88.6493 21.1292C95.0275 21.7853 94.1001 2.14841 100.948 2.14841C107.796 2.14841 109.462 32.035 115.483 30.24C121.503 28.4449 119.916 46.6731 126.104 53.0169C132.292 59.3607 145.52 33.0283 150.511 30.411C155.503 27.7937 158.088 53.0169 163 53.0169" stroke="#FF3A29" stroke-width="3" stroke-linecap="round"/></svg>
            </div>

          </div>
         

            <BuySellMain/>

            <PortfolioUser/>


      </div>



      </div>
      <RecentActivity/>
    </div>

    <ConnectWallet isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />





    <Transition appear show={newaddress} as={Fragment}>
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
                <Dialog.Panel className='relative bg-white w-full max-w-[400px] transform overflow-hidden rounded-2xl bg-sooth p-5 text-left align-middle shadow-xl transition-all'>
                 
                 <div>
                  <div className='flex items-center justify-between mb-5'>
                  <div className='text-[17px] text-[#11047A] font-bold '>Add new Address</div>
                  <button onClick={closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                 <div className=" text-[#11047A]">
                  <div className="font-bold text-[15px] mb-2">Enter Address</div>
                  <input type="text" className='w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color' placeholder='Enter Address...' />
                 </div>

                 <button onClick={closeModal} className='w-full mt-5 py-3 sm:py-4 rounded-xl bg-main-color text-white'>Save Address</button>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


    </>
  )
}

export default BuySell