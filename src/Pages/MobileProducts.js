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

// Import your custom CSS for styling
import "./MobileProducts.css";

function MobileProducts() {
  const { addItem } = useCart();
  const [mobileProducts, setMobileProducts] = useState([]);

  const mobileProductsAPI = "http://192.168.68.24:8080/api/Mobiles-products";

  useEffect(() => {
    fetch(mobileProductsAPI)
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.products.map((product, index) => ({
          ...product,
          id: index.toString(), // Convert the index to a string and use it as the ID
        }));
        setMobileProducts(formattedProducts);
      })
      .catch((error) => {
        console.error("Error fetching mobile products:", error);
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
      <div>
        <Container>
          <Typography variant="h3" gutterBottom>
            <h2>Mobile's Products</h2>
          </Typography>

          <Grid container spacing={3}>
            {mobileProducts.length > 0 ? (
              mobileProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card className="custom-mobile-card"> {/* Apply the same custom card styling */}
                    <div className="product-card">
                      <Carousel autoPlay interval={3000} showArrows={true}>
                        {product.images.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt={`${product.name} - ${index}`}
                              className="custom-mobile-carousel-image" // Apply the same custom carousel image styling
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <CardContent className="custom-Mobile-card-content">
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
                        className="add-to-cart-button"
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
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default MobileProducts;
