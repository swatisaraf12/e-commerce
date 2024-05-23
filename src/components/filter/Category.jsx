import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const FilterCategory = (props) => {
  const [category,setCategory]=useState([]);
  // {[...new Set(cart.map(obj => obj.id))].length}
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=12&page=1")
      .then((res) => setCategory([...new Set([...res.data.products].map(item=>item.category))]));
  }, []);

  return (
    <div className="card mb-3 accordion">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterCategory"
        aria-expanded="true"
        aria-controls="filterCategory"
      >
        Categories
      </div>
      <ul
        className="list-group list-group-flush show"
        id="filterCategory"
      >
        {category.map((element)=>{return ( <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
           {element}
          </Link>
        </li>)})}
        {/* <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Clothing
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Leather Bag
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Trausers
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Sweater & Cardigans
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            High Heels
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Coats & Jackets
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default FilterCategory;
