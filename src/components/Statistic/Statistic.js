import PropTypes from "prop-types";
import randomColor from "randomcolor";
import s from "./Statistic.module.css";
import StatisticTitle from "../StatisticTitle/StatisticTitle";
import StatItem from "../StatItem/StatItem";

export default function Statistic({ title, stats }) {
  let color = randomColor();
  return (
    <section className={s.statistics}>
      <StatisticTitle title={title} />

      <ul className={s.list}>
        {stats.map((stat) => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: color }}
          >
            <StatItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
