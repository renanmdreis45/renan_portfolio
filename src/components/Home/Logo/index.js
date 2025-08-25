import RM from '../../../assets/images/RM.png';
import './index.scss';

const Logo = () => {

  return (
    <div className="logo-container">
      <img className="solid-logo animate" src={RM} alt="JavaScript, Developer" />
    </div>
  );
};

export default Logo;