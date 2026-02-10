import './App.css';
import AddToFavoritesButton from './spotify-button';

function App() {
  return (
    <div className="card">
      <div className="cover-wrapper">
        <img
          width={56}
          height={56}
          src="https://i.scdn.co/image/ab67616d0000b27348433bb115b85cc2246f16c1"
          alt=""
        />
      </div>
      <div className="meta">
        <h1>Vodka Cranberry</h1>
        <p>Conan Gray</p>
      </div>
      <div>
        <AddToFavoritesButton />
      </div>
    </div>
  );
}

export default App;
