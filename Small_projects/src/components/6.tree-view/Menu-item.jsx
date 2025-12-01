import { useState } from "react";
import MenuList from "./Menu-list"


const MenuItem = ({ item }) => {

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggle(currentLable) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLable]: !displayCurrentChildren[currentLable],
    });
  }
  return (
    <li>
      <div style={{ display: 'flex', gap: '20px' }} >
        <p>{item.label}</p>
        {
          item && item.children && item.children.length ? <span onClick={() => handleToggle(item.label)} > + </span> : null
        }
      </div>
      {
        item && item.children && item.children.length > 0 ?
          <MenuList list={item.children} />
          : null
      }
    </li>
  )
}

export default MenuItem
