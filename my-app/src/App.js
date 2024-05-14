import './App.css';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Cards 
      nome="mouse"
      preco={3000}
      quantidade={400}
      />
    </div>
  );
}

export default App;
