function Map(){
    const Student=[{rollno:1,name:"ABC",std:5},{rollno:2,name:"DEF",std:6},{rollno:3,name:"GHI",std:5},{rollno:4,name:"JKL",std:5},{rollno:5,name:"MNO",std:7}]
    return(
        <>
        {Student.filter((s)=>s.std===5).map((s,i)=>
        <div key={s.rollno}>
            <h2>student name {s.name}</h2>
            <h3>standard {s.std+1}</h3>
            </div>
        )}
        </>
    )
}
export default Map;