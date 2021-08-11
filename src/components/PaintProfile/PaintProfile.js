import Stats from "../Stats/Stats";
import Description from "../Description/Description";
import "./PaintProfile.css";

export default function PaintProfile({ ...props }) {
  return (
    <div className="profile">
      <Description
        avatar={props.avatar}
        name={props.name}
        tag={props.tag}
        location={props.location}
      />
      <Stats
        followers={props.stats.followers}
        views={props.stats.views}
        likes={props.stats.likes}
      />
    </div>
  );
}
