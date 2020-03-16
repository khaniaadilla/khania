import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Student extends Component {
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
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">School</th>
                            <th scope="col">Kompetensi Keahlian</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Khania Adilla</td>
                            <td>16</td>
                            <td>khaniabaltica@gmail.com</td>
                            <td>SMK Wikrama</td>
                            <td>RPL</td>
                            <td>
                                <Link to="/detailstudent"><button type="button" class="btn btn-primary">Detail</button></Link>
                                <button type="button" class="btn btn-danger">Delete</button>
                                <button type="button" class="btn btn-warning">Edit</button>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Rindaldi Putra</td>
                            <td>17</td>
                            <td>rinaldiptra@gmail.com</td>
                            <td>SMK Wikrama</td>
                            <td>RPL</td>
                            <td>
                                <button type="button" class="btn btn-primary">Detail</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                                <button type="button" class="btn btn-warning">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Syaiful Hadad </td>
                            <td>16</td>
                            <td>hadadun@gmail.com</td>
                            <td>SMK Wikrama</td>
                            <td>RPL</td>
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

export default Student;