import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='service' className='services'>
      <div className="services-title">
        <h2>My Services</h2>
        <img src={theme_pattern} alt="theme_pattern-img" />
      </div>
      <div className="services-container">
      {Services_Data.map((service,index)=>{
        return <div className='services-format' key={index}>
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <p>{service.s_desc}</p>
          <div className="services-readmore">
            <p>Reade More</p>
            <img src={arrow_icon} alt="arrow_icon" />
          </div>
        </div>
      })}
      </div>
      
    </div>
  );
};

export default Services;