import logo from './logo.svg';
import './App.css';
import NavBar from './navbar.js';


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
    </div>
  </div>
    </nav>
      <h1>"CS 230L"</h1>
      <h2>"Section 01</h2>
      <p>“WVU ID: 800358279”</p>
      <p>“Hi I am Kade McGlumphy”</p>

    <div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
    <div class="card-body">
    This is some text within a card body.
  </div>
    <div class="card-body">
    This is some text within a card body.
  </div>
  </div>

    
    </div>

  
  );
}

export default App;
