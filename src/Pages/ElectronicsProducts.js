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

function ElectronicProducts() {
  const { addItem } = useCart();
  const [menProducts, setMenProducts] = useState([]);

  const menProductsAPI = "http://192.168.68.25:8080/api/electronic-products";

  useEffect(() => {
    fetch(menProductsAPI)
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.products.map((product, index) => ({
          ...product,
          id: index.toString(), // Convert the index to a string and use it as the ID
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
      <div style={{ marginTop: "78px", position: "relative" }}>
        <Header />
        <Container>
          <Typography variant="h3" gutterBottom>
            <h2>Electronic's Products</h2>
          </Typography>

          <Grid container spacing={3}>
            {menProducts.length > 0 ? (
              menProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card>
                    <div className="product-card">
                      <Carousel autoPlay interval={3000} showArrows={true}>
                        {product.images.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={`${product.name} - ${index}`}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <CardContent>
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

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                No Mobile's products available at the moment.
              </Typography>
            )}
          </Grid>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default ElectronicProducts;
