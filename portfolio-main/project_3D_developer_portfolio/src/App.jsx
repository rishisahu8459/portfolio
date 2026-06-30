import { BrowserRouter } from "react-router-dom";

import { Hero, About, Contact, Experience, Feedbacks, Navbar, Tech, Works, Certifications, StarsCanvas } from "./components";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import SpaceCat from "./components/SpaceCat";


const App = () => {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <CustomCursor />
      <SpaceCat />
      <div className='relative z-0 bg-primary'>
        <div className='relative'>
          <Navbar />
          <Hero/>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certifications />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
