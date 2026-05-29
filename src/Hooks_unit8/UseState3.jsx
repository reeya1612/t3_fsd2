import {useState} from "react";
function US3(){
    const[text,settext]=useState("lj university");
    const[c,setc]=useState("purple");
    const[hsl,sethsl]=useState("Hide");
    const[hsltext,sethsltext]=useState("React JS");
    function handletext(){
        if(text==="lj university"){settext('welcome students!!!!');}
        else{settext("lj university")}
    }
    function handlecolor(){
        if(c==='purple'){setc('blue');}
        else{setc('purple')}
    }
    function handlehideshow(){
        if(hsl==="Hide"){sethsl("show");sethsltext(" ");}
        else{sethsl("Hide");sethsltext("React JS")}
}
return(
    <>
    <button onClick={handletext}>change text</button><br></br>
    <button onDoubleClick={handlecolor}>change color</button><br></br>
    <button onClick={handlehideshow}>{hsl}</button>
    <h1 style={{color:c}}>{text}</h1>
    <h2>{hsltext}</h2>

    </>
)

}
export default US3;