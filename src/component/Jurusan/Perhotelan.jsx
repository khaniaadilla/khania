import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


class Perhotelan extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>

                <p class="h1">Halaman Perhotelan</p>
                <div></div>
                <div>
                    <dl class="row">
                        <dt class="col-sm-3">Perhotelan</dt>
                        <dd class="col-sm-9">Kejuruan Perhotelan</dd>

                        <dt class="col-sm-3">Pengertian Perhotelan</dt>
                        <dd class="col-sm-9">
                        Manajemen Perhotelan merupakan kesatuan rencana belajar yang menerapkan dan mengembangkan pengetahuan, keterampilan dan ilmu perhotelan khususnya dalam perencanaan, memproduksi, dan pengawasan pengelolaan jasa penginapan atau akomodasi.</dd>
                        <dt class="col-sm-3">Kriteria Untuk Masuk Ke Perhotelan</dt>
                        <dd class="col-sm-9">
                            <p>-Handal dalam berbahasa asing</p>
                            <p>-Berpenampilan selalu rapih</p>
                            <p>-Dapat memperdalam tentang perhotelan dan juga administrasi</p>
                        </dd>

                    </dl>
                </div>
                <Link to="/jurusan"> <button type="button" class="btn btn-danger">Back</button></Link>
            </div>
        );
    }
}

export default Perhotelan;