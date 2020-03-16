import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Jurusan extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>

<table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Menu For Kompetensi Keahlian</th>
                          

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          
                            <td>
                                <Link to="/RPL"><button type="button" class="btn btn-light">RPL</button></Link>
                               
                            </td>

                        </tr>
                        <tr>
                           
                            <td>
                            <Link to="/TKJ"><button type="button" class="btn btn-light">TKJ</button></Link>
                            </td>
                        </tr>
                        <tr>
                           
                            <td>
                            <Link to="/MMD"><button type="button" class="btn btn-light">MMD</button></Link>
                            </td>
                        </tr>

                        <tr>
                           
                           <td>
                           <Link to="/OTKP"><button type="button" class="btn btn-light">OTKP</button></Link>
                           </td>
                       </tr>

                       <tr>
                           
                           <td>
                           <Link to="/BDP"><button type="button" class="btn btn-light">BDP</button></Link>
                           </td>
                       </tr>

                       <tr>
                           
                           <td>
                           <Link to="/Perhotelan"><button type="button" class="btn btn-light">Perhotelan</button></Link>
                           </td>
                       </tr>

                       <tr>
                           
                           <td>
                           <Link to="/Tataboga"><button type="button" class="btn btn-light">Tataboga</button></Link>
                           </td>
                       </tr>


                        
                    </tbody>
                </table> 


               <Link to="/"> <button type="button" class="btn btn-danger">Back</button></Link>

               
            </div>

        );
    }
}

export default Jurusan;