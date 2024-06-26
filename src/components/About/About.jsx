import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h2>About Me</h2>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an experienced frontend developer with over a decade of professional expertise in this field. Throughout my career , I have had the privilege of collaborating with prestigious organizations, contributing to follow their success and growth </p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each projects. </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p> <hr style={{width:"50%"}} />
            </div>
            <div className="about-skill">
              <p>Reactjs </p> <hr  style={{width:"70%"}} />
            </div>
            <div className="about-skill">
              <p>Javascript </p><hr style={{width:"60%"}} />
            </div>
            <div className="about-skill">
              <p>Nextjs </p>
              <hr style={{width:"50%"}}/>
            </div>

          </div>

          <div className="about-achievements">
          <div className="about-achievement">
            <h2>10+</h2>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h2>90+</h2>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h2>15+</h2>
            <p>HAPPY CLIENTS</p>
          </div>
          <hr />
        </div>
        
        </div>
      {/*   <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
          <hr />
        </div> */}
      </div>
      
    </div>
  );
};

export default About;