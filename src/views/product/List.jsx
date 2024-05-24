import React, { useEffect, useState,useContext } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FilterCategory from "../../components/filter/Category";

import CardServices from "../../components/card/CardServices";
import CardProductGrid from "../../components/card/CardProductGrid";
import CardProductList from "../../components/card/CardProductList";
import axios from "axios";
import Paging from '../../components/Paging'
import { AppContext } from "../../reducers";
const ProductListView = () => {
  // const [products, setProducts] = useState();
  const { products, setProducts, selectedCategory } = useContext(AppContext);

  const [view, setView] = useState("grid");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=12&page=1")
      .then((res) => setProducts([...res.data.products]));
  });
  const onChangePage=(pageNumber)=>{
    axios
      .get(`https://dummyjson.com/products?limit=12&skip=${pageNumber*12}`)
      .then((res) => setProducts([...res.data.products]));
  }

  if (!products || products.length < 1) {
    return <p>No Product Found</p>;
  }

  return (
    <>
     
      <Breadcrumb />
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3">
            <FilterCategory />
            <CardServices />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-7">
                <span className="align-middle fw-bold">
                 
                {selectedCategory && selectedCategory !== "All"
                    ? ` ${products.length} results for ${selectedCategory}`
                    : "All Items"}

                </span>
              </div>
              <div className="col-5 d-flex justify-content-end">
                {/* <select
                  className="form-select mw-180 float-start"
                  aria-label="Default select"
                >
                  <option value={1}>Most Popular</option>
                  <option value={2}>Latest items</option>
                  <option value={3}>Trending</option>
                  <option value={4}>Price low to high</option>
                  <option value={4}>Price high to low</option>
                </select> */}
                <div className="btn-group ms-3" role="group">
                  <button
                    aria-label="Grid"
                    type="button"
                    onClick={() => setView("grid")}
                    className={`btn ${
                      view === "grid" ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    <i className="bi bi-grid" />
                  </button>
                  <button
                    aria-label="List"
                    type="button"
                    onClick={() => setView("list")}
                    className={`btn ${
                      view === "list" ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    <i className="bi bi-list" />
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row g-3">
              {view === "grid" &&
                products.map((product, idx) => {
                  return (
                    <div key={idx} className="col-md-4">
                      <CardProductGrid product={product} />
                    </div>
                  );
                })}
              {view === "list" &&
                products.map((product, idx) => {
                  return (
                    <div key={idx} className="col-md-12">
                      <CardProductList data={product} />
                    </div>
                  );
                })}
            </div>
            <hr />
            {(!selectedCategory || selectedCategory === "All") && (
              <Paging
                totalRecords={100}
                pageLimit={12}
                pageNeighbours={3}
                onPageChanged={(e) => onChangePage(e.currentPage)}
                sizing=""
                alignment="justify-content-center"
              />
            )}

          </div>
        </div>
      </div>
    </>
  );
};
export default ProductListView;
