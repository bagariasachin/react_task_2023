import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, setProducts } from "../Store/Slices/productSlice";

function ProductList() {
  const dispatch = useDispatch();
  const productsArray = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts()).then((data) =>
      dispatch(setProducts(data.payload))
    );
  }, [dispatch]);

  return (
    <div>
      <div className="breadcumb_area bg-img">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shop_grid_area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="shop_grid_product_area">
                <div className="row">
                  <div className="col-12">
                    <div className="product-topbar d-flex align-items-center justify-content-between">
                      <div className="total-products">
                        <p>
                          <span>
                            {productsArray
                              ? productsArray.length
                              : "NO PRODUCT"}
                          </span>{" "}
                          products found
                        </p>
                      </div>

                      <div className="product-sorting d-flex">
                        <p>Sort by: Highest Rated</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {productsArray &&
                    productsArray.map((res) => (
                      <div key={res.id} className="col-12 col-sm-6 col-lg-4">
                        <div className="single-product-wrapper">
                          <div className="product-img">
                            <img src={res.images[0]} alt="productImg" />

                            <img
                              className="hover-img"
                              src={res.images[1]}
                              alt="productImg"
                            />

                            <div className="product-badge offer-badge">
                              <span>{res.stock}</span>
                            </div>

                            <div className="product-favourite">
                              <a href="#" className="favme fa fa-heart">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>

                          <div className="product-description">
                            <span>{res.brand}</span>

                            <h6>
                              {res.title.length > 200
                                ? `${res.title.slice(0, 200)}...`
                                : res.title}
                            </h6>

                            <p className="product-price">$ {res.price}</p>
                            <p>{res.description}</p>

                            <div className="hover-content">
                              <div className="add-to-cart-btn">
                                <a href="#" className="btn essence-btn">
                                  Add to Cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
