
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../images/ban1.jpeg";
import image2 from "../images/ban2.jpeg";
import image3 from "../images/ban3.jpeg";
import image4 from "../images/ban4.jpeg";

const Home=()=>{

    

    return(
        <>
        <center>
        <h1 style={{color:"blue",marginTop:"10px"}}>Welcome to Home Page</h1>
        </center>

        <Carousel >
      <Carousel.Item>
        <img src={image3} height="550px"  width="100%" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={image1} height="550px"  width="100%" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} height="550px"  width="100%" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={image4
            
        } height="550px"  width="100%" />
        
      </Carousel.Item>
    </Carousel>
    </>
        
    )
}
export default Home;