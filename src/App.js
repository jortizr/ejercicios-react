import './App.css';
import Testimonio from './componentes/Testimonio';


function App() {

  const testimShawn=["It's scary to change careers. I only gained confidence that I could "+
  "code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a"+
  " year I had a six-figure job as a Software Engineer. ", <strong>freeCodeCamp changed my life.</strong>]

  return (
    <div className="App">
			<nav id='menu'>
				<ul>
					<li><a href='http://'>Home</a></li>
					<li><a class='dropdown-arrow' href='http://'>Exercise</a>
						<ul class='sub-menus'>
							<li><a href='http://'>Calculator</a></li>
							<li><a href='http://'>Products 2</a></li>
							<li><a href='http://'>Products 3</a></li>
							<li><a href='http://'>Products 4</a></li>
						</ul>
					</li>
					<li><a href='http://'>Contact Us</a></li>
				</ul>
			</nav>

			<br></br>
			<header></header>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      <Testimonio
      nombre='Shawn Wang'
      pais='Singapore'
      imagen='Shawn'
      cargo='Software Engineer'
      empresa='Amazon'
      testimonio={testimShawn}
       />
      <Testimonio
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='Sarah'
      cargo='Software Engineer'
      empresa='ChatDesk'
      // testimonio={[<strong>freeCodeCamp was the gateway to my career</strong>, " as a "+
      // "software developer. The well-structured curriculum took my coding knowledge from a total"+ 
      // "beginner level to a very confident level. It was everything I needed to land my first dev"+
      // " job at an amazing company."]}
       />
      <Testimonio
      nombre='Emma Bostian'
      pais='Sweden'
      imagen='Emma'
      cargo='Software Engineer'
      empresa= 'Spotify'
      // testimonio= {["I've always struggled with learning JavaScript. I've taken many courses"
      // + "but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data"+
      // "structures and algorithms on",<strong> freeCodeCamp gave me the skills</strong>, "and"+
      // "confidence I needed to land my dream job as a software engineer at Spotify."]}
       />
      
    </div>
  );
}

export default App;
