import { useEffect, useState } from "react";
import './styles.css'

const LoadMoreData = ({ url }) => {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    const handleLoadMore = () => {
        console.log('clicked');
        setCount(count + 1);
    }
    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const imageArr = await response.json();

            if (imageArr && imageArr.products && imageArr.products.length) {
                // setImages(imageArr.products);
                setImages((prevData) => [...prevData, ...imageArr.products]);
                setLoading(false);
            }
            console.log(imageArr.products);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [count])
    useEffect(() => {
        if (images && images.length === 40)
            setDisableButton(true);
    }, [images])

    return (
        <div className="load-more-container" >
            <div className="product-container" >
                {loading ? <h2>Data Loading Please wait</h2> : null}
                {images && images.length ?
                    images.map((item) => {
                        return (
                            <div key={item.id} className="card" >
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                                <div className="price returnPolicy" >
                                    <p>$ {item.price}</p>
                                    <p>{item.returnPolicy}</p>
                                </div>
                            </div>
                        )
                    })
                : null
                }
            </div>
            <div className="button-container">
                {
                    <button disabled={disableButton} className ='btn' onClick={() => setCount(count + 1)} > Load More products </button>
                }
                {
                disableButton ? <h1>cant load more product</h1> : null
                }
                
            </div>
            
        </div>
    )
}

export default LoadMoreData;