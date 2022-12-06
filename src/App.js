import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/Layout';
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
    <CartContextProvider>
      <Layout>
        <ItemListContainer />
      </Layout>
    </CartContextProvider>
  );
};

export default App;
