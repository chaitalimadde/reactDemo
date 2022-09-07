import Card from 'react-bootstrap/Card';
import './ListProduct.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { Row, Col, Container } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

class ListProduct extends React.Component{
    // let [responseData, setResponseData] = React.useState('');
  
    constructor(props){
        super(props);
        this.state={
            responseData: []
        }
    }

    goToCarddetails = (details) => {
        console.log("selected card details:", details);
        this.props.history.push('/pagedescription');
     }

   componentDidMount=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            
            // response.data.newPrice = (response.data.price * response.data.price *10) /100;
            this.setState({responseData: response.data})
        })
        .catch(err=>{
               console.log(err)
            }
        )
    }
      
render(){
    return <div>
<h1>List product page</h1>
<Container>
        <Row>
            {this.state.responseData ? this.state.responseData.map((prod, k) => (
                
                <Col key={k} xs={12} md={4} lg={3}>
                    <Card onClick = {()=>this.goToCarddetails('cardId1')}>
                        <Card.Img src={prod.image} />

                        <Card.Body>
                        <Card.Title><Button variant="primary">{prod.category}</Button></Card.Title>
                                    <Card.Text style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{prod.description}</Card.Text>
                                    <span style={{ paddingRight: '10px'}}>${prod.price}</span>
                                    <span style={{textDecoration: 'line-through'}}>{(prod.price +(prod.price *10) /100).toFixed(2)}</span>
        <StarRatings
            rating={prod.rating.rate}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
          />
                        </Card.Body>

                    </Card>
                </Col>
            )) : <p></p>}
        </Row>
    </Container>
        </div>}
}

export default ListProduct;