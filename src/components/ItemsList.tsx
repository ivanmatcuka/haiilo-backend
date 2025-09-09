import { Item } from "../../models/item";

interface ItemListProps {
  items: Item[];
  onAdd: (id: string) => void;
}

export default function ItemList({ items, onAdd }: ItemListProps) {
  return (
    <div>
      <h2 className="font-bold">Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between">
            {item.name} - {item.price}
            <button
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => onAdd(item.id)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
