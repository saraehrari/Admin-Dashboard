import { useState } from "react";

export default function Searchbar({ onSearch }) {
  const [searchItem, setSearchItem] = useState("");

  function handleSearch() {
    onSearch(searchItem);
    setSearchItem('')
  }

 

  return (
    <div className="d-flex gap-2 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search student..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}