import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContainer from "./components/maincontainer/MainContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;
