
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar/>

      <ItemListContainer greetings='Camisetas de Fútbol'/>
    </div>
  );
}

export default App;


  