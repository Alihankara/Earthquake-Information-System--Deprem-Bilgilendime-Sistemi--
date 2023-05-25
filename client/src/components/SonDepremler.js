import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/sonDepremler.css'
import { Table } from 'reactstrap';

const SonDepremler = () => {
  const [depremVerileri, setDepremVerileri] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchDepremVerileri = async () => {
      try {
        
        navigate('/sondepremler'); // Yönlendirme işlemi
        const response = await axios.get('/sondepremler'); // Sunucudan verileri al
        setDepremVerileri(response.data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchDepremVerileri();
  }, []);

  if (depremVerileri === null) {
    return <div>Yükleniyor...</div>;
  }
  
  if (depremVerileri.length === 0) {
    return <div>Veri bulunamadı.</div>;
  }

  return (
    <div>
      <h1>Deprem Listesi</h1>

      <Table striped>
        <thead>
          <tr>
          <th>Tarih</th>
            <th>Saat</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derinlik</th>
            <th>Büyüklük</th>
            <th>Yer</th>
          </tr>
        </thead>
        <tbody>
        {depremVerileri.map((deprem, index) => (
          <tr key={index}>
            <td>{deprem.tarih}</td>
              <td>{deprem.saat}</td>
              <td>{deprem.enlem}</td>
              <td>{deprem.boylam}</td>
              <td>{deprem.derinlik}</td>
              <td>{deprem.buyukluk}</td>
              <td>{deprem.yer}</td>
            </tr>
          ))}
          
          </tbody>
      </Table>

      {/* <table>
        <thead>
          <tr>
            <th>Tarih-Saat</th>
            <th>Saat</th>
            <th>Enlem-Boylam</th>
            <th>Boylam</th>
            <th>Derinlik</th>
            <th>Büyüklük</th>
            <th>Yer</th>
          </tr>
        </thead>
        <tbody>
          {depremVerileri.map((deprem, index) => (
            <tr key={index}>
              <td>{deprem.tarih}</td>
              <td>{deprem.saat}</td>
              <td>{deprem.enlem}</td>
              <td>{deprem.boylam}</td>
              <td>{deprem.derinlik}</td>
              <td>{deprem.buyukluk}</td>
              <td>{deprem.yer}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default SonDepremler;
