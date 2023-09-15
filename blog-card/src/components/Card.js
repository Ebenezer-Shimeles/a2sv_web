import Summary from "./Summary";
import Title from "./Title";
import DateNow from "./Date";

const Card = ({img, title, date, summary}) =>{
    /**
     * This card accepts img sorucr =>img, title, date of writing and summary(optional)
     * 
     */
   const imageSize = 200;
   return (
    <div  style={ {boxShadow: "0px 0px 2px black", width: '70vw', display: 'flex',  justifyContent: 'space-between', 
    
    }}>
        <div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '60%', alignItems: 'center', textAlign: 'left'}}>
            <Title title={title} /> {/** Render the title */}
            <DateNow date={date}/>  {/* Render the date*/}
            {summary && <Summary summary={summary} />} {/**Optionally render summary */}
        </div>
      
        <img src = {img} width={'20%'} height={imageSize} />
 
    </div>
   )
} 
export default Card;