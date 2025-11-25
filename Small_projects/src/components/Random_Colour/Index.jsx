import { useState } from 'react';
import './style.css'

const Random_Colour = () => {

    const [hex, setHex] = useState('');
    const [RGB, setRGB] = useState('');
    const [idx, setIdx] = useState(true);

    const handleHexGenerator = ()=>{
        console.log('hex clicked');
        let code = '#' +  Math.floor(Math.random()*16777215).toString(16);
        setIdx(true);
        setHex(code);
    }
    const handleRgbGenerator = ()=>{
        console.log('rgb clicked');
        const r = Math.floor(Math.random() * 256 );
        const g = Math.floor(Math.random() * 256 );
        const b = Math.floor(Math.random() * 256 );

        const rgb = `rgb(${r},${g},${b})`;
        setIdx(false);
        setRGB(rgb);
    }

    return <div>
        <div className="container" style={ idx ?  {backgroundColor: hex} : {backgroundColor:RGB }} >
            <h1>Random COLOR Generator </h1>
            <div className="gen-btns" >
                <button onClick={()=>handleHexGenerator(true)} >Hex Code</button>
                <button onClick={()=>handleRgbGenerator(false)} >RGB color</button>
            </div>
            <div className='code-name'>
                {
                    idx == true ? <h1>{hex}</h1> : idx == false ? <h1>{RGB}</h1> : null
                }
            </div>
        </div>
    </div>
}

export default Random_Colour;