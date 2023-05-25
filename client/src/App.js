import Footer from './components/Footer';
import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Slieder from './components/Slieder';
import Content from './components/Content';
import Category from './components/Category';
import  Card  from './components/Card';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SonDepremler from './components/SonDepremler';
import ToplanmaAlanlari from './components/ToplanmaAlanlari';
import CagriMerkezi from './components/CagriMerkezi';
import NelerYapilmali from './components/NelerYapilmali';
import DepremOncesi from './components/DepremOncesi';
import DepremSonrasi from './components/DepremSonrasi';
import DepremCantasi from './components/DepremCantasi';
import Mevzuatlar from './components/Mevzuatlar';
import DepremAninda from './components/DepremAninda';
import './App.css'

function App() {
  return (
    <div >
      
      <Router>
      <Container>
      <Row>
          <Col><Header /></Col>
        </Row>
      <Row>
          <Col>
          <Slieder/>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
          <Routes>
          <Route path='/' element={<Content/>} exact></Route>
          <Route path='/sondepremler' element={<SonDepremler />} ></Route>
          <Route path='/toplanmaalanlari' element={<ToplanmaAlanlari />} ></Route>
          <Route path='/cagrimerkezi' element={<CagriMerkezi />} ></Route>
          <Route path='/neleryapilmali' element={<NelerYapilmali />} ></Route>
          <Route path='/depremoncesi' element={<DepremOncesi />} ></Route>
          <Route path='/depremsonrasi' element={<DepremSonrasi />} ></Route>
          <Route path='/depremcantasi' element={<DepremCantasi />} ></Route>
          <Route path='/mevzuatlar' element={<Mevzuatlar />} ></Route>
          <Route path='/depremaninda' element={<DepremAninda />} ></Route>
            </Routes>
            </Col>
          <Col sm={4}><Category/></Col>
        </Row>
        <Row>
          <Col><Card/></Col>
        </Row>
        <Row>
          <Col><Footer/></Col>
        </Row>
      </Container>
      </Router>
        
        
      
    </div>
  );
}

export default App;
