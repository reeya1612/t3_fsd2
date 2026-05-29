import img from "./assets/img.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

import Productcard from "./Productcard.jsx";
function Productlist()
{
    const products=[{name:"Product1",price:"21000",rating:4.3,image:img},{name:"Product2",price:"22000",rating:2.3,image:img1},
        {name:"Product3",price:"20000",rating:4.5,image:img2},
    ]
    return(
        <>
        <Productcard data={products}/>
        </>
    )
}
export default Productlist;