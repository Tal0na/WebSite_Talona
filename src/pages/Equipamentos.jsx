import React from 'react';
import Navbar from "../app/components/Navbar/NavbarComponent";
import { FaKeyboard, FaMouse, FaDesktop, FaPrint, FaVideo } from 'react-icons/fa';

const EquipamentosItem = ({ nome, tipo }) => {
  
  const mapearIcone = () => {
    switch (tipo) {
      case 'Teclado':
        return <FaKeyboard />;
      case 'Mouse':
        return <FaMouse />;
      case 'Monitor':
        return <FaDesktop />;
      case 'Impressora':
        return <FaPrint />;
      case 'Webcam':
        return <FaVideo />;
      default:
        return null;
    }
  };

  return (
    <div className="Equipamentos-item">
      {mapearIcone()}
      <p>{nome}</p>
    </div>
  );
};

const EquipamentosList = () => {
  const equipamentos = [
    { nome: 'Teclado', tipo: 'Teclado' },
    { nome: 'Mouse', tipo: 'Mouse' },
    { nome: 'Monitor', tipo: 'Monitor' },
    { nome: 'Impressora', tipo: 'Impressora' },
    { nome: 'Webcam', tipo: 'Webcam' },
    // Adicione outros periféricos conforme necessário
  ];

  return (
    <div>
        <Navbar />
      <h2>Lista de Equipamentos</h2>
      <div className="equipamentos-container">
        {equipamentos.map((equipamento, index) => (
          <EquipamentosItem key={index} {...equipamento} />
        ))}
      </div>
    </div>
  );
};

export default EquipamentosList;