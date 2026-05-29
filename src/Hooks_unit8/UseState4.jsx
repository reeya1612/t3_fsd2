//on click the button display random image
import img1 from "../assets/img.png";
import img2 from "../assets/img1.png";
import img3 from "../assets/img2.png";
import img4 from "../assets/img3.png";
import img5 from "../assets/img5.png";
import {useState} from "react";
function US4(){
    const arr=[img1,img2,img3,img4,img5];
    const[image,setimage]=useState(arr[0]);
function handleimage(){
    const i=Math.floor(Math.random()*arr.length);
    setimage(arr[i]);
}
return(
    <>
    <img src={image} width="300" height="300"/>
    <button onClick={handleimage}>change image</button>
    </>
)
}
export default US4;