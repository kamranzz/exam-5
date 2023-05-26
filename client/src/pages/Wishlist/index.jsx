import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";

const About = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWishlist = wishlist.filter((product) => product._id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        // Update the state or perform any other actions
        Swal.fire("Deleted!", "The product has been deleted.", "success");
      }
    });
  };

  return (
    <Container>
      <h1 className="text-center my-4">Wishlist Page</h1>
      <Row>
        {wishlist.map((product) => (
          <Col key={product._id} md={4} className="d-flex align-items-center mb-4">
            <Card>
              <Card.Img className="image-wish" variant="top" src={product.imageURL} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
