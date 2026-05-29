import {useState} from "react";
//component name always capital latter here US1
//button show ,click aavse,count je initial hase ae aavse(0) , here function is 
// handlecount so jyare button click thay tyare count increase thase
function US1(){
    const[count,setcount]=useState(0);
    function handlecount(){setcount(count+1);}
    return(
        <>
        <button onClick={handlecount}>click</button> 
        <h1>count is{count}</h1>
            </>
    
    )

}
export default US1;
// onClick={()=>setcount(count+1)}