import Navbar from './components/Navbar'
import Home from './Pages/Home'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#444CF7',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={myTheme}>
      <div className="flex flex-col">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
