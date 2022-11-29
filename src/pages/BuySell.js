import React from 'react'
import SideNavbar from '../components/shared/SideNavbar'
import PortfolioUser from '../components/portfolio/PortfolioUser'
import {Link} from 'react-router-dom'
import RecentActivity from '../components/shared/RecentActivity'
import BuySellMain from '../components/shared/BuySellMain'

const BuySell = () => {

  const [navBar, setnavBar] = React.useState('-translate-x-full');
  const [showDropDown, setshowDropDown] = React.useState(false);
  const [showDropDown2, setshowDropDown2] = React.useState(false);
  const [showDropDown3, setshowDropDown3] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add('dashboard');
  }, [])

  return (
    <>
    <div className="mainCont grid grid-cols-1 lg2:grid-cols-[300px,1fr,350px] overflow-y-hidden ">
      <div className="px-5 w-full pt-4 flex gap-1 lg2:hidden items-center justify-between">
       <div className="h-fit"><Link to="/"><img src="/images/logo.svg" alt="logo" /></Link></div>
            <div className="flex items-center gap-2">
            
            <button onClick={()=> {navBar === "-translate-x-full" ? setnavBar('translate-x-0') : setnavBar('-translate-x-full')}} className='z-[999999] bg-white w-[45px] flex items-center justify-center h-[54px] rounded-xl border border-[#F2F2F2]'>{navBar === "-translate-x-full" ? <img src="/images/menu.svg" className='w-[25px]' alt="icon" /> : <img src="/images/close.svg" alt="icon" />}</button>
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
    </>
  )
}

export default BuySell