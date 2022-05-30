import { useEffect, useState } from "react";
import popupStyles from "./MyMenu.scss";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
const MyMenu = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);


  return (
		<div className="tooltip-container"
        onMouseLeave={() => {setShow(false)}}>
    <div className={show ? 'tooltip-box visible' : 'tooltip-box'}>
			<div className="tooltip-arrow" />
      <div className="tooltip-top">
        <div className="tooltip-profile">
          <img alt="profile" src="/images/jieunkim/profile-img/profile.png"></img>
          <span>프로필</span>
        </div>
        <div className="tooltip-save">
          <img alt="save" src="/images/jieunkim/bookmark-white.png"></img>
          <span>저장됨</span>
        </div>
        <div className="tooltip-setting">
          <img alt="setting" src="/images/jieunkim/setting.png"></img>
          <span>설정</span>
        </div>
      </div>
      <div className="tooltip-bottom">
        <div className="tooltip-logout">
          <span>로그아웃</span>
          </div>
      </div>
    </div>
		</div>
  );
};

MyMenu.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default MyMenu;
