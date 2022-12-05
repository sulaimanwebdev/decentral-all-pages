import React from 'react'
import SideNavbar from '../components/shared/SideNavbar'
import FriendsComp from '../components/shared/FriendsComp'
import FriendsCompMobile from '../components/shared/FriendsCompMobile'

import {Link} from 'react-router-dom'
const Friends = () => {

  const [navBar, setnavBar] = React.useState('-translate-x-full');

  let data = [
    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },


    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },


    {
        name: "Sheira Azzahra Putri",
        userName: "@username123 user"
    },

  ]
  
  const [show, setshow] = React.useState('Friends');
  const [friends, setfriends] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add('dashboard');
  }, [])
  
  return (
    <>
    <div className="mainCont grid grid-cols-1 lg4:grid-cols-[300px,1fr,430px] overflow-y-hidden ">
      <div className="px-5 w-full pt-4 flex gap-1 lg4:hidden items-center justify-between">
       <div className="h-fit"><Link to="/"><img src="/images/logo.svg" alt="logo" /></Link></div>
            <div className="flex items-center gap-2">
            
            <button onClick={()=> {navBar === "-translate-x-full" ? setnavBar('translate-x-0') : setnavBar('-translate-x-full')}} className='z-[999999] bg-white w-[45px] flex items-center justify-center h-[54px] rounded-xl border border-[#F2F2F2]'>{navBar === "-translate-x-full" ? <img src="/images/menu.svg" className='w-[25px]' alt="icon" /> : <img src="/images/close.svg" alt="icon" />}</button>
            </div>
      </div>
      <div className={`${navBar} lg4:translate-x-0 transition fixed pr-[75px] lg4:pr-0 max-w-[300px] lg4:max-w-[100%] w-full top-0 left-0 z-[9999] lg4:relative lg4:top-auto lg4:left-auto`}><SideNavbar/></div>
      <div onClick={()=> setnavBar('-translate-x-full')} className={`${navBar === "-translate-x-full" ? "opacity-0 invisible" : "opacity-100 visible"} transition lg4:hidden fixed top-0 z-[999] left-0 w-screen h-screen bg-[#11047A33] bg-opacity-20 pr-4`}></div>
      <div className="pt-5 bg-white overflow-hidden">

      <div className="sidebar-scroll bg-transparent-main-color p-5 rounded-lg lg4:rounded-tl-lg lg4:rounded-tr-lg h-auto min-h-[100vh] lg4:max-h-screen overflow-y-auto">
        
      <div className="bg-white rounded-xl px-4 py-4 lg4:py-2 flex items-center justify-between flex-col gap-2 lg4:flex-row">
          <div className='text-not-black font-bold text-[20px]'>Friends</div>
          <div className="w-full border border-[#E9EDF7] grid grid-cols-2 lg4:hidden items-center sm2:w-fit h-fit bg-transparent-main-color rounded-xl overflow-hidden">
             <button onClick={()=> {setshow("Friends")}} className={`${show === "Friends" ? "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-transparent-main-color text-not-black"}`}>Friends</button>
             <button onClick={()=> {setshow("Add New")}} className={`${show === "Add New" ? "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-transparent-main-color text-not-black"}`}>Add New</button>
          </div>
          <div className="w-full lg4:w-[400px] flex items-center gap-2 bg-white border border-[#F5F5F7] focus-within:border-[#0085FF] focus-within:bg-transparent-main-color  rounded-xl px-3"><input type="text" placeholder='Search Recent Friends' className='w-full bg-transparent py-3 text-[#11047A] text-[15px] border-none outline-none' /><svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#11047A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 16.5L15 15" stroke="#11047A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      </div>

      
      <div className={`friends-scroll sidebar-scroll relative rounded-xl px-4 py-4 bg-white w-full max-h-[600px] lg4:max-h-[calc(100vh-215px)] lg4:max-h-auto lg4:min-h-[calc(100vh-150px)] mt-5 flex items-center justify-center overflow-auto ${show === "Friends" ? "block" : "hidden"}`}>
      
      {
        friends === false
        ?
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3 pb-6 w-full h-full text-center flex-1 flex items-center justify-center">
                <div className='flex items-center justify-center flex-col'>
                <img src="/images/emptyState.svg" alt="empty-state" />
                  <div className="font-bold text-[#11047A] text-[19px]">Oops, You have no Friends Yet</div>
                  <div className="mt-2 text-[#11047A] text-[15px]">Please search or select friends from suggestion to add Friends</div>
                 <button onClick={()=> {setfriends(true)}} className='mt-7 px-5 py-3 sm:px-7 text-[15px] sm:py-4 rounded-xl bg-main-color text-white'>Add Friends Now</button>
                </div>
             </div>

        :
        <div className="flex flex-col divide-y divide-[#F9F9F9]">
      {
        data.map((ele)=>{
            return(
                <div key={Math.random()} className="flex sm10:items-center justify-between flex-col sm10:flex-row py-4 gap-3">
      <div className="flex items-center gap-3">
         <img src="/images/profile.png" className='w-[60px]' alt="profile" />
         <div className='text-left flex flex-col gap-1'>
             <div className='oneLineText text-[#11047A] text-[17px] font-bold'>{ele.name}</div>
             <div className='oneLineText text-not-black text-[15px]'>{ele.userName}</div>
         </div>
      </div>

      <div className="flex justify-evenly sm8:grid sm8:grid-cols-4 sm10:flex items-center sm10:justify-center w-full sm5:w-auto gap-2">
        <button className='bg-main-color rounded-lg text-white px-3.5 h-[43px] flex items-center justify-center text-[15px]'>Request</button>
        <button className='bg-transparent-main-color rounded-lg text-main-color px-3.5 h-[43px] flex items-center justify-center text-[15px]'>Send</button>
        <Link to="/chat"><div className='bg-white border border-[#F5F5F7] rounded-lg text-main-color px-2.5 h-[43px] flex items-center justify-center'><svg width="23" height="23" className='translate-y-[1px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99984 19.0083C9.42484 19.0083 8.88317 18.7166 8.49984 18.2083L7.24984 16.5416C7.22484 16.5083 7.12484 16.4666 7.08317 16.4583H6.6665C3.1915 16.4583 1.0415 15.5166 1.0415 10.8333V6.66663C1.0415 2.98329 2.98317 1.04163 6.6665 1.04163H13.3332C17.0165 1.04163 18.9582 2.98329 18.9582 6.66663V10.8333C18.9582 14.5166 17.0165 16.4583 13.3332 16.4583H12.9165C12.8498 16.4583 12.7915 16.4916 12.7498 16.5416L11.4998 18.2083C11.1165 18.7166 10.5748 19.0083 9.99984 19.0083ZM6.6665 2.29163C3.68317 2.29163 2.2915 3.68329 2.2915 6.66663V10.8333C2.2915 14.6 3.58317 15.2083 6.6665 15.2083H7.08317C7.50817 15.2083 7.9915 15.45 8.24984 15.7916L9.49984 17.4583C9.7915 17.8416 10.2082 17.8416 10.4998 17.4583L11.7498 15.7916C12.0248 15.425 12.4582 15.2083 12.9165 15.2083H13.3332C16.3165 15.2083 17.7082 13.8166 17.7082 10.8333V6.66663C17.7082 3.68329 16.3165 2.29163 13.3332 2.29163H6.6665Z" fill="#0085FF"/><path d="M9.99984 10C9.53317 10 9.1665 9.62504 9.1665 9.16671C9.1665 8.70837 9.5415 8.33337 9.99984 8.33337C10.4582 8.33337 10.8332 8.70837 10.8332 9.16671C10.8332 9.62504 10.4665 10 9.99984 10Z" fill="#0085FF"/><path d="M13.3333 10C12.8667 10 12.5 9.62504 12.5 9.16671C12.5 8.70837 12.875 8.33337 13.3333 8.33337C13.7917 8.33337 14.1667 8.70837 14.1667 9.16671C14.1667 9.62504 13.8 10 13.3333 10Z" fill="#0085FF"/><path d="M6.66683 10C6.20016 10 5.8335 9.62504 5.8335 9.16671C5.8335 8.70837 6.2085 8.33337 6.66683 8.33337C7.12516 8.33337 7.50016 8.70837 7.50016 9.16671C7.50016 9.62504 7.1335 10 6.66683 10Z" fill="#0085FF"/></svg></div></Link>
        <button className='bg-[#FF21211A] rounded-lg text-main-color px-2.5 h-[43px] flex items-center justify-center'><svg width="18" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9059 3.36934C15.2301 3.36934 15.5 3.63851 15.5 3.981V4.29767C15.5 4.63183 15.2301 4.90933 14.9059 4.90933H1.09488C0.769883 4.90933 0.5 4.63183 0.5 4.29767V3.981C0.5 3.63851 0.769883 3.36934 1.09488 3.36934H3.52464C4.01821 3.36934 4.44775 3.01851 4.55879 2.52352L4.68603 1.95519C4.88378 1.18103 5.53458 0.66687 6.27939 0.66687H9.72061C10.4573 0.66687 11.1154 1.18103 11.3059 1.91436L11.442 2.52268C11.5522 3.01851 11.9818 3.36934 12.4762 3.36934H14.9059ZM13.6718 14.9449C13.9255 12.5808 14.3696 6.9642 14.3696 6.90753C14.3858 6.73586 14.3299 6.57337 14.2188 6.44253C14.0997 6.32004 13.949 6.24754 13.7828 6.24754H2.22403C2.05708 6.24754 1.89823 6.32004 1.788 6.44253C1.67616 6.57337 1.62105 6.73586 1.62915 6.90753C1.63064 6.91794 1.64658 7.11578 1.67322 7.44654C1.79158 8.9159 2.12124 13.0084 2.33426 14.9449C2.485 16.3716 3.42108 17.2683 4.77698 17.3008C5.82329 17.3249 6.9012 17.3333 8.00343 17.3333C9.04163 17.3333 10.096 17.3249 11.1748 17.3008C12.5777 17.2766 13.5129 16.3958 13.6718 14.9449Z" fill="#FF2121"/></svg></button>
      </div>

      </div>
            )
        })
      }
      </div>
      }

      </div>


      <div className={`${show === "Add New" ? "block" : "hidden"} lg4:hidden mt-5`}><FriendsCompMobile/></div>


      </div>

      </div>
      <div className='hidden lg4:block'><FriendsComp/></div>
      
    </div>
    </>
  )
}

export default Friends