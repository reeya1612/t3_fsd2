import {useState} from "react";
function Form1(){
    const[formdata,setformdata]=useState({});
    function handlechange(e){
        const{name,value}=e.target;
        setformdata({...formdata,[name]:value});


    }
    function handlesubmit(e){
        e.preventDefault();
        alert(`form submitted!! Name:${formdata.un} Email:${formdata.eid}`);
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
            <input type="radio" name="female" value="female" onChange={handlechange}/>female
            <select name="city" onChange={handlechange}>
                <option value="ahm">ahm</option>
                <option value="rajkot">rajkot</option>
            </select>      
            <input type="submit"/>
        </form>
        </>
    )
}export default Form1;