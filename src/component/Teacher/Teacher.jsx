import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Teacher extends Component {
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
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mapel</th>
                            <th scope="col">Email</th>
                            <th scope="col">School</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>M Fatwa Fauzan</td>
                            <td>Matematika</td>
                            <td>fatwa@gmail.com</td>
                            <td>SMK Wikrama</td>
                            <td>
                                <button type="button" class="btn btn-primary">Detail</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                                <button type="button" class="btn btn-warning">Edit</button>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Ardiyansah</td>
                            <td>IPA</td>
                            <td>ardiyansah@gmail.com</td>
                            <td>SMK Wikrama</td>
                            <td>
                                <button type="button" class="btn btn-primary">Detail</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                                <button type="button" class="btn btn-warning">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ibrahim Surya </td>
                            <td>PKN</td>
                            <td>ibrahim@gmail.com</td>
                            <td>SMK Wikrama</td>
                            <td>
                                <button type="button" class="btn btn-primary">Detail</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                                <button type="button" class="btn btn-warning">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/"> <button type="button" class="btn btn-danger">Back</button></Link>



            </div>

        );
    }
}

export default Teacher;