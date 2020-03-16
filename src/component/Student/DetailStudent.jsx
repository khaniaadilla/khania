import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class DetailStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jenjang: 1
        }
    }
    render() {
        const { jenjang } = this.state;
        return (
            <div>
                {jenjang == 1 ?
                    <div>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">School</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Khania Adilla</td>
                                    <td>16</td>
                                    <td>khaniabaltica@gmail.com</td>
                                    <td>SMK Wikrama</td>

                                </tr>

                            </tbody>
                        </table>

                    </div>
                    :
                    null
                }

                {jenjang == 2 ?
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

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Rinaldi Putra</td>
                                    <td>17</td>
                                    <td>rinaldiptra@gmail.com</td>
                                    <td>SMK Wikrama</td>
                                    <td>RPL</td>

                                </tr>

                            </tbody>
                        </table>

                    </div>
                    :
                    null
                }

                {jenjang == 3 ?
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

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Syaiful Hada</td>
                                    <td>16</td>
                                    <td>hadadun@gmail.com</td>
                                    <td>SMK Wikrama</td>
                                    <td>RPL</td>

                                </tr>

                            </tbody>
                        </table>


                    </div>
                    :
                    null
                }



                <Link to="/"> <button type="button" class="btn btn-danger">Back</button></Link>

            </div>

        );
    }
}

export default DetailStudent;