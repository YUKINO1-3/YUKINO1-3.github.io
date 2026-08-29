const points = [
  [24, 70],
  [31, 33],
  [39, 52],
  [47, 25],
  [57, 62],
  [63, 46],
  [70, 29],
  [78, 58],
];

export function PlotMotif() {
  return (
    <svg
      aria-hidden="true"
      className="plot-motif"
      viewBox="0 0 100 88"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="plot-axis" d="M10 47H92M55 8V82" />
      <path className="plot-tick" d="M15 44V50M34 44V50M76 44V50M52 20H58M52 67H58" />
      {points.map(([x, y]) => (
        <path className="plot-point" d={`M${x - 1.4} ${y}h2.8M${x} ${y - 1.4}v2.8`} key={`${x}-${y}`} />
      ))}
      <text className="plot-label" x="94" y="50">x</text>
      <text className="plot-label" x="52" y="6">y</text>
    </svg>
  );
}
