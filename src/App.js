import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import User from './pages/User';

function App() {
  return (
    <main>
      <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path='/user' element={<User />} /> */}
          </Routes>
        </div>
    </main>
  );
}

export default App;
