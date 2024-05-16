import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import User from './pages/User';

function App() {
  return (
    <main>
      <div className='container'>
          <Routes basename="/github-finder">
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
    </main>
  );
}

export default App;
