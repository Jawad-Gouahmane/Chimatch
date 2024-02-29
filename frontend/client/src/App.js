import AppPages from "./Pages/AppPages";
import './App.css';
import './Navbar.css'
import './Pages/Contact.css'
import {ThemeProvider} from "./Context/DataContext";
import Footer from "./Components/Footer";


function App() {

  

  return (
    <div >
      <ThemeProvider>
      <AppPages/>
      </ThemeProvider>
   
  
    </div>
  );
}

export default App;
