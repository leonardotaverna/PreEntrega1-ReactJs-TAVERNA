import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidxs a BlockBuster-X app"}/>
      <itemDetailContainer />
      <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log("Items agregados:", quantity)}/>
    </div>
  );
}

export default App