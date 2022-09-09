import React from "react";
import "./ProductComponent.css";
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';

const ProductComponent = ({ item}) => {

  const renderList = item.map((item) => {
    return (
      
      <div
        className="col-5 card product-card p-3 mx-3 my-2 col-sm-8 col-md-6 col-lg-5 "
        key={item?.id} >
<Link to={`/home/pagedescription`}  state={{ data: item }}>
        <div className="product-content product-wrap clearfix">
          <div className="row">
            <div className="col-5">
            
              <div className="product-image">
                  <img
                    width="100px"
                    src={item?.image}
                    alt={item?.title}
                    className="img-responsive"
                  />
              </div>
            </div>
            <div className="col-7">
              <div>
                <span className="category">
                  {item?.category}
                </span>
                <div className="header">
                  <Link to={`/home/pagedescription`}  state={{ data: item }}></Link>
                </div>
                <div className="describe">{item?.description}</div>
                
                <div>
                  <span className="price mx-1 my-2"
                  >
                    {item?.price}
                  </span>
                  <span className="actual_price">
                    ${(item.price + (item.price * 10) / 100).toFixed(2)}
                  </span>
                </div>
                <div>
                  {/* <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span> */}
                    <StarRatings
            rating={item.rating.rate}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
          />
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>

      
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
