import App from "../App";
import {ReactComponent as Main} from './main.svg';
import './styles.css';

function Home() {
    return (
      <div className="home-container" >
        <div className="home-content">
            <div className="home-actions">
        <h1 className="home-title" >
        Faça seu pedido <br/> que entregamos <br/> pra você!!!
        </h1>
        <h3 className="home-subtitle" >Escolha o seu pedido e em poucos <br/> 
         minutos levaremoss na sua porta   
        </h3>
        <a href="orders" className="home-btn-order">
            FAZER PEDIDO
        </a>
        </div>
        <div className="home-image" ></div>
        <Main/>
        </div>
      </div>
    )
}
export default Home;