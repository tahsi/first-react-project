import './App.css'
import Header from "./components/Header";
import Modal from "./components/Modal/Modal.tsx";
import FishGallery from "./components/FishGallery/FishGallery.tsx";

function App() {

  // const showMessage = (message: string) => {
  //   alert(message);
  // }

  return (
    <>
      {/*<Header title={"HelloHeader"} showMessage={() => showMessage('My-message')}/>*/}
      {/*<div>*/}
      {/*  Hello World!*/}
      {/*</div>*/}

      <Header/>
      <Modal/>
      <FishGallery/>
    </>
  )
}

export default App
