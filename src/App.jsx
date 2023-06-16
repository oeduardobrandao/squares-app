import { useState } from 'react';
import QRCode from 'qrcode';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'  
import './App.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [qrCode, setQRCode] = useState('');
  const MySwal = withReactContent(Swal);

  const gerarQRCode = () => {
    if (inputText === '') {
      MySwal.fire(
        'Digite um texto válido',
        'Insira um texto no campo em destaque para gerar o QR code.',
        'error'
      );
      return;
    }

    QRCode.toDataURL(inputText, { version: 8 }, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      setQRCode(url);
      setInputText('');
    });
  };

  return (
    <>
      <header>
        <h1>S<span>Q</span>UA<span>R</span>ES</h1>
      </header>
      <main>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite aqui o link"
          />
        <button onClick={gerarQRCode}>
          Gerar QR Code
        </button>
        {
          qrCode && <img src={qrCode} alt="QR Code" />
        }
      </main>
      <footer>
      <a href="https://github.com/oeduardobrandao">
        <p>©2023 Eduardo Brandão</p>
      </a>
    </footer>
    </>
  );
}

export default App;
