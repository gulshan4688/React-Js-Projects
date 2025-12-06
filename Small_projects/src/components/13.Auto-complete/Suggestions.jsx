import React from 'react'

const Suggestions = ({ data }) => {
    return (
        <div>
            {
                data && data.length ?
                    data.map((item, idx) =>
                        <li key={idx} >
                            {item}
                        </li>
                    )
                    : null
            }
        </div>
    )
}

export default Suggestions
