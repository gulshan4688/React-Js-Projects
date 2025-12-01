import menus from "./data";
import MenuList from "./Menu-list";

export default function TreeView(){
    return (
        <div className="tree-view-container" >
            <MenuList list={menus} />
        </div>
    )
}