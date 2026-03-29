import './App.css';
import Image from './Image';

/* import cartoon images from image folder*/
import image1 from './images/Baymax.png';
import image2 from './images/HiroHamada.png';
import image3 from './images/HoneyLemon.png';
import image4 from './images/Wasabi.png';

function App() {
  return (
    <div className="app-container">
      <h1>My Favorite Cartoon Characters From Big Hero 6</h1>
      <div className="image-grid">
        <Image src={image1} title="Baymax" />
        <Image src={image2} title="Hiro" />
        <Image src={image3} title="Honey Lemon" />
        <Image src={image4} title="Wasabi" />
      </div>
    </div>
  );
}

export default App;