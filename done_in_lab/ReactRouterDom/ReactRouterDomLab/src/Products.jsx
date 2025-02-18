import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const Products = () => {
    const initialProducts = [
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

    const [products, setProducts] = useState(initialProducts);
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        desc: "",
        imgurl: "",
    });

    const inputChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    const addProduct = () => {
        if (!newProduct.title || !newProduct.price || !newProduct.desc || !newProduct.imgurl) return;
        setProducts([
            ...products,
            {
                ...newProduct,
                id: products.length ? products[products.length - 1].id + 1 : 1,
            }
        ]);
        setNewProduct({ title: "", price: "", desc: "", imgurl: "" });
    };

    return (
        <Container className="py-5">
            {/* Add Product Form */}
            <div className="bg-light shadow-lg p-5 rounded mx-auto border-start border-4 border-success" style={{ maxWidth: "500px" }}>
                <h2 className="text-center mb-4 text-success">Add Product</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Product Name:</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Enter Product Name" value={newProduct.title} onChange={inputChange} className="shadow-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Price:</Form.Label>
                        <Form.Control type="number" name="price" placeholder="Enter Price" value={newProduct.price} onChange={inputChange} className="shadow-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Description:</Form.Label>
                        <Form.Control as="textarea" name="desc" rows={3} placeholder="Enter Product Description" value={newProduct.desc} onChange={inputChange} className="shadow-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Image URL:</Form.Label>
                        <Form.Control type="text" name="imgurl" placeholder="Enter Image URL" value={newProduct.imgurl} onChange={inputChange} className="shadow-sm" />
                    </Form.Group>
                    <Button variant="success" className="w-100 fw-bold" onClick={addProduct}>Add Product</Button>
                </Form>
            </div>

            {/* Product List */}
            <h2 className="text-center my-5 text-success">All Products</h2>
            <Row className="g-4">
                {products.map(prod => (
                    <Col key={prod.id} xs={12} md={6} lg={4}>
                        <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                            <Card.Img variant="top" src={prod.imgurl} className="rounded-top-4" style={{ height: "250px", objectFit: "cover" }} />
                            <Card.Body className="text-center">
                                <Card.Title className="fw-bold">{prod.title}</Card.Title>
                                <Card.Text className="text-secondary">{prod.desc}</Card.Text>
                                <h5 className="fw-bold">₹ {prod.price}</h5>
                                <Button variant="outline-success" className="fw-bold">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
