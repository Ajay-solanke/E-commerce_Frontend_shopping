import React from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import Header from "../components/Header";

const CartItemCard = ({ item, onDecrease, onIncrease, onRemove }) => {
  const [theme] = useThemeHook();

  return (
    <Card className="mb-3">
      <Card.Body style={{ boxShadow: "initial" }}>
        <Row>
          <Col xs={3}>
            <Card.Img src={item.image} alt={item.title} />
          </Col>
          <Col xs={6}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Price: Rs. {item.price}</Card.Text>
            <Card.Text>Quantity: {item.quantity}</Card.Text>
          </Col>
          <Col xs={3} className="d-flex align-items-center justify-content-end">
            <Button
              variant="secondary"
              className="me-2"
              onClick={onDecrease}
              style={{ marginTop: "150px" }}
            >
              -
            </Button>
            <Button
              variant="secondary"
              className="me-2"
              onClick={onIncrease}
              style={{ marginTop: "150px" }}
            >
              +
            </Button>
            <Button
              variant="danger"
              onClick={onRemove}
              style={{ marginTop: "150px" }}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const Cart = () => {
  const [theme] = useThemeHook();
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const handleDecrease = (itemId, quantity) => {
    if (quantity > 1) {
      updateItemQuantity(itemId, quantity - 1);
    }
  };

  const handleIncrease = (itemId, quantity) => {
    updateItemQuantity(itemId, quantity + 1);
  };

  return (
    <>
      <div style={{ marginTop: "75px" }}>
        <Header></Header>
      </div>

      <Container className="py-4 mt-5">
        <h1
          className={`${
            theme ? "text-light" : "text-light-primary"
          } my-5 text-center`}
        >
          {isEmpty ? "Your Cart is Empty" : "The Cart"}
        </h1>
        <Row className="justify-content-center">
          {isEmpty ? (
            <p>No items in the cart.</p>
          ) : (
            items.map((item) => (
              <Col key={item.id} xs={12} md={6} lg={4}>
                <CartItemCard
                  item={item}
                  onDecrease={() => handleDecrease(item.id, item.quantity)}
                  onIncrease={() => handleIncrease(item.id, item.quantity)}
                  onRemove={() => removeItem(item.id)}
                />
              </Col>
            ))
          )}
        </Row>
        {!isEmpty && (
          <Row
            style={{ position: "fixed", bottom: 0 }}
            className={`${
              theme ? "bg-light-black text-light" : "bg-light text-black"
            } justify-content-center w-100`}
          >
            <Col className="py-2">
              <h4>Total Price: Rs. {cartTotal}</h4>
            </Col>
            <Col className="p-0" md={4}>
              <Button
                variant="danger"
                className="m-2"
                onClick={() => emptyCart()}
              >
                <BsCartX size="1.7rem" />
                Clear Cart
              </Button>
              <Button variant="success" className="m-2">
                <BsCartCheck size="1.7rem" />
                Checkout
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Cart;
