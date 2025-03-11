import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table"


const TotalAmt=()=>{
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
    let totamt = 0;
    const ans = data.map((key)=>{
        totamt+=parseInt(key.price);
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
        <div>
       
        <h2>Total fees : {totamt}</h2>
        <Table>
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
export default TotalAmt;