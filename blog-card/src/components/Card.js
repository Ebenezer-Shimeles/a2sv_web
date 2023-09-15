import Summary from "./Summary";
import Title from "./Title";
import DateNow from "./Date";

const Card = ({img, title, date, summary}) =>{
   const imageSize = 200;
   return (
    <div  style={ {boxShadow: "0px 0px 2px black", width: '70vw', display: 'flex',  justifyContent: 'space-between', 
    
    }}>
        <div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '60%', alignItems: 'center', textAlign: 'left'}}>
            <Title title={title} />
            <DateNow date={date}/>
            {summary && <Summary summary={summary} />}
        </div>
      
        <img src = {img} width={'20%'} height={imageSize} />
 
    </div>
   )
} 
export default Card;