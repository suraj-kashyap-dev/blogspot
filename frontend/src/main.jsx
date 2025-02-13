import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ModalProvider} from './components/Base/Modal/Confirm/ModalContext.jsx';
import ConfirmModal from './components/Base/Modal/Confirm/ConfirmModal.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
    <App />
    <ConfirmModal />
    </ModalProvider>
  </React.StrictMode>,
)
