import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Contact from './pages/Contact';
function App() {

  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home/>          
        </Route>
        <Route path='/contact'>
          <Contact/>          
        </Route>
        <Route>
          <Redirect to path="/"/>          
        </Route>
      </Switch>
    </Router>

  )
}

export default App;





{/* <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div> */}