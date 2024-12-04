import React, { useState ,useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import SignUp from './components/SignUp';
import SignIn from "./components/SignIn";
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [DarkMode,setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') === 'dark';
    setDarkMode(savedTheme);
    if (savedTheme) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleSignIn = () => {
    setShowSignIn((prev) => !prev);
    setShowSignUp(false); // Ensure only one is shown at a time
  };

  const toggleSignUp = () => {
    setShowSignUp((prev) => !prev);
    setShowSignIn(false); // Ensure only one is shown at a time
  };
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      document.documentElement.classList.toggle('dark', newDarkMode);
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
      return newDarkMode;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Pass toggleSignIn to Navbar */}
      <Navbar onSignInClick={toggleSignIn} onSignUpClick={toggleSignUp} onDarkModeToggle={toggleDarkMode}
        isDarkMode={DarkMode}/>
      <Hero />
      {/* Conditionally render the SignIn component */}
      {showSignIn && <SignIn />}
      {showSignUp && <SignUp/>}
      <Quiz/>
      
      <Projects />
      <Footer /> 
    </div>
  );
}


export default App;
