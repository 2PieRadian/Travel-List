export default function Stats({ items, onReset, sortBy, handleSetSortBy }) {
  // Return this if there are items
  if (!items.length) {
    return (
      <div className="startAdding">
        <p>Start adding some items to your packing list 🚀</p>
      </div>
    );
  }

  const numberOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percent = numberOfItems == 0 ? 0 : Math.round((packedItems / numberOfItems) * 100);

  return (
    <footer>
      <div className="reset-sort">
        <select value={sortBy} onChange={(e) => handleSetSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>

        <button className="reset" onClick={onReset}>
          Clear List
        </button>
      </div>
      {(packedItems != 0 && packedItems) === numberOfItems ? (
        <div style={{ fontSize: "30px", color: "rgb(66, 66, 66)" }}>
          You're Ready to Go
        </div>
      ) : (
        <div className="stats-divs">
          <p>Items on List: {numberOfItems}</p>
          <p>
            Packed Items: {packedItems} ({percent}%)
          </p>
        </div>
      )}
    </footer>
  );
}