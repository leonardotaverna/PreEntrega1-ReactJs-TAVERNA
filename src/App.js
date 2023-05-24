import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidxs a BlockBuster-X app"}/>
      <ItemDetailContainer />
      {/* <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log("Items agregados:", quantity)}/> */}
    </div>
  );
}

export default App