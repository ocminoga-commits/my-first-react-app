import { useState } from "react";
import "./App.css";

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    alert(`Посещаемость отмечена! Нажатий: ${clickCount + 1}`);
  };

  return (
    <div className="app">
      <h1>📅 Расписание пар</h1>

      <p className="description">
        Ближайшие занятия. Нажмите кнопку, чтобы отметить посещаемость.
      </p>

      <div className="card">
        <h2>📖 Основы философии</h2>
        <p>Время: 10:00 – 11:30</p>
        <p>Аудитория: 5.07</p>
        <p>Преподаватель: Власов Е.Д.</p>
      </div>

      <div className="card">
        <h2>💻 Разработка мобильных приложений</h2>
        <p>Время: 18:00 – 19:30</p>
        <p>Аудитория: 11.52</p>
        <p>Преподаватель: Павлов В.А.</p>
      </div>

      <div className="card">
        <h2>🇬🇧 Разработка программных модулей</h2>
        <p>Время: 19:45 – 21:15</p>
        <p>Аудитория: 3.02</p>
        <p>Преподаватель: Белозерских В.В.</p>
      </div>

      <button onClick={handleClick}>
        ✅ Отметить посещаемость (нажатий: {clickCount})
      </button>
    </div>
  );
}

export default App;