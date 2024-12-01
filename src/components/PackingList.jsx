import Item from "./Item.jsx";
import {useState} from "react";

function PackingList({items, onDeleteItem, onToggleItem, onClearList}) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;
    if(sortBy === "input") sortedItems = items;
    if(sortBy === "description") sortedItems = items
        .slice()
        .sort((item, otherItem) => item.description.localeCompare(otherItem.description));
    if(sortBy === "packed") sortedItems = items
        .slice()
        .sort((item, otherItem) => Number(item.packed) - Number(otherItem.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button
                    onClick={onClearList}>
                    Clear list</button>
            </div>
        </div>

    )
}

export default PackingList;