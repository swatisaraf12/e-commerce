import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../reducers";

const CardProductList = (props) => {
  const product = props.data;
  const { addToCart, cart } = useContext(AppContext);

  const addToCartHandler = (product) => {
    const isProductAdded = cart.find((item) => item.id === product.id);
    if (isProductAdded) {
      console.log(isProductAdded,"isProductAdded")
      const qty = isProductAdded.qty + 1;
      const otherProduct = cart.filter((item) => item.id !== product.id);
      console.log(otherProduct,"otherProduct")
      addToCart([...otherProduct, { ...product, qty: qty }]);
    } else {
      console.log([...cart,{ ...product, qty: 1 }],"cart")
      addToCart([...cart,{ ...product, qty: 1 }]);
    }
    //
  };
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img
            src={product.images[0]}
            className="img-fluid"
            alt="..."
            height={328}
            width={274}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle me-2 d-inline">
              <Link to={product.link} className="text-decoration-none">
                {product.title}
              </Link>
            </h6>

            <div>
              {product.rating > 0 &&
                Array.from({ length: product.rating }, (_, key) => {
                  if (key <= product.rating)
                    return (
                      <i
                        className="bi bi-star-fill text-warning me-1"
                        key={key}
                      />
                    );
                  else
                    return (
                      <i
                        className="bi bi-star-fill text-secondary me-1"
                        key={key}
                      />
                    );
                })}
            </div>
            {product.description &&
              product.description.includes("|") === false && (
                <p className="small mt-2">{product.description}</p>
              )}
            {product.description && product.description.includes("|") && (
              <ul className="mt-2">
                {product.description.split("|").map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <div className="mb-2">
              <span className="fw-bold h5">${product.price}</span>
            </div>

            <div className="btn-group d-flex" role="group">
              <button
                type="button"
                className="btn btn-sm btn-primary"
                title="Add to cart"
                onClick={() => addToCartHandler(product)}
              >
                <i className="bi bi-cart-plus" />
              </button>
              {/* <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                title="Add to wishlist"
              >
                <i className="bi bi-heart-fill" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductList;
