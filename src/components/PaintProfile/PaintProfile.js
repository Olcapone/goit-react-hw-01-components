import Stats from "../Stats/Stats";
import Description from "../Description/Description";
import s from "./PaintProfile.module.css";

export default function PaintProfile({ avatar, name, tag, location, stats }) {
  return (
    <div className={s.profile}>
      <Description avatar={avatar} name={name} tag={tag} location={location} />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
}
