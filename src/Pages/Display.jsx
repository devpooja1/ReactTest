import axios from "axios";
import { useEffect, useState } from "react";
import {Table} from "react-bootstrap"



const Display=()=>{
    const [data, setData] = useState([]);

    const loadData=async()=>{
        let api= "http://localhost:3000/product";
        const display = await axios.get(api);
        setData(display.data)
        console.log(display.data);

    }

    useEffect(()=>{
        loadData()
    },[]);

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
        <Table striped >
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
export default Display;