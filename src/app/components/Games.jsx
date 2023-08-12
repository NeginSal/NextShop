
async function fetchGames() {
  const response = await fetch('http://localhost:3000/api/games');
  const data = await response.json();
  return data;
}

const Games = async () => {
  const games = await fetchGames();
  return (
    <div>
      <h1>Games</h1>
      {
        games.map((game) => (
          <div key={game.id}>
            <p>{game.title}</p>
            <p>{game.description}</p>
          </div>
        ))
      }

    </div>
  );
}

export default Games;