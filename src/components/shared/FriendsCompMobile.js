import {useState} from 'react';

const Friends = () => {

    let data = [
        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: true,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: true,
        },

        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },

        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },

        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },

        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },

        

    ]

    const [overflow, setoverflow] = useState('overflow-y-auto');
    const [overflow2, setoverflow2] = useState('overflow-y-auto');
    
  return (
    <>
       <div className="sidebar-scroll h-full relative bg-transparent-main-color overflow-y-auto lg4:max-h-screen my-5 rounded-xl">
        <div className='h-[calc(100%-100px)]'>

             <div className='my-8 mt-3 pt-5 bg-white rounded-xl'>

                <div className="px-5 lg4:px-4 flex items-center justify-between border-b pb-3 border-[#F9F9F9]">
                    <div className='text-[17px] text-[#11047A] font-bold'>Friends Request</div>
                    <button><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2175 11.3629C14.1286 11.3629 12.4342 13.072 12.4342 15.1815C12.4342 17.2898 14.1286 19 16.2175 19C18.3064 19 19.9997 17.2898 19.9997 15.1815C19.9997 13.072 18.3064 11.3629 16.2175 11.3629Z" fill="#0085FF"/><path opacity="0.4" d="M8.08337 13.6605H1.50788C0.67567 13.6605 0.00012207 14.3424 0.00012207 15.1812C0.00012207 16.0201 0.67567 16.703 1.50788 16.703H8.08337C8.91447 16.703 9.59002 16.0201 9.59002 15.1812C9.59002 14.3424 8.91447 13.6605 8.08337 13.6605Z" fill="#0085FF"/><path d="M3.78329 7.6371C5.87216 7.6371 7.56658 5.928 7.56658 3.81967C7.56658 1.71022 5.87216 0 3.78329 0C1.69443 0 0 1.71022 0 3.81967C0 5.928 1.69443 7.6371 3.78329 7.6371Z" fill="#0085FF"/><path opacity="0.4" d="M20 3.81927C20 2.98043 19.3244 2.29858 18.4933 2.29858H11.9179C11.0856 2.29858 10.4101 2.98043 10.4101 3.81927C10.4101 4.65812 11.0856 5.33997 11.9179 5.33997H18.4933C19.3244 5.33997 20 4.65812 20 3.81927Z" fill="#0085FF"/></svg></button>
                </div>


                <div className={`sidebar-scroll relative flex flex-col divide-y divide-[#F9F9F9] h-full ${overflow} ${overflow === "overflow-y-hidden" ? "lg4:max-h-[50vh]" : "max-h-[600px]"} `}>
                {
                  data.map((ele)=>{
                    return(
                        <div key={Math.random()} className="flex sm3:items-center justify-between flex-col sm3:flex-row gap-2 py-4 px-5 lg4:px-4">
      <div className="flex items-center gap-3">
         <img src="/images/profile.png" className='w-[60px]' alt="profile" />
         <div className='text-left flex flex-col gap-1'>
             <div className='oneLineText text-[#11047A] text-[15px] font-bold'>{ele.name}</div>
             <div className='oneLineText text-not-black text-[15px]'>{ele.id}</div>
         </div>
      </div>

      <div className="grid grid-cols-2 sm3:flex sm3:items-end sm3:justify-end w-full sm3:w-auto gap-2 mt-3 sm3:mt-0">
        <button className='bg-main-color rounded-lg text-white px-3.5 h-[43px] flex items-center justify-center text-[14px]'>Dismiss</button>
        <button className='bg-[#FF21211A] rounded-lg text-[#FF3535] px-3.5 h-[43px] flex items-center justify-center text-[14px]'>Accept</button>
      </div>

      </div>
                    )
                  })
                }


                </div>

             </div>




             <div className='pt-5 bg-white rounded-xl'>

<div className="px-5 lg4:px-4 flex items-center justify-between border-b pb-3 border-[#F9F9F9]">
    <div className='text-[17px] text-[#11047A] font-bold'>Suggestion People</div>
    <button><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2175 11.3629C14.1286 11.3629 12.4342 13.072 12.4342 15.1815C12.4342 17.2898 14.1286 19 16.2175 19C18.3064 19 19.9997 17.2898 19.9997 15.1815C19.9997 13.072 18.3064 11.3629 16.2175 11.3629Z" fill="#0085FF"/><path opacity="0.4" d="M8.08337 13.6605H1.50788C0.67567 13.6605 0.00012207 14.3424 0.00012207 15.1812C0.00012207 16.0201 0.67567 16.703 1.50788 16.703H8.08337C8.91447 16.703 9.59002 16.0201 9.59002 15.1812C9.59002 14.3424 8.91447 13.6605 8.08337 13.6605Z" fill="#0085FF"/><path d="M3.78329 7.6371C5.87216 7.6371 7.56658 5.928 7.56658 3.81967C7.56658 1.71022 5.87216 0 3.78329 0C1.69443 0 0 1.71022 0 3.81967C0 5.928 1.69443 7.6371 3.78329 7.6371Z" fill="#0085FF"/><path opacity="0.4" d="M20 3.81927C20 2.98043 19.3244 2.29858 18.4933 2.29858H11.9179C11.0856 2.29858 10.4101 2.98043 10.4101 3.81927C10.4101 4.65812 11.0856 5.33997 11.9179 5.33997H18.4933C19.3244 5.33997 20 4.65812 20 3.81927Z" fill="#0085FF"/></svg></button>
</div>


<div className={`sidebar-scroll relative flex flex-col divide-y divide-[#F9F9F9] h-full ${overflow2} ${overflow2 === "overflow-y-hidden" ? "lg4:max-h-[50vh]" : "max-h-[600px]"} `}>
                {
                  data.map((ele)=>{
                    return(
                        <div key={Math.random()} className="flex sm3:items-center justify-between flex-col sm3:flex-row gap-2 py-4 px-5 lg4:px-4">
      <div className="flex items-center gap-3">
         <img src="/images/profile.png" className='w-[60px]' alt="profile" />
         <div className='text-left flex flex-col gap-1'>
             <div className='oneLineText text-[#11047A] text-[15px] font-bold'>{ele.name}</div>
             <div className='oneLineText text-not-black text-[15px]'>{ele.id}</div>
         </div>
      </div>

      <div className="grid grid-cols-1 sm3:flex sm3:items-end sm3:justify-end w-full sm3:w-auto gap-2 mt-3 sm3:mt-0">
        <button className={`rounded-lg text-white sm3:w-[140px] h-[43px] flex items-center justify-center text-[14px] ${ele.request ? "bg-[#ACACAC]" : "bg-main-color"}`}>{ele.request ? "Cancel Request" : "Send Request"}</button>
      </div>

      </div>
                    )
                  })
                }

                    

                </div>

</div>










        
        </div>
       </div>
    </>
  )
}

export default Friends