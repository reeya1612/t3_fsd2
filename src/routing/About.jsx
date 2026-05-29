import img from './img.png';
function About(){
    return(
        <>
        <img src={img} width="100"></img>
        <h1 style={{color:"purple",textTransform:"uppercase"}}>welcome to about Page</h1>
        </>
    )
}
export default About;