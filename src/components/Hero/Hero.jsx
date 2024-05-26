import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
  <img src={profile_img} alt="profile_img" />   
  <h1><span>I'm Razib</span>, frontend developer based in Bangladesh . </h1>
  <p>
    I'm frontend developer from sylhet, Bangladesh with high dedicated person
  </p>
  <div className="hero-action">
    <div className="hero-connect">
      Connect With Me
    </div>
    <div className="hero-resume">
      Download Resume 
    </div>
  </div>
    </div>
  );
};

export default Hero;