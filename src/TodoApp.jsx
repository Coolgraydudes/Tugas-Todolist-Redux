import { useSelector, useDispatch } from "react-redux";
import { tambahTugas, hapusSemua } from "./todoSlice";

function TodoApp() {
  const tugas = useSelector((state) => state.todo.listTugas);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="container">Daftar Tugas</h2>

      <ul>
        {tugas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={() => dispatch(tambahTugas("Belajar React"))}>
        Tambah Tugas Belajar
      </button>

      <button onClick={() => dispatch(hapusSemua())}>
        Bersihkan Semua
      </button>
    </div>
  );
}

export default TodoApp;