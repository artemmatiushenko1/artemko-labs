import './App.css';
import AddToFavoritesButton from './spotify-button';

function App() {
  return (
    <div className="card">
      <div className="cover-wrapper">
        <img
          width={56}
          height={56}
          src="https://i.scdn.co/image/ab67616d0000b27333c9358e63089e6a16c716e7"
          alt=""
        />
      </div>
      <div className="meta">
        <h1>Take A Drive</h1>
        <p>Rex Orange County</p>
      </div>
      <AddToFavoritesButton />
    </div>
  );
}

export default App;
