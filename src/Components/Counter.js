import { useState } from "react";
import "../Styles/Counter.css"

function Counter(){
    const [number,setNumber] = useState(0);
function increase(){
 setNumber(number+1);
}

function decrease(){
    setNumber(number-1);
   }
return(
<div className="counter-div">
<button className="button" onClick={decrease}> - </button>
<span className="text-style"> {number} </span>
<button className="button" onClick={increase}> + </button>



</div>

);


}

export default Counter;