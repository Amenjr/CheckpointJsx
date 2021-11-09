import img from './téléchargement.jfif'
import './App.css';
import vd from './video.mp4'

function App() {
  return (
  <div>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title_red">Your name here</h1>

<br/>

<img src={img} alt="luffy" />

<br/>

<img src="/one-piece-roronoa-zoro-hd-wallpaper-preview.jpg"/>

</div>

<video width="320" height="240" controls>

<source src={vd} type="video/mp4"/>

</video>

  </div>
  
    
  );
}

export default App;
