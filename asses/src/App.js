import { useEffect, useState } from "react";
import Card from "./components/Card";
import getAllTest from "./fetch";


function App() {
  const [scrollPos, setScrollPos] = useState(0)
  const [dropVisible, setDropVisible] = useState(false)
  const tests = getAllTest()
  const scrollListener = (e) =>{
    console.log(scrollPos)
    setScrollPos(window.scrollY)
    
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollListener)
    
  }, [])
  return (
    <div className="h-auto  w-screen  bg-slate-100 flex flex-col justify-evenly items-center scroll-smooth">
      <div id='upper' className={  `z-50 bg-white sticky left-0 right-0 top-0 flex justify-between w-full pl-20  pr-10 h-[75px] items-center ` + (scrollPos == 0? '' : ' shadow-md')}>
          {/*The logos are stored here */}
         
          <img src = 'https://a2sv.org/logos/logo-blue.png' className="w-32 h-12"/>
     
         
          <div id='tabs' className="relative h-full  flex font-light font-serif text-md tracking-wider text-md">
            <div className="flex flex-col justify-center h-full  hover:bg-slate-200 leading-1 text-center pl-5 pr-5">Home</div>
            <div className="flex flex-col justify-center h-full  leading-1 text-center pl-5 pr-5 flex-1">
              <div className="relative flex items-center justify-between gap-1 h-full"   onMouseOut={()=> setDropVisible(false)}    onMouseOver={()=> setDropVisible(true)}>
                  <span>Teams </span>
                  <span>
                      <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                      </svg>
                  </span>
                  { dropVisible && 
                  <div     className=" z-50 absolute  top-16 w-[160px] bg-slate-200 rounded-lg shadow-lg flex flex-col   tracking-tighter pt-3 pb-3">
                    <div className="hover:bg-slate-300 w-full p-3 ">Board Members</div>
                    <div className="hover:bg-slate-300 w-full p-3 ">Advisors/Mentors</div>
                    <div className="hover:bg-slate-300 w-full p-3 ">Executives</div>
                    <div className="hover:bg-slate-300 w-full p-3 ">Staff</div>
                    <div className="hover:bg-slate-300 w-full p-3 ">Placements</div>
                    <div className="hover:bg-slate-300 w-full p-3 ">Groups</div>
                 </div> }
                  
              </div>
         
            </div>
            <div className="flex justify-center flex-col">
              <div className="flex flex-col justify-center h-3/4   hover:bg-slate-200 leading-1 text-center pl-5 pr-5 mt-2">
                Success Stories
              </div>
              <div className="bg-blue-600 h-[6px] rounded-t-xl">

              </div>
            </div>
         
            <div className="flex flex-col justify-center h-full  hover:bg-slate-200 leading-1 text-center pl-5 pr-5">About Us</div>
            <div className="flex flex-col justify-center h-full  hover:bg-slate-200 leading-1 text-center pl-5 pr-5">Get Involved</div>
          </div>
          <button className="h-10 bg-blue-600 pl-6 pr-6 text-white rounded-md self-center font-light hover:bg-blue-500">Donate</button>
      </div>
      <div id='header-1'  className ='flex flex-col items-center text-justify w-3/4 gap-4 mt-16' >
          <h1 className="text-5xl font-bold ">Success Stories</h1>
          <span className="text-xl">
             
            A2SV has turned the dreams of African software engineers into a reality and continues to thrive.
         
          </span>
          <span className="text-md mt-16 text-md">
              Google SWE Interviews Acceptance Rate Comparison

          </span>
          <span className="text-lg">

             A2SV students are 35 times more likely to pass Google SWE interviews than average candidates. 
          </span>


      </div>
      <img src='lines.png '/>
      <div id='data-1'>
          
      </div>
      <div id='impact' className="w-full flex flex-col items-center mt-10">
         <h2 className="text-5xl font-bold">Impact Stories</h2>
         <span className="text-xl font-light mt-6"> Behind every success is a story. Learn about the stories of A2SVians. </span>
         <div id='egs' className="mt-10 w-11/12  flex flex-col items-center  gap-4">
             {tests.map( (test, u)=>{
                     return (
                      <Card  index={u} exp={test.exp} now={test.now} change={test.change} img={test.img} loc={test.loc} pos={test.pos} name={test.name} key={`test-${u}`}/>
                     )
             })}
           
         </div>
      </div>
      <img src='graph.png' className="mt-10"/>

      <form onSubmit={e => e.preventDefault()}  id='contact-us' className='w-screen bg-[#2964E5]  flex flex-col h-[600px] items-center mt-16 justify-center text-center gap-3'>
          <h2 className="text-white text-3xl font-bold" >Subscribe To Our News Letter !</h2>
          <label className="text-white text-lg ">Email</label>
          <input  required type='text' className="w-1/3 rounded-md h-10"/>
          <label className="text-white text-lg ">First Name</label>
          <input  required type='text' className="w-1/3 rounded-md h-10"/>
          <label className="text-white text-lg ">Last Name</label>
          <input required type='text' className="w-1/3 rounded-md h-10"/>
          <span className="text-white"><input type='checkbox' className="text-white"/> Check if related to A2SV as a student, mentor or other</span>
          <button className="  bg-amber-500 text-white pr-60 pl-60 pt-3 pb-3 rounded-lg">
            Subscribe Now
          </button>
      </form>
      <div className="flex flex-col items-center">
        <span className="text-slate-600 m-3"> Follow us on social media</span>
        <img src='links.png '  className=" mb-8"/>
        <span>© Copyright 2023 A2SV Foundation. All rights reserved. <a className="text-blue-600">Privacy Policy | Cookie Policy</a> </span>
      </div>
      
       { (scrollPos != 0) && <button className="rounded-full bg-blue-400 fixed bottom-5 right-6 w-12 h-12 text-white" onClick={()=>window.scroll({top: 0, left: 0, behavior: 'smooth'})}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path></svg>
       </button>}
      
    </div>
  );
}

export default App;
