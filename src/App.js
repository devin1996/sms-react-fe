//import logo from './logo.svg';
import './App.css';
import Nav from './components/Navs';
import Menu from './components/Menu';
import Students from './admin/students';
import { BrowserRouter, Route } from "react-router-dom";
import UserVIew from './user/useview';
import AddStudent from './admin/AddStudent';
import UpdateStudent from './admin/updateuser';
import AdminLogin from './admin/AdmminLogin';
import AddTimeSlot from './admin/addTimeSlot';



function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Route path='/' exact component={AdminLogin} />
        <Route path='/user/userview' exact component={UserVIew} />
        <Route path='/admin/students' exact component={Students} />
        <Route path='/admin/students/createuser' exact component={AddStudent} />
        <Route path='/admin/students/:id/update' exact component={UpdateStudent} />
        <Route path='/admin/adminlogin' exact component={AdminLogin} />
        <Route path='/admin/addTimeSlot' exact component={AddTimeSlot} />
        



      </BrowserRouter>




    </div>
  );
}

export default App;
