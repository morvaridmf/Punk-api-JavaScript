import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import Details from './components/details/Details';
import { AppProvider } from './context/Context';

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </AppProvider>

    </div>
  );
}

export default App;
