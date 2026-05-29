//all field is required 
import {useState} from "react";
function Form2(){
    const[formdata,setformdata]=useState({});
    function handlechange(e){
        const{name,value}=e.target;
        setformdata({...formdata,[name]:value});


    }
    function handlesubmit(e){
        e.preventDefault();
        if(formdata.un==="" || formdata.eid==="" ||  formdata.pass==="" || formdata.conformpass==="")
            {
                alert("please fill all the field");
            }
        else if(formdata.pass.length>8)
        {
            alert("please enter valid password (length < 8)");
        }
        else if(formdata.pass !== formdata.conformpass)
        {
            alert("pass and confirm pass are not same");

        }
        else
        {
            alert(`thank you !! welcome ${formdata.un} ! Email:${formdata.eid} gender:${formdata.gender}`)
        }
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>Usename: </label>
            <input type="text" name="un" onChange={handlechange}/><br></br>
            <label>Email: </label>
            <input type="email" name="eid" onChange={handlechange}/><br></br>
            <label>password: </label>
            <input type="password" name="pass" onChange={handlechange}/><br></br>
            <label>conform password: </label>
            <input type="password" name="conformpass" onChange={handlechange}/><br></br>
            <label>msg: </label>
            <textarea name="msg" onChange={handlechange} value="A"></textarea>
            <label>gender</label>
            <input type="radio" name="gender" value="male" onChange={handlechange}/>male
            <input type="radio" name="gender" value="female" onChange={handlechange}/>female
            <select name="city" onChange={handlechange}>
                <option value="ahm">ahm</option>
                <option value="rajkot">rajkot</option>
            </select>      
            <input type="submit"/>
        </form>
        </>
    )
}export default Form2;