import {Link} from 'react-router-dom'

const SideNavbar = () => {


  return (
    <>
       <div className="sidebar-scroll h-full min-h-screen relative bg-white pt-6 lg2:pt-[44px] overflow-y-auto max-h-screen">
       <div className="h-fit"><Link to="/"><img src="/images/logo.svg" className='px-6' alt="logo" /></Link></div>

       <div className='mt-12 h-[calc(100vh-140px)] lg2:h-[calc(100%-100px)] flex flex-col justify-between'>
            <div>
              <div className='text-not-black px-6 mb-5'>Menu</div>
              <Link to="/portfolio"><div className={`relative px-6 py-2 mb-5 text-[17px] ${window.location.pathname === "/portfolio" ? "text-main-color" : "text-not-active"} grid grid-cols-[40px,1fr] items-center`}><img src="/images/portfolioActive.svg" className={window.location.pathname === "/portfolio" ? "w-[25px]" : "hidden w-[25px]"} alt="icon" /> <img src="/images/portfolioNotActive.svg" className={window.location.pathname !== "/portfolio" ? "w-[25px]" : "hidden w-[25px]"} alt="icon" /> Portfolio <div className={`${window.location.pathname === "/portfolio" ? "visible" : "invisible"} absolute top-1/2 -translate-y-1/2 left-0 h-[60px] w-1 rounded-tr-md rounded-br-md bg-main-color`}></div><img src="/images/activeIcon.svg" className={`${window.location.pathname === '/portfolio' ? "invisible lg2:visible" : "invisible"} absolute top-1/2 -translate-y-1/2 right-0`} alt="icon" /> <div className='hidden px-2.5 py-[2px] bg-main-color text-white absolute top-1/2 right-[80px] -translate-y-1/2 rounded-full text-sm'>16</div></div></Link>
              <Link to="/buy-sell"><div className={`relative px-6 py-2 mb-5 text-[17px] ${window.location.pathname === "/buy-sell" ? "text-main-color" : "text-not-active"} grid grid-cols-[40px,1fr] items-center`}><img src="/images/buysellActive.svg" className={window.location.pathname === "/buy-sell" ? "w-[22px]" : "hidden w-[22px]"} alt="icon" /> <img src="/images/buysellNotActive.svg" className={window.location.pathname !== "/buy-sell" ? "w-[22px]" : "hidden w-[22px]"} alt="icon" /> Buy/Sell <div className={`${window.location.pathname === "/buy-sell" ? "visible" : "invisible"} absolute top-1/2 -translate-y-1/2 left-0 h-[60px] w-1 rounded-tr-md rounded-br-md bg-main-color`}></div><img src="/images/activeIcon.svg" className={`${window.location.pathname === '/buy-sell' ? "invisible lg2:visible" : "invisible"} absolute top-1/2 -translate-y-1/2 right-0`} alt="icon" /> <div className='hidden px-2.5 py-[2px] bg-main-color text-white absolute top-1/2 right-[80px] -translate-y-1/2 rounded-full text-sm'>16</div></div></Link>
              <Link to="/friends"><div className={`relative px-6 py-2 mb-5 text-[17px] ${window.location.pathname === "/friends" ? "text-main-color" : "text-not-active"} grid grid-cols-[40px,1fr] items-center`}><img src="/images/friendsActive.svg" className={window.location.pathname === "/friends" ? "w-[27px]" : "hidden w-[27px]"} alt="icon" /> <img src="/images/friendsNotActive.svg" className={window.location.pathname !== "/friends" ? "w-[27px]" : "hidden w-[27px]"} alt="icon" /> Friends <div className={`${window.location.pathname === "/friends" ? "visible" : "invisible"} absolute top-1/2 -translate-y-1/2 left-0 h-[60px] w-1 rounded-tr-md rounded-br-md bg-main-color`}></div><img src="/images/activeIcon.svg" className={`${window.location.pathname === '/friends' ? "invisible lg2:visible" : "invisible"} absolute top-1/2 -translate-y-1/2 right-0`} alt="icon" /> <div className='hidden px-2.5 py-[2px] bg-main-color text-white absolute top-1/2 right-[80px] -translate-y-1/2 rounded-full text-sm'>16</div></div></Link>
              <Link to="/chat"><div className={`relative px-6 py-2 mb-5 text-[17px] ${window.location.pathname === "/chat" ? "text-main-color" : "text-not-active"} grid grid-cols-[40px,1fr] items-center`}><img src="/images/chatActive.svg" className={window.location.pathname === "/chat" ? "w-[25px]" : "hidden w-[25px]"} alt="icon" /> <img src="/images/chatNotActive.svg" className={window.location.pathname !== "/chat" ? "w-[25px]" : "hidden w-[25px]"} alt="icon" /> Chat <div className={`${window.location.pathname === "/chat" ? "visible" : "invisible"} absolute top-1/2 -translate-y-1/2 left-0 h-[60px] w-1 rounded-tr-md rounded-br-md bg-main-color`}></div><img src="/images/activeIcon.svg" className={`${window.location.pathname === '/chat' ? "invisible lg2:visible" : "invisible"} absolute top-1/2 -translate-y-1/2 right-0`} alt="icon" /> <div className='hidden px-2.5 py-[2px] bg-main-color text-white absolute top-1/2 right-[80px] -translate-y-1/2 rounded-full text-sm'>6</div></div></Link>
            </div>

              <div className="w-full">
              <Link to="/settings"><div className={`relative px-6 py-2 mb-5 text-[17px] ${window.location.pathname === "/settings" ? "text-main-color" : "text-not-active"} grid grid-cols-[40px,1fr] items-center`}><img src="/images/settingsActive.svg" className={window.location.pathname === "/settings" ? "w-[25px]" : "hidden w-[25px]"} alt="icon" /> <img src="/images/settingsNotActive.svg" className={window.location.pathname !== "/settings" ? "w-[25px]" : "hidden w-[25px]"} alt="icon" /> Settings <div className={`${window.location.pathname === "/settings" ? "visible" : "invisible"} absolute top-1/2 -translate-y-1/2 left-0 h-[60px] w-1 rounded-tr-md rounded-br-md bg-main-color`}></div><img src="/images/activeIcon.svg" className={`${window.location.pathname === '/settings' ? "invisible lg2:visible" : "invisible"} absolute top-1/2 -translate-y-1/2 right-0`} alt="icon" /> <div className='hidden px-2.5 py-[2px] bg-main-color text-white absolute top-1/2 right-[80px] -translate-y-1/2 rounded-full text-sm'>16</div></div></Link>
               <button><div className="relative px-6 py-2 mb-3 text-[17px] text-not-red grid grid-cols-[40px,1fr] items-center"><img src="/images/logout.svg" className='w-[27px]' alt="icon" /> Logout <div className="hidden absolute top-1/2 -translate-y-1/2 left-0 h-[60px] w-1 rounded-tr-md rounded-br-md bg-main-color"></div></div></button>
              </div>
       
        </div>

       </div>
    </>
  )
}

export default SideNavbar