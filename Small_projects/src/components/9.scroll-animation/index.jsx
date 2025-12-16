import { useEffect, useState } from "react";
import './scroll.css'

export default function Scroll({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);


    async function loadData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const dataArr = await response.json();
            // setLoading(false);
            if (dataArr && dataArr.products && dataArr.products.length > 0) {
                setData(dataArr.products);
                setLoading(false);
            }
            console.log(dataArr);

        } catch (error) {
            console.log(error);
            setErrorMessage(error);
        }
    }

    function handleScroll() {
        let howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);

    }

    useEffect(() => {
        loadData(url);
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    console.log(scrollPercentage);

    return (
        <div>
            <div className="top-container">
                <h1 className="head-title" >Custorm Scroll Indicator</h1>
                <div className="progress-bar-container"  >
                    <div className="progress-bar"  style={{ width: `${scrollPercentage}%` }} >

                    </div>
                </div>
            </div>

            <div className="data-container">
                {
                    data && data.length > 0 ?
                        data.map((item) => (
                            <div key={item.id}>
                                <h4>{item.title}</h4>
                            </div>
                        ))
                        : null
                }
            </div>
        </div>
    )
}