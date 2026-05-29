function Productcard(props){
    return(
        <>
        <table border="1px">
            {
            props.data.filter((p)=>p.rating>4).map((p)=>
            <tr>
            <th>{p.name}</th>
            <td>{p.price}</td>
            <td><img src={p.image}width="100"></img></td>
        <td>{p.rating}</td>
        </tr>
            )
        }
       </table>
     
       </>)
}
export default Productcard;