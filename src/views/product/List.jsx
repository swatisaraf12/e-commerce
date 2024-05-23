import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FilterCategory from "../../components/filter/Category";
import FilterPrice from "../../components/filter/Price";
import FilterSize from "../../components/filter/Size";
import FilterStar from "../../components/filter/Star";
import FilterColor from "../../components/filter/Color";
import FilterTag from "../../components/filter/Tag";
import FilterClear from "../../components/filter/Clear";
import CardServices from "../../components/card/CardServices";
import CardProductGrid from "../../components/card/CardProductGrid";
import CardProductList from "../../components/card/CardProductList";
import axios from "axios";

const ProductListView = () => {
  const [products, setProducts] = useState();
  const [view, setView] = useState("grid");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=12&page=1")
      .then((res) => setProducts([...res.data.products]));
  }, []);

  if (!products || products.length < 1) {
    return <p>No Product Found</p>;
  }

  return (
    <>
      <div
        className="p-5 bg-primary bs-cover"
        style={{
          backgroundImage: "url(../../images/banner/50-Banner.webp)",
        }}
      >
        <div className="container text-center">
          <span className="display-5 px-3 bg-white rounded shadow">
            T-Shirts
          </span>
        </div>
      </div>
      <Breadcrumb />
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3">
            <FilterCategory />
            <FilterPrice />
            {/* <FilterSize />
            <FilterStar />
            <FilterColor /> */}
            <FilterClear />
            {/* <FilterTag /> */}
            <CardServices />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-7">
                <span className="align-middle fw-bold">
                  {products.length} results for{" "}
                  <span className="text-warning">"t-shirts"</span>
                </span>
              </div>
              <div className="col-5 d-flex justify-content-end">
                <select
                  className="form-select mw-180 float-start"
                  aria-label="Default select"
                >
                  <option value={1}>Most Popular</option>
                  <option value={2}>Latest items</option>
                  <option value={3}>Trending</option>
                  <option value={4}>Price low to high</option>
                  <option value={4}>Price high to low</option>
                </select>
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
                  console.log({ product });
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
            {/* <Paging
              totalRecords={totalItems}
              pageLimit={9}
              pageNeighbours={3}
              onPageChanged={this.onPageChanged}
              sizing=""
              alignment="justify-content-center"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductListView;
