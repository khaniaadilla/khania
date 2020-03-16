import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header'
import Siswa from './Student'
import Student from './component/Student/Student'
import Teacher from './component/Teacher/Teacher';
import DetailStudent from './component/Student/DetailStudent';
import Jurusan from './component/Jurusan/Jurusan';
import RPL from './component/Jurusan/RPL';
import TKJ from './component/Jurusan/TKJ';
import MMD from './component/Jurusan/MMD';
import OTKP from './component/Jurusan/OTKP';
import BDP from './component/Jurusan/BDP';
import Perhotelan from './component/Jurusan/Perhotelan';
import Tataboga from './component/Jurusan/Tataboga';
import Daftar from './component/Daftar/Daftar';
import DaftarTKJ from './component/Daftar/DaftarTKJ';
import DaftarMMD from './component/Daftar/DaftarMMD';
import DaftarOTKP from './component/Daftar/DaftarOTKP';
import DaftarBDP from './component/Jurusan/BDP';



class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav>
            <ul>
              <li>

                <Link to="/student">Student</Link>

              </li>

              <li>

                <Link to="/teacher">Teacher</Link>

              </li>
              <li>

                <Link to="/jurusan">Kompetensi Keahlian</Link>

              </li>

             


            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          {/* Perpindahan */}
          <Switch>

            <Route path="/student">
              <Student />
            </Route>



            <Route path="/teacher">
              <Teacher />
            </Route>

            <Route path="/detailstudent">
              <DetailStudent />
            </Route>

            <Route path="/jurusan">
              <Jurusan />
            </Route>

            <Route path="/rpl" >
              <RPL />
              
            </Route>

            <Route path="/tkj" >
              <TKJ />
              
            </Route>

            <Route path="/mmd" >
              <MMD />
              
            </Route>

            <Route path="/otkp" >
              <OTKP />
              
            </Route>

            <Route path="/bdp" >
              <BDP />
              
            </Route>

            <Route path="/perhotelan" >
              <Perhotelan />
              
            </Route>

            <Route path="/tataboga" >
              <Tataboga />
              
            </Route>

            <Route path="/daftar" >
              <Daftar />
              
            </Route>

            <Route path="/daftartkj" >
              <DaftarTKJ />
              
            </Route>

            <Route path="/daftarmmd" >
              <DaftarMMD />
              
            </Route>

            <Route path="/daftarotkp" >
              <DaftarOTKP />
              
            </Route>

            
            <Route path="/daftarbdp" >
              <DaftarBDP />
              
            </Route>



          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
