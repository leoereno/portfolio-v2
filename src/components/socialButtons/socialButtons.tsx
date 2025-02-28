import githubIcon from '../../assets/img/icons8-github.svg';
import linkedin from '../../assets/img/icons8-linkedin.svg';
import './socialButtons.css';

export default function SocialButtons () {
    return(
        <div className="social-icons">
            <a href="https://github.com/leoereno" target='_blank' title='Github'><img src={githubIcon} alt="" /></a>
            <a href="https://linkedin.com/in/leoereno" target='_blank'><img src={linkedin} alt="" /></a>
        </div>

    );
}