import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Destination from './pages/Destination';
import Hotel from './pages/Hotel';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login_Logout from './pages/Login_Logout';
import Navbar from './components/Navbar';
import Register from './pages/Register';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [userExists, setUserExists] = useState(null); //state to track user

   /**
   * Function to check if user data exists in the database.
   * This can be triggered on page load or based on user input.
   */
   const checkUserExists = async () => {
    try {
      const response = await axios.post("/api/check-user", { email: "user@example.com" }); // Replace with actual logic
      setUserExists(response.data.exists);
    } catch (err) {
      console.error("Error checking user existence:", err);
      setUserExists(false); // Default to no user exists on error
    }
  };

   // Trigger the check on component mount
   useEffect(() => {
    checkUserExists();
  }, []);

  // Show a loading state while the user existence check is ongoing
  if (userExists === null) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <div>
      <Navbar/>
          
        {/* </nav> */}

        {/* define routes */}
        <Routes>
          <Route path='/'  element={<Homepage/>} />
          <Route path='/about' element={<About/>}  />
          <Route path='/destination' element={<Destination/>} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/login_logout' element={<Login_Logout/>} /> */}
          {/* condition in routes */}
          if{userExists ? (
            <Route path='/login_logout' element={<Login_Logout />} />
          ):(
            <Route path='/signup' element={<Register />} />
          )
        }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
