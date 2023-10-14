import { useDispatch, useSelector } from "react-redux";
import  {like,  unlike } from "../store/like";

const Card = (props)=>{
   const {exp, now, change, img, loc, name, pos, index} = props; //to catch error too :) 
   const likes = useSelector(d=>d.likeReducer[index])
   const dispatch = useDispatch();
  
   return(
   <div className="shadow-2xl flex md:flex-row sm:flex-col   bg-white p-10 rounded-xl gap-5 w-3/4 self-center" >
       <div className="w-5/12  rounded-2xl relative">
           <img src = {img} className="rounded-lg h-full"/>
           <div className="absolute top-0 z-50 h-full w-10/12 flex flex-col justify-end ml-6 ">
              <span className="text-white font-bold text-lg">{name}</span>
              <span className="text-white font-bold text-sm">{pos}</span>
              <span className="text-white font-bold text-sm">{loc}</span>
           </div>
       </div>
     
       <div id='data' className="flex flex-col  w-1/2 justify-center gap-3">
          <span className="flex flex-col"> 
              <span className="font-bold">My A2SV Experience</span> 
              <span className="text-sm italic ">{exp}</span>
          </span>
          <span className="flex flex-col">
              <span className="font-bold">What I did/I am doing now</span>
              <span className="text-sm italic">{now}</span>
          </span>

          <span className="flex flex-col">
             <span className="font-bold">How the A2SV program changed my life</span>
             <span className="text-sm italic">{change}</span>
          </span>
          <span className="felx flex-col">
            <span>{likes} likes  </span>
            <span className="flex gap-2">
                <button onClick={()=>dispatch(like(index))}>Like</button>
                <button onClick={()=>dispatch(unlike(index))}>Unlike</button>
            </span>
          </span>
      </div>
   </div>
   );
}

export default Card;