//routing + props
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Shome from "./Shome";
import Sproject from "./Sproject";
import Snopage from "./Snopage";
import img from "../assets/img.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
function Student()
{
    const S=[{name:"Project1",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, perspiciatis."
        ,image:img},
        {name:"Project2",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, perspiciatis."
        ,image:img1},
        {name:"Project3",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, perspiciatis."
        ,image:img2},
    ]
    return(
        <>
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul> 
            <Routes>
                <Route path="/" element={<Shome/>}/>
                <Route path="/projects" element={<Sproject data={S}/>}/>
                <Route path="*" element={<Snopage/>}/>
                
            </Routes>   
            </Router>    
        </div></>
    )
}
export default Student;