//every time 2 increase 
import { useReducer } from "react";
function reducer(state,action) //direct map from dispatch
{
    return state+action;
}
function UR1(){
    const[state,dispatch]=useReducer(reducer,20);//no need to make multiple funtion 
    return(
        <div>
            <h1>
                {state}
            </h1>
            <button onClick={()=>dispatch(2)}>ADD</button>
        </div>
    )
}//default argument
export default UR1;