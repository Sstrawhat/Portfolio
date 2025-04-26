import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='home-content'>
        <h1><span className='ash'>ASH</span>LEY FAJARDO</h1>
        <div className='home-content-detail'>
        <span className='title'>SOFTWARE DEVELOPER</span>
        <p className='paragraph'>
        I'm a Software Developer who turns ideas into fast, beautiful, and reliable digital products.

I focus on building clean, high-performing solutions that offer great user experiences.
I'm passionate about solving real-world problems with creativity, precision, and continuous improvement.
        </p>
        </div>
        <div className='links'>
            <ul>
                <li><a><FontAwesomeIcon className='icon-link' icon={faLinkedin} /><span>LinkedIn</span></a></li>
                <li><a><FontAwesomeIcon className='icon-link' icon={faGithub } /><span>Git</span></a></li>
                <li><a><FontAwesomeIcon className='icon-link' icon={faEnvelope } /><span>Email</span></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Home