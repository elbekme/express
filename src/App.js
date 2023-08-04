// import logo from './logo.svg';
import './App.css';
import Backtop from './components/Backtop/Backtop';
import Certificate from './components/Certificate/Certificate';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Group from './components/Group/Group';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import New from './components/New/New';
import Product from './components/Product/Product';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Main />
      <Certificate />
      <Product/>
      <Form />
      <Group />
      <New />
      <Backtop />
      <Footer />
    </div>
  );
}

export default App;
