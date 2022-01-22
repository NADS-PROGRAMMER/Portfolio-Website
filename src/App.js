import Navbar from './components/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Routes, Route, useLocation } from 'react-router-dom'
// Pages
import Home from './Pages/Home'
import About from './Pages/About'

import { AnimatePresence } from 'framer-motion'

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#444CF7',
    },
    secondary: {
      main: '#4596F9'
    }
  },
});

function App() {

  let location = useLocation()
  
  return (
    <ThemeProvider theme={myTheme}>
      <div className="flex flex-col">
        <Navbar />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </AnimatePresence>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
