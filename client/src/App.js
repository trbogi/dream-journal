import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewDream from './components/NewDream'

function App() {
  return (
        <div className="flex flex-col items-center w-full h-screen font-quicksand text-slate-50 bg-slate-900 overflow-auto overflow-auto">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/new' element={<NewDream/>}/>
                </Routes>
             </BrowserRouter>
        </div>
  );
}

export default App;
