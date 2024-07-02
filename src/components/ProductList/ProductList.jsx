import React, { useState } from 'react';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: "Afauto 7pcs Bmw Black-Silver Car",
    image: "https://theme1117-turbojet.myshopify.com/cdn/shop/products/img_18_360x.png?v=1657124170",
    discount: "-2%",
    newPrice: "$195.00",
    oldPrice: "$200.00",
    tag: "New"
  },
  {
    id: 2,
    name: "Pair Of Kicker 11KM6LC Charcoal",
    image: "https://theme1117-turbojet.myshopify.com/cdn/shop/products/img_19_360x.png?v=1660051013",
    discount: "-20%",
    newPrice: "$280.00",
    oldPrice: "$350.00",
    tag: "New"
  },
  {
    id: 3,
    name: "Air Intake Hose For Toyota Camry",
    image: "https://theme1117-turbojet.myshopify.com/cdn/shop/products/img_20_360x.png?v=1657124315",
    newPrice: "$300.00",
    tag: "New"
  },
  {
    id: 4,
    name: "Awe Tuning Bmw 335i-435i F3x M235i",
    image: "https://theme1117-turbojet.myshopify.com/cdn/shop/products/img_21_360x.png?v=1657124365",
    discount: "-15%",
    newPrice: "$580.00",
    oldPrice: "$600.00",
    tag: "New"
  },
  {
    id: 2,
    name: "Pair Of Kicker 11KM6LC Charcoal",
    image: "https://theme1117-turbojet.myshopify.com/cdn/shop/products/img_19_360x.png?v=1660051013",
    discount: "-20%",
    newPrice: "$280.00",
    oldPrice: "$350.00",
    tag: "New"
  },
  {
    id: 3,
    name: "Air Intake Hose For Toyota Camry",
    image: "https://theme1117-turbojet.myshopify.com/cdn/shop/products/img_20_360x.png?v=1657124315",
    newPrice: "$300.00",
    tag: "New"
  },
  {
    id: 4,
    name: "Awe Tuning Bmw 335i-435i F3x M235i",
    image: "https://theme1117-turbojet.myshopify.com/cdn/shop/products/img_21_360x.png?v=1657124365",
    discount: "-15%",
    newPrice: "$580.00",
    oldPrice: "$600.00",
    tag: "New"
  }
];

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('Engine & Drivetrain');

  return (
    <div className="product-list-container">
      <h2>Top category products</h2>
      <div className="category-selector">
        <span className={activeCategory === 'Engine & Drivetrain' ? 'active' : ''} onClick={() => setActiveCategory('Engine & Drivetrain')}>Engine & Drivetrain</span>
        <span className={activeCategory === 'Interior Parts' ? 'active' : ''} onClick={() => setActiveCategory('Interior Parts')}>Interior Parts</span>
        <span className={activeCategory === 'Tools & Garage' ? 'active' : ''} onClick={() => setActiveCategory('Tools & Garage')}>Tools & Garage</span>
        <div className="arrows">
          <button className="prev">&#x2039;</button>
          <button className="next">&#x203A;</button>
        </div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.discount && <span className="discount">{product.discount}</span>}
              <span className="tag">{product.tag}</span>
            </div>
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                <span className="new-price">{product.newPrice}</span>
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
