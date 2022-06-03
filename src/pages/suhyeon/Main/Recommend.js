import { Link } from "react-router-dom";

function Recommend({ altValue, imageUrl, nickname, info }) {
  return (
    <div className="recommend_top_content">
      <div className="recommend_photo_info">
        <img
          alt={altValue}
          className="recommend_profile_photo"
          src={imageUrl}
        />
        <div className="recommend_profile_info">
          <Link to="/">{nickname}</Link>
          <span className="follow_info">{info}</span>
        </div>
      </div>
      <div className="follow_btn_box">
        <button className="follow_btn">팔로우</button>
      </div>
    </div>
  );
}
export default Recommend;
