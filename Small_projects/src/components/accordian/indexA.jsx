import { useState } from 'react';
import data from './data'
import './style.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelectedIndices, setMultiSelectedIndices] = useState([]);

    const handleSingleSelection = (currentId) => {
        setSelected(currentId === selected ? null : currentId);
        console.log(currentId);
        // imagine first time when selected is null and currentId is the id u clicked suppose  1 so this condtion becomes falls and 
        // selected is now currentid and when u clicked again on the same id now this condtion becomes true so current id is null now 
    }
    const handleMultiSelection = (currentId) => {
        let copyArray = [...multiSelectedIndices];
        const findCurrentIdx = copyArray.indexOf(currentId);
        console.log(findCurrentIdx);

        if (findCurrentIdx === -1) copyArray.push(currentId);
        else copyArray.splice(findCurrentIdx, 1);
        
        setMultiSelectedIndices(copyArray);
    }

    console.log(selected, multiSelectedIndices);



    return (
        <div className="wrapper" >
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}  > Enable Multi Selection </button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map((item, id) => (
                            <div key={id} onClick={
                                enableMultiSelection ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)
                            } className="item">
                                <div className="title">
                                    <h3>{item.question}</h3>
                                    <span> + </span>
                                </div>
                                {enableMultiSelection ?
                                    multiSelectedIndices.indexOf(item.id) !== -1 &&
                                    <div> {item.answer} </div>
                                    : selected === item.id && <div> {item.answer} </div>
                                }
                                {/* {
                                    selected === item.id ?
                                    <div>
                                        <p>{item.answer}</p>
                                    </div>
                                    : null 
                                } */}
                            </div>

                        ))
                        : <div> NO DATA </div>
                }
            </div>
        </div>
    )
}