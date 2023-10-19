import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import "./mensfashion.css";

function MensFashion() {
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
      <div>
        <Header />
      </div>
      <Container>
        <Typography variant="h3" gutterBottom>
          <h2>Men's Products</h2>
        </Typography>

        <Grid container spacing={3}>
          {menProducts.length > 0 ? (
            menProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card className="custom-card">
                  <div className="product-card">
                    <Carousel autoPlay interval={2000} showArrows={true}>
                      {product.images.map((image, index) => (
                        <div key={index}>
                          <img
                            src={image}
                            alt={`${product.name} - ${index}`}
                            className="custom-carousel-image"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <CardContent className="custom-mens-card-content">
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ fontSize: "1rem" }}
                    >
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
              </Grid>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No men's products available at the moment.
            </Typography>
          )}
        </Grid>
      </Container>
      <div>
        <Footer />
      </div>

    </>
  );
}

export default MensFashion;
