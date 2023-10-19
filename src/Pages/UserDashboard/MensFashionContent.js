import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import './MensFashionContent.css'; 

function MensFashionContent() {
  const { addItem } = useCart();
  const [menProducts, setMenProducts] = useState([]);

  const menProductsAPI = "http://192.168.68.24:8080/api/mens-fashion-products";

  useEffect(() => {
    fetch(menProductsAPI)
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.products.map((product, index) => ({
          ...product,
          id: index.toString(),
        }));
        setMenProducts(formattedProducts);
      })
      .catch((error) => {
        console.error("Error fetching men's products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    const { _id, name, price, images } = product;
    addItem({
      id: _id,
      name: name,
      price: price.toFixed(2),
      image: images[0],
      ...product,
    });
  };

  return (
<>
    <div className="mens-content-main-heading">
        <h2>Best Products of MensFashion</h2>
    </div>
    <Container className="mens-content-main-container">
      <div className="mens-content-scroll-container">
        <div className="mens-content-card-container">
          {menProducts.map((product) => (
            <Card key={product.id} className="mens-content-custom-card">
              <div className="product-card">
                <Carousel autoPlay interval={2000} showArrows={true}>
                  {product.images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`${product.name} - ${index}`}
                        className="mens-content-custom-carousel-image"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <CardContent className="mens-content-custom-card-content">
                <Typography variant="h6" gutterBottom style={{ fontSize: "1rem" }}>
                  {product.name}
                </Typography>

                <Typography variant="h6" color="primary">
                  Price: Rs {product.price.toFixed(2)}
                </Typography>

                <Link to={`/product/${product._id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
    </>
  );
}


export default MensFashionContent;
