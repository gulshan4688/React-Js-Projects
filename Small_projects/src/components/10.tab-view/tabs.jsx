import { useState } from "react";
import './styles.css'

export default function Tabs({ tabsContent, onChange }) {

    const [tabsIndex, setTabsIndex] = useState(0);
    function handleOnClick(getCurrentIndex) {
        setTabsIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }
    return (
        <div className="wrapper" >
            <div className="heading" >
                {
                    tabsContent.map((item, index) => (
                        <div className={`tab-item ${tabsIndex=== index ? "active" : ""}`}  onClick={() => handleOnClick(index)} key={item.label} >
                            <span className="label" >{item.label}</span>
                        </div>
                    ))
                }
            </div>
            <div className="content" >
                {tabsContent[tabsIndex] && tabsContent[tabsIndex].content}
            </div>
        </div>
    )
}