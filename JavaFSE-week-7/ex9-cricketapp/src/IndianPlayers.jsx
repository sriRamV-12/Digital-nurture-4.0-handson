const IndianPlayers = () => {
  const T20 = ["Rohit", "Kohli", "Gill"];
  const Ranji = ["Jaiswal", "Sarfaraz", "Mukesh"];
  const merged = [...T20, ...Ranji];

  const [odd, even] = [
    merged.filter((_, i) => i % 2 !== 0),
    merged.filter((_, i) => i % 2 === 0),
  ];

  return (
    <div>
      <h2>Indian Players</h2>
      <p><strong>Even Team:</strong> {even.join(", ")}</p>
      <p><strong>Odd Team:</strong> {odd.join(", ")}</p>
    </div>
  );
};

export default IndianPlayers;
