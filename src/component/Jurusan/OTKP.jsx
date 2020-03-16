import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


class OTKP extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Link to="/daftarotkp"> <button type="button" class="btn btn-danger">Daftar</button></Link>


                <p class="h1">Halaman OTKP</p>
                <div></div>
                <div>
                    <dl class="row">
                        <dt class="col-sm-3">OTKP</dt>
                        <dd class="col-sm-9">Otomatisasi dan Tata Kelola Perkantoran</dd>

                        <dt class="col-sm-3">Pengertian OTKP</dt>
                        <dd class="col-sm-9">
                        Otomatisasi dan Tata Kelola Perkantoran (OTKP) Merupakan Kristalisasi Dari Program Keahlian Yang Harus Dikuasai Oleh Peserta Didik Untuk Dapat Bekerja Sesuai Dengan Standart Kompetensi Kerja Nasional Indonesia (SKKNI) Atau Standart Paket Keahlian : ADMINISTRASI PERKANTORAN.</dd>
                        <dt class="col-sm-3">Kriteria Untuk Masuk Ke OTKP</dt>
                        <dd class="col-sm-9">
                            <p>-Mempunyai Keterampilan Administrasi Perkantoran</p>
                            <p>-Keterampilan Teknologi Perkantoran</p>
                            <p>-Kemampuan Berbahasa</p>
                        </dd>

                    </dl>
                </div>
                <Link to="/jurusan"> <button type="button" class="btn btn-danger">Back</button></Link>
            </div>
        );
    }
}

export default OTKP;