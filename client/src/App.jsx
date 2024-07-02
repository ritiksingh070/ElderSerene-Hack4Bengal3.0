import React,{useState,useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Appointment from './pages/appointment/Appointment';
import { Toaster } from 'react-hot-toast';
import Employee from './pages/employee/Employee';
import AllServices from './pages/all-services/AllServices';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Contact from './components/contact-us/Contact';
import Blogs from './components/blogs/Blogs';
import Bot from './pages/chatbot/Bot';
import UserProfile from './pages/user-profile/UserProfile';
const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {0
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appoinment" element={<Appointment />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/profile" element={<UserProfile />} />
          
      </Routes>
      <Footer/>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
       <div className="sticky-icons">
        <a href="https://wa.me/+917631770210" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
          <i className="fa fa-whatsapp"></i>
        </a>
        <a href="tel:+917631770210" className="call-icon">
          <i className="fa fa-phone"></i>
        </a>
      </div>
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
      <Bot/>
    </BrowserRouter>
  )
}

export default App
