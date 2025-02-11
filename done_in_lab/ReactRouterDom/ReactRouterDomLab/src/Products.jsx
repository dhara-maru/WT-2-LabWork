import React from 'react'

const Products = () => {


    const products = [
        {
            "id": 1,
            "title": "Graphic Novel",
            "price": 350,
            "desc": "A graphic novel is a book made up of comics content that tells a story using sequential art.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnXg8pGrCrMc_7Ss83ZvOen46Y74cpKnpng&s"
        },
        {
            "id": 2,
            "title": "Action Figure",
            "price": 499,
            "desc": "An action figure is a poseable character figurine, often based on a comic, movie, or video game character.",
            "imgurl": "https://cdn.shopify.com/s/files/1/0255/3842/9014/files/Dandadan-Okarun-Transformed-Figma-Action-Figure_600x600.jpg?v=1735719073"
        },
        {
            "id": 3,
            "title": "Tote Bag",
            "price": 299,
            "desc": "A stylish and eco-friendly tote bag featuring exclusive comic book artwork.",
            "imgurl": "https://nekopublishing.myshopify.com/cdn/shop/files/ok212img01.jpg?v=1692928578"
        },
        {
            "id": 4,
            "title": "Mug",
            "price": 199,
            "desc": "A high-quality ceramic mug featuring vibrant prints of famous comic book characters.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZrCcDb74C7M3ob2LfWvpp_mqWLAcxLzO_w&s"
        },
        {
            "id": 5,
            "title": "Poster",
            "price": 150,
            "desc": "A stunning wall poster featuring iconic comic book scenes and superheroes.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6eD9KdM7fwXHdHGmgTQUJHqgRDpLqEx4jA&s"
        },
        {
            "id": 6,
            "title": "T-Shirt",
            "price": 599,
            "desc": "A premium cotton T-shirt with exclusive comic book character prints.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yLf7LJzHE6vg_bIZAXE9X8Xy6H5ynEbb1A&s"
        },
        {
            "id": 7,
            "title": "Sticker Pack",
            "price": 99,
            "desc": "A pack of high-quality comic book-themed stickers for customization and decoration.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLZxHd6OZkVQhJj8WokroK3ktFGqUgn-9kQ&s"
        },
        {
            "id": 8,
            "title": "Keychain",
            "price": 129,
            "desc": "A durable metal keychain featuring miniature versions of famous comic book logos.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-0SwD2LrDlvOEKz0AHknuNoL0A5qgJcu6A&s"
        },
        {
            "id": 9,
            "title": "Notebook",
            "price": 249,
            "desc": "A premium notebook with comic book cover designs and blank or ruled pages.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cfymv7id9pFclPgsT-1QAK7yGnTgqRA1gQ&s"
        },
        {
            "id": 10,
            "title": "Phone Case",
            "price": 399,
            "desc": "A high-quality phone case with comic book character prints, available for multiple models.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKBgOsZHwLzWf05Guvz8mbdT3M6mgobq6Tg&s"
        },
        {
            "id": 11,
            "title": "Puzzle",
            "price": 350,
            "desc": "A fun and challenging jigsaw puzzle featuring a famous comic book cover.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzFXd1BXyEt93Vb1c9xIHPOdybLNUXHtQpg&s"
        },
        {
            "id": 12,
            "title": "Collectible Cards",
            "price": 450,
            "desc": "A set of collectible trading cards featuring rare comic book character artwork.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUu1t_HdJQdzW5UmnBrZ0RWVeqxz6_VrAOg&s"
        },
        {
            "id": 13,
            "title": "Enamel Pin",
            "price": 199,
            "desc": "A stylish enamel pin featuring a classic comic book logo or character.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVye9cPRQNkT54qFq4RU7KxOXY5NFCm5xJ9A&s"
        },
        {
            "id": 14,
            "title": "Socks",
            "price": 299,
            "desc": "Comfortable and stylish socks featuring vibrant comic book-themed designs.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfrUm4KP0CGkKAt8do-kmHE8eJmgKfh_A2Q&s"
        },
        {
            "id": 15,
            "title": "Hoodie",
            "price": 899,
            "desc": "A cozy and stylish hoodie with bold comic book prints, perfect for fans.",
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gXfXa5Su82VlmMEAvSyd17HtuRCZcbNQeg&s"
        }
    ];    



    return (
        <div className="container">
            <div className="row">
                <h1>All Products</h1>

                {products.map((prod) => (
                    <div key={prod.id} className="card m-3" style={{ width: '18rem' }}>
                        <img src={prod.imgurl} className="card-img-top" alt={prod.title} />
                        <div className="card-body">
                            <h5 className="card-title">{prod.title}</h5>
                            <h6 className="card-text text-black"><b>₹ {prod.price}</b></h6>
                            <p className="card-text">{prod.desc}</p>
                            <a href="#" className="btn btn-success">Buy Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products
