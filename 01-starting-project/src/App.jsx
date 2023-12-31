import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js'

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p> reactDescriptions{[getRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
}

function CoreConcept(props) {
    return (
	<li>
	    <img src={props.image} alt={props.title}></img>
	    <h3>{props.title}</h3>
	    <p>{props.description}</p>
	</li>
    );
}

function App() {
  return (
    <div>
	<Header/>
	<main>
	    <section id="core-concepts">
		<h2>Core Concepts</h2>
		<ul>
		    <CoreConcept {...CORE_CONCEPTS[0]}/>
		    <CoreConcept {...CORE_CONCEPTS[1]}/>
		    <CoreConcept {...CORE_CONCEPTS[2]}/>
		    <CoreConcept {...CORE_CONCEPTS[3]}/>
    		</ul>
		</section>	
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
