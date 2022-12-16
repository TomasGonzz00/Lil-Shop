import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/Layout';
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
    
      <Layout>
        <CartContextProvider>
          <ItemListContainer />
        </CartContextProvider>
      </Layout>
    
  );
};

export default App;
