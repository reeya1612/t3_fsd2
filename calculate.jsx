//all field is required 
import {useState} from "react";
function Cal(){
    const[formdata,setformdata]=useState({formula:"add"});
    function handlechange(e){
        setformdata({...formdata,[e.target.name]:e.target.value})
}
    function handlesubmit(e){
        e.preventDefault();
        var n1=parseInt(formdata.num1);
        var n2=parseInt(formdata.num2);
        let result;
        if(formdata.formula==="add")
        {
           result=n1+n2;
        }
        else if(formdata.formula==="sub")
        {
           result=n1-n2;
        }
        else if(formdata.formula==="mul")
        {
           result=n1*n2;
        }
        else if(formdata.formula==="div")
        {   if(n2===0)
                {
                    alert("can not divide by zero");
                    return;
                }
        else{
            result=n1/n2;

        }
    }
        else
        {
            alert("select valid formula")
        }
        alert(result);
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>first value: </label>
            <input type="number" min="0" name="num1" onChange={handlechange} required/><br></br>
            <label>second value: </label>
            <input type="number" min="0" name="num2" onChange={handlechange} required/><br></br>
            <select name="formula" onChange={handlechange}>
                <option value="add">add</option>
                <option value="sub">sub</option>
                <option value="mul">mul</option>
                <option value="div">div</option>

            </select>     
        <input type="submit"/>
 
        </form>
        </>
    )
}export default Cal;