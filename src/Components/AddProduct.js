import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast, Button } from "react-bootstrap";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    brand: "",
    image: null,
  });
  const [showToast, setToast] = useState(false);

  const navigate = useNavigate();

  const inputData = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formDataSubmit = (e) => {
    e.preventDefault();

    if (formData.title.length < 4) {
      alert("Title should be greater than 3 characters");
    } else if (formData.price <= 0 || formData.stock <= 0) {
      alert("Price or stock cannot be negative");
    } else {
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((e) => e.json())
        .then((e) => {
          setToast(true);

          setTimeout(() => {
            navigate("/");
          }, 2500);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <Toast
        onClose={() => setToast(false)}
        autohide
        show={showToast}
        delay={1500}
      >
        <Toast.Header>
          <strong className="mr-auto">Product status</strong>
        </Toast.Header>
        <Toast.Body>Your product is added successfully</Toast.Body>
      </Toast>

      <div className="addProduct">
        <div className="formData">
          <h2>Add Product</h2>
          <form onSubmit={formDataSubmit}>
            <input
              type="text"
              id="title"
              name="title"
              maxLength="200"
              onChange={inputData}
              placeholder="title"
              required
            />
            <input
              type="text"
              id="description"
              name="description"
              onChange={inputData}
              placeholder="description"
              required
            />
            <input
              type="number"
              id="price"
              onChange={inputData}
              name="price"
              placeholder="price"
              required
            />
            <input
              type="number"
              id="stock"
              onChange={inputData}
              name="stock"
              placeholder="stock"
              required
            />
            <input
              type="text"
              id="brand"
              onChange={inputData}
              name="brand"
              placeholder="brand"
              required
            />
            <input
              type="file"
              accept="image/*"
              id="image"
              onChange={inputData}
              name="image"
              placeholder="image"
            />

            <button type="submit">Add</button>
          </form>
        </div>

        <div className="circle"></div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default AddProduct;
