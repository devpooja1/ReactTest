
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const Insert=()=>{
    const [input, setInput] = useState("");

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }

    const handleSubmit=async()=>{

        let api = "http://localhost:3000/product";
        const response = await axios.post(api, input);
        console.log("Data Successfully Inserted!!!"); 


    }

    return(
        <>
    <div align="center" style={{backgroundColor:"lightblue", width:"500px", margin:"20px 450px"}}>
<Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Number</Form.Label>
        <Form.Control type="number" name="pno" onChange={handleChange}  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name="pname" onChange={handleChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter qunty</Form.Label>
        <Form.Control type="qnty" name="qnty" onChange={handleChange} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" onChange={handleChange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="text" name="cname" onChange={handleChange}/>
      </Form.Group>
      
      <Button variant="primary" onClick={handleSubmit} style={{margin:"30px"}}>
        Submit
      </Button>
    </Form>
      
    </div>
        
        </>
    )
}
export default Insert;