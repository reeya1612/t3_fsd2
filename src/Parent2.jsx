import Child from "./Child2.jsx";
import Child22 from "./Child22.jsx";

function Parent(){
    var n="ABC";
    var obj={name:"Test",clg:"LJU"};
    return(
        <>
        <Child surname={n} age="20"/>
        <Child surname="xyz" age={23}></Child>
        <Child22 data={obj}/>
        </>
    )
}
export default Parent;