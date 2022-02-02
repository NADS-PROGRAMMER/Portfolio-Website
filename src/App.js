import Navbar from './components/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Routes, Route, useLocation } from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects';
import { AnimatePresence } from 'framer-motion'

// Theme for the Material UI
const myTheme = createTheme({
  palette: {
    primary: {
      main: '#444CF7',
    },
    secondary: {
      main: '#0657BA'
    }
  },
});

function App() {

  let location = useLocation()
  
  return (
      <ThemeProvider theme={myTheme}>
        <div className="flex flex-col bg-gradient-to-r from-[#ECE9E6] to-[#ffffff] dark:from-black dark:to-slate-900">
          
              <Navbar />
            
              <AnimatePresence>
                <Routes location={location} key={location.key}>
                  <Route exact path="/" element={<Home />} /> 
                  <Route exact path="/about" element={<About />}/>
                  <Route exact path="/projects" element={<Projects />}/>
                </Routes>
              </AnimatePresence>
        </div>
      </ThemeProvider>
  );
}

export default App;
