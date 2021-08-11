import "./Statistic.css";

export default function Statistic({ options }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {options.map((option) => (
          <li className="item" key={option.id}>
            <span className="label" style={{ backgroundColor: option.color }}>
              {option.label}
            </span>
            <span className="percentage">{option.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
