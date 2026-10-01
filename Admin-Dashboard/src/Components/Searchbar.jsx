import { useState } from "react";

export default function Searchbar() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
       
      />

      <button>Search</button>
    </div>
  );
}