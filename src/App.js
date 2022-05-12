import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Host from './components/Host'
import Agency from './components/Agency'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/agency" element={<Agency/>}></Route>
        <Route path="/host" element={<Host/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
    </>
   )

}

export default App;
