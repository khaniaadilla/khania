import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


class Tataboga extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>

                <p class="h1">Halaman Tataboga</p>
                <div></div>
                <div>
                    <dl class="row">
                        <dt class="col-sm-3">TBG</dt>
                        <dd class="col-sm-9">Tataboga</dd>

                        <dt class="col-sm-3">Pengertian Tataboga</dt>
                        <dd class="col-sm-9">
                       Tataboga adalah seni untuk menguasai masakan,mulai dari tata pengelolaan, persiapan dan penyajian.</dd>
                        <dt class="col-sm-3">Kriteria Untuk Masuk Ke Tataboga</dt>
                        <dd class="col-sm-9">
                            <p>-Pernah Wisata Kuliner</p>
                            <p>-Suka seni masakan </p>
                            <p>-Casual yang rapih dan sopan</p>
                        </dd>

                    </dl>
                </div>
                <Link to="/jurusan"> <button type="button" class="btn btn-danger">Back</button></Link>
            </div>
        );
    }
}

export default Tataboga;