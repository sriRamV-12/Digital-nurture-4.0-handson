const players = [
  { name: "Rohit", score: 80 },
  { name: "Virat", score: 45 },
  { name: "Rahul", score: 65 },
  { name: "Bumrah", score: 90 },
  { name: "Shami", score: 75 },
  { name: "Gill", score: 35 },
  { name: "Hardik", score: 95 },
  { name: "Pant", score: 55 },
  { name: "Ashwin", score: 25 },
  { name: "Surya", score: 88 },
  { name: "Jadeja", score: 92 },
];

const ListOfPlayers = () => {
  const below70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
      <h3>Players with Score below 70:</h3>
      <ul>
        {below70.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
