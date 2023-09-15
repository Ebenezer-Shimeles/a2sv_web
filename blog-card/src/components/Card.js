import Summary from "./Summary";
import Title from "./Title";
import DateNow from "./Date";
import { useState } from "react";

const Card = ({img, title, date, summary}) =>{
    /**
     * This card accepts img sorucr =>img, title, date of writing and summary(optional)
     * 
     */
   const [likes, setLikes] = useState(0) //we store the number of likes for each component using useState
   const [comments, setComments] = useState([]) //we store all comments here
   const [newComment, setNewComment] = useState(""); //New comment that we be stored if we press comment button
   const imageSize = 200;
   return (
    <div  style={ {boxShadow: "0px 0px 2px black", width: '70vw', display: 'flex',  justifyContent: 'space-between', 
    
    }}>
        <div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '60%', alignItems: 'center', textAlign: 'left'}}>
            <Title title={title} /> {/** Render the title */}
            <DateNow date={date}/>  {/* Render the date*/}
            {summary && <Summary summary={summary} />} {/**Optionally render summary */}
            <div style={{marginTop: '2px', display: 'flex', width: '70%', justifyContent:'space-evenly', alignItems: 'center'}}>
                {"Likes: " + likes}
                <button className="btn" onClick={_ =>setLikes(likes + 1)}>Like Blog</button> {/**Here we update and show likes */}
                {"Comments :" + comments.length}
                <input type ='text' placeholder="New comment" value={newComment} onChange={e => setNewComment(e.target.value)}/>
                <button className="btn"
                 onClick={_ =>{
                    setComments([...comments, newComment])
                    setNewComment("");//reset value
                 }}
                >Add Comment</button>

            </div>
            
        </div>
      
        <img src = {img} width={'20%'} height={imageSize} />
 
    </div>
   )
} 
export default Card;