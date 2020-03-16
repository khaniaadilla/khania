import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


class BDP extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Link to="/daftarbdp"> <button type="button" class="btn btn-danger">Daftar</button></Link>

                <p class="h1">Halaman BDP</p>
                <div></div>
                <div>
                    <dl class="row">
                        <dt class="col-sm-3">BDP</dt>
                        <dd class="col-sm-9">Bisnis Daring Pemasaran</dd>

                        <dt class="col-sm-3">Pengertian BDP</dt>
                        <dd class="col-sm-9">
                        Kompetensi Keahlian Bisnis Daring dan Pemasaran adalah kompetensi keahlian yang mempelajari dasar-dasar kemampuan serta keilmuan menjadi seorang marketing, dimana siswa akan mempelajari ilmu dasar marketing, pengadministrasian barang , bisnis retail , serta kemampun praktik penjualan.</dd>
                        <dt class="col-sm-3">Kriteria Untuk Masuk Ke BDP</dt>
                        <dd class="col-sm-9">
                            <p>-Tahu tentang Pramuniaga</p>
                            <p>-Keterampilan untuk memasarkan barang</p>
                            <p>-Kreatif, dan dapat mendisplay barang</p>
                        </dd>

                    </dl>
                </div>
                <Link to="/jurusan"> <button type="button" class="btn btn-danger">Back</button></Link>
            </div>
            
        );
    }
}

export default BDP;