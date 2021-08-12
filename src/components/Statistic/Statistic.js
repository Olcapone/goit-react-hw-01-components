import PropTypes from "prop-types";
import randomColor from "randomcolor";
import s from "./Statistic.module.css";
import StatisticTitle from "../StatisticTitle/StatisticTitle";
import StatItem from "../StatItem/StatItem";

export default function Statistic({ title, options }) {
  let color = randomColor();
  return (
    <section className={s.statistics}>
      <StatisticTitle title={title} />

      <ul className={s.list}>
        {options.map((option) => (
          <li
            className={s.item}
            key={option.id}
            style={{ backgroundColor: color }}
          >
            <StatItem label={option.label} percentage={option.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
