import Tabs from "./tabs";

function RandomComponent() {
    return <h1>Some random Component</h1>
}

export default function TabsTest() {

    const tabsContent = [
        {
            label: 'tab1',
            content: <h1>This is tab 1</h1>
        },
        {
            label: 'tab2',
            content: <h1>this is tab 2</h1>
        },
        {
            label: 'tab3',
            content: <RandomComponent />
        }
    ]
    
    const handleChange =(tabsIndex)=>{
        console.log(tabsIndex);
    }

    return <Tabs tabsContent={tabsContent} onChange={handleChange} />
}