import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DreamForm from './components/DreamForm'

function App() {
  return (
        <div className="flex flex-col items-center w-full h-screen font-quicksand text-slate-50 bg-slate-900 overflow-auto overflow-auto">
            <BrowserRouter>
                <Routes>
                    <Route path='/dream-journal' element={<Home/>}/>
                    <Route path='/dream-journal/new' element={<DreamForm/>}/>
                    <Route path='/dream-journal/edit/:id' element={<DreamForm/>}/>
                </Routes>
             </BrowserRouter>
        </div>
  );
}

export default App;
