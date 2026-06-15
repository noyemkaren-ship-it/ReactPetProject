import { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleLogin = () => {
    if (name.trim() !== '') {
      setUsers(prev => [...prev, name.trim()]);
      setName('');
      setShowQuiz(true);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  const questions = [
    {
      question: "Какой язык программирования используется для веб-разработки (клиентская часть)?",
      options: [
        { text: "JavaScript", correct: true },
        { text: "CSS и HTML", correct: false },
        { text: "TypeScript", correct: false },
      ]
    },
    {
      question: "Какой фреймворк используется для создания пользовательских интерфейсов?",
      options: [
        { text: "React", correct: true },
        { text: "Laravel", correct: false },
        { text: "Django", correct: false },
      ]
    },
    {
      question: "НАЙДИ СДЕСЬ ОШИБКУ ПОЧЕМУ ВСЕ СРАБОТАЛО НЕ ТАК КАК Я ХОТЕЛ: const a = 5; и когда я написал a = 5 была ошибка почему? ",
      options: [
        { text: "Потому что a - это константа", correct: true },
        { text: "Потому что a - это переменная", correct: false },
        { text: "Потому что a - это функция", correct: false },
      ]
    },
    {
      question: "Почему мой список от 1 до 9 сломался: const numbers = [1, 2, 3, 4 5, 6, 7, 8, 9, 10];?",
      options: [
        { text: "Потому что не хватает запятой", correct: true },
        { text: "Потому что число 10 не входит в список", correct: false },
        { text: "Потому что список не начинается с 0", correct: false },
      ]
    },
    {
      question: "Почему мой код не работает: function greet() { console.log('Hello, world!'); }?",
      options: [
        { text: "Потому что функция не вызывается", correct: true },
        { text: "Потому что синтаксис функции неправильный", correct: false },
        { text: "Потому что console.log не работает", correct: false },
      ]
    },
    {
      question: "Для чего .map()?",
      options: [
        { text: "Проверяет и сравнивает значения", correct: false },
        { text: "Перебирает все по обьектам точнее перебирает все в массиве", correct: true },
        { text: "Добавляет элемент в массив", correct: false },
      ]
    },
    {
      question: "Что делает for...of?",
      options: [
        { text: "Преобразует массив в другой массив", correct: false },
        { text: "Перебирает элементы в массиве", correct: true },
        { text: "Добавляет элемент в конец массива", correct: false },
      ]
    },
    {
      question: "Какой оператор используется для сравнения значений без приведения типов?",
      options: [
        { text: "==", correct: false },
        { text: "===", correct: true },
        { text: "!=", correct: false },
      ]
    },
    {
      question: "Какая команда в терминале Linux для подключения к папке?",
      options: [
        { text: "cd", correct: true },
        { text: "ls", correct: false },
        { text: "mkdir", correct: false },
      ]
    },
    {
      question: "Какой тег используется для создания ссылки в HTML?",
      options: [
        { text: "<a>", correct: true },
        { text: "<p>", correct: false },
        { text: "<div>", correct: false },
      ]
    },
    {
      question: "Какой атрибут используется для указания пути к файлу изображения в HTML?",
      options: [
        { text: "src", correct: true },
        { text: "href", correct: false },
        { text: "alt", correct: false },
      ]
    },
    {
      question: "Какой тег используется для создания заголовка в HTML?",
      options: [
        { text: "<h1>", correct: true },
        { text: "<p>", correct: false },
        { text: "<div>", correct: false },
      ]
    },
    {
      question: "Какой тег используется для создания абзаца в HTML?",
      options: [
        { text: "<p>", correct: true },
        { text: "<h1>", correct: false },
        { text: "<div>", correct: false },
      ]
    },
    {
      question: "Какой тег используется для создания списка в HTML?",
      options: [
        { text: "<ul>", correct: true },
        { text: "<ol>", correct: false },
        { text: "<li>", correct: false },
      ]
    },
    {
      question: "Как в React в html мне вывести переменную условно назовем ее name?",
      options: [
        { text: "{name}", correct: true },
        { text: "<name>", correct: false },
        { text: "name", correct: false },
      ]
    },
    {
      question: "Какой тег используется для создания кнопки в HTML?",
      options: [
        { text: "<button>", correct: true },
        { text: "<input>", correct: false },
        { text: "<a>", correct: false },
      ]
    },
    {
      question: "Как создать input(вода) поле в HTML точнее в React и получить что ввели при нажатии кнопки?",
      options: [
        { text: "<input type='text' value={value} onChange={(e) => setValue(e.target.value)} />", correct: true },
        { text: "<input type='text' />", correct: false },
        { text: "<input value={value} />", correct: false },
      ]
    },
    {
      question: "Какой тег используется для создания формы в HTML?",
      options: [
        { text: "<form>", correct: true },
        { text: "<input>", correct: false },
        { text: "<button>", correct: false },
      ]
    },
    {
      question: "Какой тег используется для создания таблицы в HTML?",
      options: [
        { text: "<table>", correct: true },
        { text: "<tr>", correct: false },
        { text: "<td>", correct: false },
      ]
    }
  ];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
      alert("✅ Правильно!");
    } else {
      alert("❌ Неправильно!");
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      alert(`Тест завершён! Ваш результат: ${score + (isCorrect ? 1 : 0)} из ${questions.length}`);
    }
  };

  return (
    <>
      <div className="App">
        <h1><i>Тестирующее приложение</i></h1>

        {!showQuiz ? (
          <div className="login">
            <input
              type="text"
              placeholder="Введите ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            <button onClick={handleLogin}>Войти</button>
          </div>
        ) : (
          <div className="quiz">
            <h1>Привет, {users[users.length - 1]}!</h1>
            <h2>Вопрос {currentQuestion + 1} из {questions.length}</h2>

            <div className="question">
              <p><strong>{questions[currentQuestion].question}</strong></p>

              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.correct)}
                  className="answer-btn"
                >
                  {option.text}
                </button>
              ))}
            </div>

            <p>Счёт: {score} / {questions.length}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;