
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TodoProvider } from './TodoContext';
import Todos from './Todos';
import CompletedTodos from './CompletedTodos';

function App() {
  return (
    <TodoProvider>
      <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/completed">Completed</Link></li>
        </ul>
      </nav>   
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/completed" element={<CompletedTodos />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
