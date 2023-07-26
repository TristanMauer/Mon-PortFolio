import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import "../../styles/Footer.scss";


function Footer(){
    const handleLinkedInRedirect = () => {
        window.open('https://www.linkedin.com/in/tristan-mauer-410728190/', '_blank');
      };
      const handleGithubInRedirect = () => {
        window.open('https://github.com/TristanMauer', '_blank');
      };
      const emailAddress = 'raykoten@gmail.com';
    return(
        <div className='footer_conteneur'>
          <button onClick={handleGithubInRedirect} className='footer_icons'> <FaGithub /></button>
          <button onClick={handleLinkedInRedirect}  className='footer_icons'> <FaLinkedin  /></button>
        <a href={`mailto:${emailAddress}`} className='footer_icons'> <FaEnvelope  /></a>
        </div>
    )
}

export default Footer;