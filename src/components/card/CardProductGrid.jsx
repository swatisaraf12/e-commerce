import { Link } from "react-router-dom";

const CardProductGrid = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.images[0]}
        className="card-img-top"
        alt="..."
        width={425}
        height={355}
      />
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          <Link to={product.link} className="text-decoration-none">
            {product.title}
          </Link>
        </h6>
        <div className="my-2">
          <span className="fw-bold h5">${product.price}</span>
          {product.originPrice > 0 && (
            <del className="small text-muted ms-2">${product.originPrice}</del>
          )}
          <span className="ms-2">
            {Array.from({ length: product.rating }, (_, key) => (
              <i className="bi bi-star-fill text-warning me-1" key={key} />
            ))}
          </span>
        </div>
        <div className="btn-group  d-flex" role="group">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            title="Add to cart"
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
  );
};

export default CardProductGrid;
