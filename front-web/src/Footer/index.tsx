import './styles.css';
import {ReactComponent as YouTubeICon} from './youtube.svg';
import {ReactComponent as LikedinICon} from './linkedin.svg';
import {ReactComponent as InstagramICon} from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer"> 
             App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
         <div className="footer-icons" >
             <a href="https://www.youtube.com" target="_new" >
               <YouTubeICon/>
             </a>

             <a href="https://www.linkedin.com" target="_new" >
              <LikedinICon/>  
             </a>

             <a href="https://www.instagram.com" target="_new" >
               <InstagramICon/>
             </a>

         </div>
         </footer>
    )
}
export default Footer;