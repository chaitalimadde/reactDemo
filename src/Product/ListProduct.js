import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import ProductPagination from "./ProductPagination;";
import "./ListProduct.css";
// import './ProductPagination.css'
import { Navigate } from "react-router-dom";

const ListProduct = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4);
  const token = JSON.parse(localStorage.getItem("token"));


  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setData(data.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if(token ===null){
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="container-fluid newDemo">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-12">
          <div className="row product_card" data-testid="productid">
            <ProductComponent item={currentPost} isLoading={loading}/>
           
            <ProductPagination
              postPerPage={dataPerPage}
              totalPost={data.length}
              paginate={paginate}
            />
         </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;