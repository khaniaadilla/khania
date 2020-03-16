import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


class RPL extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>

                <Link to="/daftar"> <button type="button" class="btn btn-danger">Daftar</button></Link>

                <p class="h1">Halaman RPL</p>
                <div></div>
                <div>
                    <dl class="row">
                        <dt class="col-sm-3">RPL</dt>
                        <dd class="col-sm-9">Rekayasa Perangkat Lunak,</dd>

                        <dt class="col-sm-3">Pengertian RPL</dt>
                        <dd class="col-sm-9">Rekayasa Perangkat Lunak (RPL, atau dalam bahasa Inggris: Software Engineering atau SE) adalah satu bidang profesi yang mendalami cara-cara pengembangan perangkat lunak termasuk pembuatan, pemeliharaan, manajemen organisasi pengembangan perangkat lunak dan manajemen kualitas.</dd>

                        <dt class="col-sm-3">Kriteria UNtuk Masuk Ke RPL</dt>
                        <dd class="col-sm-9">
                            <p>Dapat terus dirawat dan dipelihara (Maintainability)</p>
                            <p>-Dapat mengikuti perkembangan teknologi (Dependability)</p>
                            <p>-Dapat mengikuti keinginan pengguna (Robust)</p>
                            <p>-Efektif dan efisien dalam menggunakan energi dan penggunaannya</p>
                            <p>-Dapat memenuhi kebutuhan yang diinginkan (Usability)</p>
                        </dd>

                    </dl>
                </div>
                <Link to="/jurusan"> <button type="button" class="btn btn-danger">Back</button></Link>

            </div>

        );
    }
}

export default RPL;