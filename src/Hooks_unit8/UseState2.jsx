import {useState} from "react";
import img1 from "./img1.png";
import img2 from "./img2.png";

//button show ,click aavse,count je initial hase ae aavse(0) , here function is increment , 
// decrement , and change image on click 
function US2(){
    const[count,setcount]=useState(20);
    const[image,setimage]=useState(img1);
    function handleinc(){if(count<50){setcount(count+1);}}
    function handledec(){if(count>0){setcount(count-1);}}
    function handleimage(){
        if(image===img1)
        {
            setimage(img2)
        }
        else
        {
            setimage(img1)
        }
    }
    return(
        <>
        <button onClick={handleinc}>Increment</button> 
        <button onClick={handledec}>Decrement</button> 
        <h2>{count}</h2>
        <button onClick={handleimage}>change image</button> 
        <img src={image} width="300"/>
        </>
    
    )

}
export default US2;