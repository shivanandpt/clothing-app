export interface ProductDetailsProps {
    id: number,
    name: string,
    image: string,
    price: number,
    description?: string,
    collection?: string,
    reviews?: number,
    material?: string,
    color?: string,
    tags?: string[];
    selected: boolean;
    addToCart?: (id: number) => void
}

export interface ProductListProps {
    products: ProductDetailsProps[]
}

export const products: ProductDetailsProps[] = [
    {
        id: 1,
        name: "Knee-Length Skirt",
        image: "https://placehold.co/600x500?text=Knee-Length+Skirt",
        price: 38.99,
        description: "Knee-length skirt in a stretch weave with a concealed zip at the back.",
        collection: "Summer Collection",
        reviews: 320,
        material: "61% cotton, 34% polyester, 5% elastane",
        color: "Black",
        tags: ["Skirt", "Summer", "Casual"],
        selected: false,
    },
    {
        id: 2,
        name: "Classic White Shirt",
        image: "https://placehold.co/600x500?text=Classic+White+Shirt",
        price: 24.99,
        description: "A classic white shirt made of high-quality cotton fabric.",
        collection: "Spring Collection",
        reviews: 215,
        material: "100% Cotton",
        color: "White",
        tags: ["Shirt", "Formal", "Spring"],
        selected: false,
    },
    {
        id: 3,
        name: "Blue Denim Jacket",
        image: "https://placehold.co/600x500?text=Blue+Denim+Jacket",
        price: 49.99,
        description: "Trendy denim jacket with a classic fit for any occasion.",
        collection: "Winter Collection",
        reviews: 500,
        material: "Denim",
        color: "Blue",
        tags: ["Jacket", "Denim", "Winter"],
        selected: false,
    },
    {
        id: 4,
        name: "Graphic T-Shirt",
        image: "https://placehold.co/600x500?text=Graphic+T-Shirt",
        price: 15.99,
        description: "Soft cotton t-shirt with a bold graphic print.",
        collection: "Everyday Wear",
        reviews: 180,
        material: "100% Cotton",
        color: "Red",
        tags: ["T-Shirt", "Casual", "Graphic"],
        selected: false,
    },
    {
        id: 5,
        name: "Athletic Sneakers",
        image: "https://placehold.co/600x500?text=Athletic+Sneakers",
        price: 69.99,
        description: "Lightweight athletic sneakers with a cushioned sole for maximum comfort.",
        collection: "Sports Collection",
        reviews: 250,
        material: "Mesh, Rubber",
        color: "Gray",
        tags: ["Sneakers", "Sports", "Comfort"],
        selected: false,
    },
    {
        id: 6,
        name: "Elegant Evening Dress",
        image: "https://placehold.co/600x500?text=Elegant+Evening+Dress",
        price: 89.99,
        description: "Elegant evening dress with a flattering silhouette and lace detailing.",
        collection: "Evening Wear",
        reviews: 120,
        material: "Polyester, Lace",
        color: "Navy Blue",
        tags: ["Dress", "Evening", "Elegant"],
        selected: false,
    },
    {
        id: 7,
        name: "Casual Joggers",
        image: "https://placehold.co/600x500?text=Casual+Joggers",
        price: 29.99,
        description: "Comfortable joggers with a relaxed fit and drawstring waist.",
        collection: "Everyday Wear",
        reviews: 300,
        material: "Cotton Blend",
        color: "Black",
        tags: ["Joggers", "Casual", "Comfort"],
        selected: false,
    },
    {
        id: 8,
        name: "Leather Handbag",
        image: "https://placehold.co/600x500?text=Leather+Handbag",
        price: 129.99,
        description: "Premium leather handbag with ample storage space.",
        collection: "Accessories",
        reviews: 220,
        material: "Genuine Leather",
        color: "Brown",
        tags: ["Handbag", "Leather", "Accessories"],
        selected: false,
    },
    {
        id: 9,
        name: "Striped Polo Shirt",
        image: "https://placehold.co/600x500?text=Striped+Polo+Shirt",
        price: 19.99,
        description: "Classic striped polo shirt for a smart casual look.",
        collection: "Spring Collection",
        reviews: 310,
        material: "Cotton",
        color: "Navy & White",
        tags: ["Polo Shirt", "Casual", "Smart"],
        selected: false,
    },
    {
        id: 10,
        name: "Woolen Scarf",
        image: "https://placehold.co/600x500?text=Woolen+Scarf",
        price: 14.99,
        description: "Cozy woolen scarf for chilly winter days.",
        collection: "Winter Accessories",
        reviews: 180,
        material: "100% Wool",
        color: "Gray",
        tags: ["Scarf", "Winter", "Cozy"],
        selected: false,
    },
];


