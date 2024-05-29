import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='portfolio' className='mywork'>
      <div className="mywork-title">
        <h2>My Latest Work </h2>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="mywork-container">
        {
          mywork_data.map((work,index)=>{
            return <img src={work.w_img} key={index} alt="workImg" />
          })
        }
      </div>
      <div className="mywork-showmore">
        <p>Show More </p>
        <img src={arrow_icon} alt="arrowIcon" />
      </div>
    </div>
  );
};

export default MyWork;