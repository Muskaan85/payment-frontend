import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [showReviews, setShowReviews] = useState(false);

  const imageUrl =
    product.images?.[1] || product.images?.[0] || product.thumbnail;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.title} />

      <div className="info">
        <span className="availability">
          Availability:
          <span> {product.availabilityStatus}</span>
        </span>

        <span className="rating">⭐ {product.rating}</span>
      </div>

      <h5 className="title">{product.title}</h5>

      <span className="brand">
        Brand:<span> {product.brand}</span>
      </span>

      <span className="delivery">
        Delivered in:<span> {product.shippingInformation}</span>
      </span>

      <span className="warranty">
        Warranty:<span> {product.warrantyInformation}</span>
      </span>

      <p className="price">₹ {Math.round(product.price * 80)}</p>

      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>

      <button
        className="Reviewsbtn"
        onClick={() => setShowReviews(!showReviews)}
      >
        {showReviews ? "Hide Reviews" : "Show Reviews"}
      </button>

      {showReviews && (
        <div className="reviews-section">
          {product.reviews.map((review, index) => (
            <div className="review" key={index}>
              <div className="subrev">
                <span>
                  <strong>{review.reviewerName}</strong>
                </span>
                <span>⭐ {review.rating}</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
