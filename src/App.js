import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar/navbar";
import Footer from "./component/Footer/Footer";
import UploadForm from './component/UploadForm/UploadForm';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
 import DetailsForm from "./component/DetailsForm/DetailsForm";

function App() {
  return (
    <>
      <header className="empty-header"></header>
      <Navbar />
      <Router>
        <Routes>
        <Route path='/details' element={<DetailsForm />} />
          <Route path='/upload' element={<UploadForm />} />

          <Route path="/" element={<UploadForm />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
