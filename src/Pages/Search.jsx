import axios from "axios";
import { useState } from "react";
import  Button  from "react-bootstrap/Button";
import  Table  from "react-bootstrap";

const Search=()=>{
    const [data, setData] = useState([]);
    const [pno, setPno] = useState("");


    const handleSubmit=async()=>{
        let api= `http://localhost:3000/product/?pno=${pno}`;
        const response = await axios.get(api);
        setData(response.data);
        console.log(response.data);

    }
    

    

    const ans = data.map((key)=>{
        return(
            <>
             <tr>
            <td>{key.pno}</td>
            <td>{key.pname}</td>
            <td>{key.qnty}</td>
            <td>{key.price}</td>
            <td>{key.cname}</td>
        </tr>
            
            </>
        )
       
    })

    return(
        <>
        <div style={{width:"800px", margin:"auto"}}>
        <h1>Display Data</h1>

        Enter Product Number : <input type="text" name="pno"  value={pno}  onChange={(e)=>{setPno(e.target.value)}} style={{height:"45px", marginTop:"10px", borderRadius:"10px"}}/>
        <Button bg="primary" onClick={handleSubmit} style={{marginLeft:"20px"}}>Search</Button>
        <hr/>
        <Table striped>
            <tr>
                <th>Product Number</th>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
                <th>C Name</th>
            </tr>
            <tbody>
               {ans} 
            </tbody>
        </Table>
        </div>
        </>
    )
}
export default Search;