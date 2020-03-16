import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class DaftarBDP extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render() {
        return (
           
            <div>
                <h1>Form Pendaftaran BDP</h1>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Name</span>
            </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
          </input>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Age</span>
            </div>
            <input type="integer" class="form-control" placeholder="Age" aria-label="Age" aria-describedby="basic-addon1">
          </input>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
          </input>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">School</span>
            </div>
            <input type="text" class="form-control" placeholder="School" aria-label="School" aria-describedby="basic-addon1">
          </input>
          </div>
          <td>
          <Link to="/student"><button type="button" class="btn btn-primary">Done</button></Link>
          </td>

          <td>
          <Link to="/jurusan"><button type="button" class="btn btn-primary">Cancel</button></Link>
          </td>



          </div>
          
          
          
          
        
        );
    }
}

export default DaftarBDP;