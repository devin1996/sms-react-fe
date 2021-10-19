//import logo from './logo.svg';
import './App.css';
import Nav from './components/Navs';
import Menu from './components/Menu';
import Students from './admin/students';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Nav />

      <div class="container-fluid">
        <div class="row">

          <Menu />
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">

          <BrowserRouter>
          <Route path='/admin/students' component={Students}/>
          </BrowserRouter>

          </main>
        </div>
      </div>


    </div>
  );
}

export default App;
