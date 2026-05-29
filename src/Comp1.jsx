import img1 from "./assets/hero.png";
import "./Myapp.css";
function Comp1(){
    var n="ABC";
    var c={color:"red",fontSize:"30px"}
    //css form of object not dase allowed and second word capital key value pair ma lakhvu always
    return(
    <>
    <h1 style={{color:"blue",fontSize:"50px",textTransform:"UpperCase"}}>hii {n}</h1>
    <h2 style={c}>hello</h2>
    <h1>hii</h1>
    <h2>hello</h2>
    <img src={img1} className="i1"></img>
    <img src="/favicon.svg" className="i1"></img>
    {/*comments in single line or multi line*/}
    {//
    }
    
    </>//wrap all element in single tag usind fragment or div tag
    //1st inline css ane 2nd property mate
    //className , onClick , onChange attribute always camelcase
    //all tag must be close
) 
}
export default Comp1;
// function Comp1()
// {
//     return(
//         <h1>hello</h1>
//     )
// }
// export default Comp1;