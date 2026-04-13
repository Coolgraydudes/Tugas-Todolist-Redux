import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tambahTugas, hapusSemua } from "./todoSlice";

function TodoApp() {
  const [input, setInput] = useState("");
  const tugas = useSelector((state) => state.todo.listTugas);
  const dispatch = useDispatch();

  const handleTambah = () => {
    if (input.trim() === "") return;
    dispatch(tambahTugas(input));
    setInput(""); // reset input
  };

  return (
    <div className="container">
      <h2>TODO LIST</h2>

     <ul>
        {tugas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* input */}
      <input
        type="text"
        placeholder="Tulis tugas..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleTambah}>Tambah</button>


      <button onClick={() => dispatch(hapusSemua())}>
        Bersihkan
      </button>
    </div>
  );
}

export default TodoApp;