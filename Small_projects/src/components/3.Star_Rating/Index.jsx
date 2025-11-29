import { FaStar } from 'react-icons/fa'
import './style.css'
import { useState } from 'react'


const Stars = ({ noOfStars}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleStarClick(idx) {
        setRating(idx);    
        // as soon as user clicked tha rating is set equal to the index on whihc user cliked raing == idx
    }

    function handleMouseEnter(idx){
        setHover(idx);
        // as soon as the user enters the star at particular index that index is set the hover 
    }
    function handleMouseLeave(){
        setHover(rating);
    }
    
    return <div className="star-Rating" >
        {
            [...Array(noOfStars)].map((_, index) => {
                index +=1;
                return (
                    <FaStar
                        key={index}
                        className={index <= (rating || hover) ? 'active' : 'inactive' }
                        onClick={() => handleStarClick(index)}
                        onMouseMove={()=>handleMouseEnter(index)}
                        onMouseLeave={()=>handleMouseLeave()}
                        size={40}
                    />
                )
            })
        }
    </div>
}

export default Stars;