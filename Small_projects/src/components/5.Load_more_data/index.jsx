import { useEffect, useState } from "react";

const LoadMoreData = ({ url }) => {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const images = await response.json();

            if (images && images.products && images.products.length) {
                setImages(images.products);
                setLoading(false);
            }
            console.log(images.products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="container" >
            
            {loading ? <h2>Data Loading Please wait</h2> : null }

            {images && images.products && images.length ?
                images.map((item, id) => {
                    return (
                        <div key={id} className="card" >
                            <img src={item.products.thumbnail} alt="kuchh bhi " />
                            <h1>{item.title}</h1>
                        </div>
                    )
                })
                : null
            }
        </div>
    )
}

export default LoadMoreData;