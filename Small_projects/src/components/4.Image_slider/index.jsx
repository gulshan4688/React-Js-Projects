import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

export default function Image_Slider({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrenSlide] = useState(1);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [pages, setPages] = useState(1);

    async function fetchImage(getUrl) {
        try {
            setLoading(1);
            const response = await fetch(`${getUrl}?page=4&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(0)
            }
        } catch (error) {
            setErrorMsg(error.message);
            setLoading(0)
        }
    }

    useEffect(() => {
        if (url !== '') fetchImage(url);
    }, [url])

    if (loading) return (
        <div> <h1>Data is loading Please wait</h1> </div>
    )
    if (errorMsg !== null) {
        return (
            <div> <h1>Error Occurred !! {errorMsg} </h1> </div>
        )
    }
    function handlePrev() {
        setCurrenSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
        console.log(currentSlide);
    }
    function handleNext() {
        setCurrenSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1);
        console.log(currentSlide);
    }

    return (
        <div className="container" >
            < BsArrowLeftCircleFill onClick={handlePrev} className="arrow arrow-left" />
            {images && images.length ?
                images.map((item, index) => (
                    <img
                        className={currentSlide === index ? "current-image" : "current-image hide-current-image" }
                        key={item.id}
                        src={item.download_url}
                        alt={item.download_url} />
                ))
                : null}
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicators" >
                {
                    images && images.length ?
                        images.map((_, index) =>
                            <button key={index}
                                className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator "}  
                                onClick={()=>setCurrenSlide(index)} >
                            </button>
                        ) : null
                }
            </span>
        </div>
    )
}