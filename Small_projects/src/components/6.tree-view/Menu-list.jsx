import MenuItem from "./Menu-item"

export default function MenuList({ list = []  }) {
    return <ul className="menu-list-container" >
        {
            list && list.length > 0 ?
                list.map((ListItem, id) => (
                    <MenuItem key={id} item={ListItem} />
                ))
                : null
        }
    </ul>
}