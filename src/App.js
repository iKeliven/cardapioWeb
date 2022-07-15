import React from 'react';
import products from './services/api';
import logo from './images/logo.jpg';
import pizzaGrande from './images/pizza-grande.jpg';
import coca2l from './images/coca2l.jpg';
import { FaMapMarkerAlt , FaChevronRight , FaChevronDown, FaSearch, FaFilter} from "react-icons/fa";


function App() {
  return (
    <main className="web-menu"> 
      <header className="web-menu--header"> 
        <nav className="web-menu--header--center">
          <li><a href="">Início</a></li>
          <li><a href="">Promoções</a></li>
          <li><a href="">Pedido</a></li>
          <li><a href="">Entrar/Cadastrar</a></li>
        </nav>
        <div className="web-menu--header--center">
          <span className="web-menu--header--center--attr-01">
            Aberto - fecha ás 22:00 hs
          </span>
          <div className="web-menu--header--center--attr-02">
            <span className="web-menu--header--center--attr-02--left">
              <FaMapMarkerAlt size={20} color="#000"/>
              <p class="black">Entregar em</p>
              <p>Serv. Maria Joaquina, 103</p>
            </span>
            <span className="web-menu--header--center--attr-02--right">
              <p class="black">45 min</p>
              <p class="black">R$ 5,00</p>
            </span>
          </div>
        </div>

        <div className="web-menu--header--left">
          <img className="web-menu--header--left--attr-01" 
            src={logo}
          />

          <div className="web-menu--header--right">
            <h1 className="web-menu--header--right--attr-01">
              Restaurante XPTO
            </h1>
            <div className="web-menu--header--right--attr-02">
              <a href="#">Sobre a loja</a> <FaChevronRight size={14} color="#000"/>
              <span>Pedido mínimo</span><span class="black">R$ 15,00</span>
            </div>
            
          </div>
        </div>
      </header>

      {/* Section menu and search*/}
      <section className="web-menu--body">
        <div className="web-menu--body--left">
          <li className="web-menu--body--left--attr-01">
            <a href="#">CATEGORIAS</a><FaChevronDown size={20} color="#000"/>
              <ul>
                  <li><a href="#">Pizzas</a></li>
                  <li><a href="#">Calzones</a></li>
                  <li><a href="#">Bebidas</a></li>
              </ul>
          </li>
        </div>
        <div className="web-menu--body--right">
          <input className="web-menu--body--right--attr-01" type="search" id="menu-search" name="search"/>
          <button className="web-menu--body--right--attr-02">
            <FaSearch size={15} color="#000"/>
          </button>
        </div>
      {/* End section*/}
      </section>
      
      {/* Section toprated*/}
      <section className="web-menu--body">
        <header class="web-menu--body--left">
          <h1 class="big-title">
            Destaques
          </h1>
        </header>
        <article class="web-menu--body--center toprated">
          <div class="web-menu--body--center--attr">
            <div className="web-menu--body--center--attr-01--left">
              <p class="title">Pizza Grande</p>
              <h2>R$ 69,90</h2>
            </div>
            <div className="web-menu--body--center--attr-02--right">
              <img src={pizzaGrande}/>
            </div>
          </div>
        </article>
      </section>

      {/* Section pizza category*/}
      <section className="web-menu--body">
        <header class="web-menu--body--center">
          <h1 class="web-menu--body--center--left big-title">
            Pizzas
          </h1>
          <div clas="web-menu--body--center--right">
            <FaFilter size={15} color="#000"/>
            <h3>Filtrar</h3>
          </div>
        </header>
        <article class="web-menu--body--center category">
          <div class="web-menu--body--center--attr">
            <div className="web-menu--body--center--attr-01--left">
              <img src={pizzaGrande}/>
            </div>
            <div className="web-menu--body--center--attr-02--right">
              <p class="title">Pizza Gigante</p>
              <span class="resume">8 fatias, até 2 sabores</span>
              <h2 class="price">R$ 69,90</h2>
            </div>
          </div>
        </article>
      {/* End section*/}
      </section>

      {/* Section beverages*/}
      <section className="web-menu--body">
        <header class="web-menu--body--center">
          <h1 class="web-menu--body--center--left big-title">
            Bebidas
          </h1>
          <div clas="web-menu--body--center--right">
            <FaFilter size={15} color="#000"/>
            <h3>Filtrar</h3>
          </div>
        </header>
        <article class="web-menu--body--center beverages">
          <div class="web-menu--body--center--attr">
            <div className="web-menu--body--center--attr-01--left">
              <img src={coca2l}/>
            </div>
            <div className="web-menu--body--center--attr-02--right">
              <p class="title">Coca-cola</p>
              <span class="resume">2 Litros</span>
              <h2 class="price">R$ 9,90</h2>
            </div>
          </div>
        </article>
      {/* End section */}
      </section>

      {/* Footer */}
      <footer>
        
      </footer>
    </main>
  );
}

export default App;
