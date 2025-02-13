import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const Faculty = () => {
    const facultyList =  [
        {
            id: 1,
            name: "Dr. Gopi Sanghani",
            designation: "Dean - School of Computer Science",
            experience: "24+ Years",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg"
        },
        {
            id: 2,
            name: "Dr. Nilesh Gambhava",
            designation: "Professor",
            experience: "22+ Years",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
        },
        {
            id: 3,
            name: "Dr. Pradyumansinh Jadeja",
            designation: "Professor",
            experience: "19+ Years",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg"
        },
        {
            id: 4,
            name: "Prof. Maulik Trivedi",
            designation: "Assistant Professor",
            experience: "16+ Years",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"
        },
        {
            id: 5,
            name: "Prof. Arjun Bala",
            designation: "Assistant Professor",
            experience: "14+ Years",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg"
        },
        {
            id: 6,
            name: "Prof. Swati Sharma",
            designation: "Assistant Professor",
            experience: "16+ Years",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg"
        },
        {
            id: 7,
            name: "Prof. Jay Dhamsaniya",
            designation: "Assistant Professor",
            experience: "12+ Years",
            workingSince: "Jul-2012",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/46---28-04-2023-02-09-28.jpg"
        },
        {
            id: 8,
            name: "Prof. Vishal Kansagara",
            designation: "Assistant Professor",
            experience: "10+ Years",
            workingSince: "Nov-2021",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/334---28-04-2023-01-34-00.jpg"
        },
        {
            id: 9,
            name: "Prof. Shruti Maniar",
            designation: "Assistant Professor",
            experience: "8+ Years",
            workingSince: "Dec-2021",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/336---28-04-2023-01-34-37.jpg"
        },
        {
            id: 10,
            name: "Prof. Dharmik Vasiyani",
            designation: "Assistant Professor",
            experience: "7+ Years",
            workingSince: "Nov-2021",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/335---27-01-2025-09-33-28.jpg"
        },
        {
            id: 11,
            name: "Prof. Devangi Kotak",
            designation: "Assistant Professor",
            experience: "16+ Years",
            workingSince: "Jul-2022",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/359---29-04-2023-01-45-32.jpg"
        },
        {
            id: 12,
            name: "Prof. Bhushan Joshi",
            designation: "Assistant Professor",
            experience: "7+ Years",
            workingSince: "Jun-2022",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/358---28-04-2023-01-37-43.jpg"
        },
        {
            id: 13,
            name: "Prof. Ekta Baldha",
            designation: "Assistant Professor",
            experience: "4+ Years",
            workingSince: "Jul-2022",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/360---29-04-2023-01-45-46.jpg"
        },
        {
            id: 14,
            name: "Prof. Hemang Chath",
            designation: "Assistant Professor",
            experience: "14+ Years",
            workingSince: "Sep-2021",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/328---28-04-2023-01-33-05.jpg"
        },
        {
            id: 15,
            name: "Prof. Madhuresh Fichadiya",
            designation: "Assistant Professor",
            experience: "3+ Years",
            workingSince: "Jul-2021",
            imgurl: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/331---28-04-2023-01-33-39.jpg"
        }
    
    ];

    const [faculties, setFaculties] = useState(facultyList);
    const [newFaculty, setNewFaculty] = useState({
        id: "",
        name: "",
        designation: "",
        experience: "",
        workingSince: "",
        imgurl: "",
    });

    const inputChange = (e) => {
        setNewFaculty({
            ...newFaculty,
            [e.target.name]: e.target.value,
        });
    };

    const addFaculty = () => {
        setFaculties([
            ...faculties,
            {
                ...newFaculty,
                id: faculties.length ? faculties[faculties.length - 1].id + 1 : 1,
            }
        ]);
        setNewFaculty({ id: "", name: "", designation: "", experience: "", workingSince: "", imgurl: "" });
    };

    return (
        <Container className="py-5">
            {/* Add Faculty Form */}
            <div className="bg-light shadow-lg p-5 rounded mx-auto border-start border-4 border-primary" style={{ maxWidth: "500px" }}>
                <h2 className="text-center mb-4 text-primary">Add Faculty</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Faculty Name:</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Faculty Name" value={newFaculty.name} onChange={inputChange} className="shadow-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Designation:</Form.Label>
                        <Form.Control type="text" name="designation" placeholder="Enter Designation" value={newFaculty.designation} onChange={inputChange} className="shadow-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Experience:</Form.Label>
                        <Form.Control type="text" name="experience" placeholder="Enter Experience (e.g., 10+ Years)" value={newFaculty.experience} onChange={inputChange} className="shadow-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Image URL:</Form.Label>
                        <Form.Control type="text" name="imgurl" placeholder="Enter Image URL" value={newFaculty.imgurl} onChange={inputChange} className="shadow-sm" />
                    </Form.Group>
                    <Button variant="primary" className="w-100 fw-bold" onClick={addFaculty}>Add Faculty</Button>
                </Form>
            </div>

            {/* Faculty List */}
            <h2 className="text-center my-5 text-primary">Faculty Members</h2>
            <Row className="g-4">
                {faculties.map(faculty => (
                    <Col key={faculty.id} xs={12} md={6} lg={4}>
                        <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                            <Card.Img variant="top" src={faculty.imgurl} className="rounded-top-4" style={{ height: "250px", objectFit: "cover" }} />
                            <Card.Body className="text-center">
                                <Card.Title className="fw-bold">{faculty.name}</Card.Title>
                                <Card.Text className="text-secondary">{faculty.designation}</Card.Text>
                                <Card.Text className="fw-semibold">
                                    <strong>Experience:</strong> {faculty.experience}
                                </Card.Text>
                                <Button variant="outline-primary" className="fw-bold">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Faculty;
