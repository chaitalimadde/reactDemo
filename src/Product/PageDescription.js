import { useLocation,useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import Button from 'react-bootstrap/Button';
import './PageDescription.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const PageDescription =()=>{
    const location = useLocation();
    console.log(location);
    return <div>
          <Card className='cardText'>
          <TransformWrapper>
        <TransformComponent>
                        <Card.Img src={location.state.data.image} />
                        </TransformComponent></TransformWrapper>

                        <Card.Body>
                        <Card.Title><Button variant="primary">{location.state.data.category}</Button></Card.Title>
                                    <Card.Text style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{location.state.data.description}</Card.Text>
                                    <span style={{ paddingRight: '10px'}}>${location.state.data.price}</span>
                                    <span style={{textDecoration: 'line-through'}}>{(location.state.data.price +(location.state.data.price *10) /100).toFixed(2)}</span>
        <StarRatings
            rating={location.state.data.rating.rate}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
          />
                        </Card.Body>

                    </Card>
    </div>

}

export default PageDescription;