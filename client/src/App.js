import './App.css';
import Navbar1 from '../src/components/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import ProfilePage from "./pages/ProfilePage"
import Sneakers from './pages/shoppages/Sneakers';
import Hats from './pages/shoppages/hats';
import Jackets from './pages/shoppages/jackets';
import Women from './pages/shoppages/Women';
import Men from './pages/shoppages/Men';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route path="/user/profilepage" element={<ProfilePage />}></Route>
        <Route path="/shop/sneakers/:id" element={<Sneakers />}></Route>
        <Route path="/shop/hats/:id" element={<Hats />}></Route>
        <Route path="/shop/jackets/:id" element={<Jackets />}></Route>
        <Route path="/shop/men/:id" element={<Men />}></Route>
        <Route path="/shop/women/:id" element={<Women />}></Route>
      </Routes>
      <Footer />
    </Router>  
    </div>

  );
}

export default App;
