import React, { useState } from "react";

function AmountManager() {
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdate = () => {
    if (amount === "") return;

    if (editIndex !== null) {
      // update existing
      const updated = [...list];
      updated[editIndex] = Number(amount);
      setList(updated);
      setEditIndex(null);
    } else {
      // add new
      setList([...list, Number(amount)]);
    }
    setAmount("");
  };

  const editAmount = (index) => {
    setAmount(list[index]);
    setEditIndex(index);
  };

  const deleteAmount = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const total = list.reduce((sum, val) => sum + val, 0);

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={addOrUpdate}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {list.map((val, i) => (
          <li key={i}>
            ₹ {val}{" "}
            <button onClick={() => editAmount(i)}>Edit</button>
            <button onClick={() => deleteAmount(i)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Total: ₹ {total}</h3>
    </div>
  );
}

export default AmountManager;
