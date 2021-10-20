//import logo from './logo.svg';
import './App.css';
import Nav from './components/Navs';
import Menu from './components/Menu';
import Students from './admin/students';
import { BrowserRouter, Route } from "react-router-dom";
import UserVIew from './user/useview';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Route path='/' exact component={UserVIew} />
        <Route path='/user/userview' component={UserVIew} />
        <Route path='/admin/students' component={Students} />
      </BrowserRouter>




    </div>
  );
}

export default App;
