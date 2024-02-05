import { BrowserRouter, Route, Routes } from "react-router-dom";

import { 
  About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  Clients, 
  StarsCanvas, 
  Faq, 
  Foot 
} from "./components";

import { Register, SignIn } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

const Landing = () => {
  return (
    <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <div className='relative z-1'>
            <Navbar />
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <div className='relative z-0'>
          <About />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Experience />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Faq />
          <Clients />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Contact />
          <Foot />
          <StarsCanvas />
        </div>
      </div>
  );
}

export default App;
