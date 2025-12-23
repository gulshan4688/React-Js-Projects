import { useEffect, useState } from "react";
import useFetch from "."
import './styles.css'

export default function UseFetchHookTest() {
    const [showArray, setShowArray] = useState([]);
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products",
        {}
    );
    useEffect(() => {
        if (data?.products) {
            setShowArray(data.products);
        }
    }, [data]);
    console.log(error, data, pending);

    return (
        <div className="useFetchContainer" >
            <h1>Custom test Hook</h1>
            {
                pending ? <h1>page loading</h1> : null
            }
            {
                showArray && showArray.length ?
                    showArray.map(( item) => (
                        <div key={item.id} className="useFetchTitle" >
                            <p>{item.title}</p>
                        </div>
                    )) : <h1>No data loaded !! </h1>
            }

        </div>
    )
}