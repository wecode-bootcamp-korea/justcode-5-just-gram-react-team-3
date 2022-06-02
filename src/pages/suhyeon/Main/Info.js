import { Link } from "react-router-dom";

function Info({ infoName }) {
  return (
    <Link className="info_link_box" to="/">
      {infoName}
    </Link>
  );
}

export default Info;
