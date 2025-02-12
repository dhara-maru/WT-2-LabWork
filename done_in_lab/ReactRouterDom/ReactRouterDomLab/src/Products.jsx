import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

const Products = () => {
    const products = [
        {
            id: 1,
            title: "Graphic Novel",
            price: 350,
            desc: "A graphic novel is a book made up of comics content that tells a story using sequential art.",
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnXg8pGrCrMc_7Ss83ZvOen46Y74cpKnpng&s"
        },
        {
            id: 2,
            title: "Action Figure",
            price: 499,
            desc: "An action figure is a poseable character figurine, often based on a comic, movie, or video game character.",
            imgurl: "https://cdn.shopify.com/s/files/1/0255/3842/9014/files/Dandadan-Okarun-Transformed-Figma-Action-Figure_600x600.jpg?v=1735719073"
        },
        {
            id: 3,
            title: "Tote Bag",
            price: 299,
            desc: "A stylish and eco-friendly tote bag featuring exclusive comic book artwork.",
            imgurl: "https://nekopublishing.myshopify.com/cdn/shop/files/ok212img01.jpg?v=1692928578"
        }
    ];

    return (
        <Container className="py-5">
            {/* Add Product Form */}
            <div className="bg-white shadow p-4 rounded mx-auto" style={{ maxWidth: '600px' }}>
                <h2 className="text-center mb-4">Add New Product</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Product ID:</Form.Label>
                        <Form.Control type="number" placeholder="Enter Product ID" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Price:</Form.Label>
                        <Form.Control type="number" placeholder="Enter Product Price" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Description:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Product Description" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Image URL:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Image URL" />
                    </Form.Group>
                    <Button variant="primary" className="w-100">Add Product</Button>
                </Form>
            </div>

            {/* Product List */}
            <h2 className="text-center my-5">All Products</h2>
            <Row className="g-4">
                {products.map(prod => (
                    <Col key={prod.id} xs={12} md={6} lg={4}>
                        <Card className="h-100 shadow">
                            <Card.Img variant="top" src={prod.imgurl} style={{ height: '250px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{prod.title}</Card.Title>
                                <Card.Text>{prod.desc}</Card.Text>
                                <h5 className="fw-bold">₹ {prod.price}</h5>
                                <Button variant="success" className="mt-2">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
