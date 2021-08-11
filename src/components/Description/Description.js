import PropTypes from "prop-types";
import "./DescriptionStyle.css";

export default function Description({ avatar, name, tag, location }) {
  return (
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="Location">{location}</p>
    </div>
  );
}

Description.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
