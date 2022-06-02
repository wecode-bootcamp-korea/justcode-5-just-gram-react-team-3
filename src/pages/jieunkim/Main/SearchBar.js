import { useEffect, useState } from "react";
import "./SearchBar.scss";
const SearchBar = (props) => {
	const [show, setShow] = useState(false);
	
	const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);


	return (
		<div>
    <div className="searchRes-container">
        <div className="searchRes-arrow" />
        <div className="searchRes-profile">
        <div className="searchRes-profile-content">
				<div className="searchRes-profile-icon user-profile">
            <img
              className="author-icon-profile"
              id="author-icon-profile"
              alt="author"
              src={props.profileImageUrl}
            />
          </div>
          <div className="author-info user-info">
            <p className="author-id user-id" id="author-id">
              {props.user}
            </p>
            <p className="author-location user-location" id="author-location">
              location
            </p>
          </div>
          </div>
				</div>
				</div>
    </div>
  );
}

export default SearchBar;