import Navbar from './components/Navbar'
import Home from './Pages/Home'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom'

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

  return (
    <ThemeProvider theme={myTheme}>
      <div className="flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}> 
            <Route path="about" />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
