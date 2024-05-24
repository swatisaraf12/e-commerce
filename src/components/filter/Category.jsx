import React,{useEffect,useState,useContext} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../reducers";
const FilterCategory = (props) => {
  const [category,setCategory]=useState([]);
  const { setProducts,selectedCategory,setSelectedCategory} = useContext(AppContext);
  // {[...new Set(cart.map(obj => obj.id))].length}
  useEffect(() => {
    axios
    .get("https://dummyjson.com/products/categories")
    .then((res) => setCategory([...res.data]));
  }, []);

  useEffect(() => {
    if(selectedCategory && selectedCategory!=="All")
      {
    axios
      .get(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then((res) => setProducts([...res.data.products]));
      }
      else 
         {
          axios
          .get("https://dummyjson.com/products?limit=12&page=1")
          .then((res) => setProducts([...res.data.products]));
         }
        
  }, [selectedCategory]);

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
         <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link" onClick={()=>{setSelectedCategory('All')}}>
           All
          </Link>
        </li>

        {category.map((element)=>{return ( <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link"  onClick={()=>{setSelectedCategory(element.slug)}}>
           {element.name}
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
