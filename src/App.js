import logo from './logo.svg';
//import './App.css';
import imageInSrc from './imageInSrc.jpg';
import './stye.css';

function App() {
  return (
    <div>
  
    <h1 className="title-red"> Aida ben slima</h1>
    
    <br/>
    
    <img src={imageInSrc} />
    
    <br/>
    
    <img src="/imageInPublic.jpg" />;
    <br/>
    
    <iframe width="320" height="240" src="https://www.youtube.com/embed/rfJ4kbZ8-gM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
   
    
  
    </div>


  );
}

export default App;
