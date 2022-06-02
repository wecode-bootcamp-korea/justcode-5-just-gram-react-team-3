import { Link } from "react-router-dom";

function Story({ altValue, imageUrl, nickname, date }) {
  return (
    <div className="aside_top_content">
      <div className="stroy_box_border">
        <img alt={altValue} className="story_profile_photo" src={imageUrl} />
      </div>
      <div className="story_profile_info">
        <Link to="/">{nickname}</Link>
        <span className="time_info">{date}</span>
      </div>
    </div>
  );
}

export default Story;
