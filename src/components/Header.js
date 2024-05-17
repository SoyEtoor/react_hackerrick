import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';


const Header = () => {
    const navigate = useNavigate();
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
            
          <Link to="/" className="no-underline black">
            <div className="fw7 mr1">Rick And Morty</div>
          </Link>           
          <Link to="/" className="ml1 no-underline black">
            Nuevo Registro
          </Link>
          <div className="ml1">|</div>
          <Link
            to="/search"
            className="ml1 no-underline black"
          >
            Busqueda
          </Link>
          {authToken && (
            <div className="flex">
              <div className="ml1">|</div>
              <Link
                to="/create"
                className="ml1 no-underline black"
              >
                Subir
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                navigate('/');
              }}
            >
              Salir
            </div>
          ) : (
            <Link
              to="/login"
              className="ml1 no-underline black"
            >
              Ingresar
            </Link>
          )}
        </div>
      </div>
    );
  };
  

export default Header;