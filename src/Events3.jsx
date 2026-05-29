function Events3()
{
    const handleclick=()=>{
        console.log("you clicked once");
    }
    const handlechange=(e)=>{
        document.getElementById('text').innerHTML=e.target.value;
        console.log(e.target.value);
        }
    const handledoubleclick=()=>{
        alert("you clicked twice");
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        var u=document.getElementById('un').value;
        alert(`welcome ${u}`);
    }
    return(
        <>
        <h1>handle Change and submit Events</h1>
        <form onSubmit={handlesubmit}>
            <input type="text" id="un" onChange={handlechange}/>
        </form>
        <h3 id="text"></h3>
        <button onDoubleClick={handledoubleclick} onClick={handleclick}>click here</button>
        </>
    )
}export default Events3;