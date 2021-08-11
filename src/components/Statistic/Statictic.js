export default function PaintProfile({ ...props }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{props.label}</span>
          <span class="percentage">{props.percentage}</span>
        </li>
      </ul>
    </section>
  );
}
