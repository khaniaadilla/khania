import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


class TKJ extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>

                <Link to="/daftartkj"> <button type="button" class="btn btn-danger">Daftar</button></Link>

                <p class="h1">Halaman TKJ</p>
                <div></div>
                <div>
                    <dl class="row">
                        <dt class="col-sm-3">TKJ</dt>
                        <dd class="col-sm-9">Teknik Komputer dan Jaringan</dd>

                        <dt class="col-sm-3">Pengertian TKJ</dt>
                        <dd class="col-sm-9">
                            Teknik Komputer dan Jaringan atau yang biasa disebut TKJ adalah teknik yang mempelajari tentang cara instalasi PC, instalasi LAN, memperbaiki PC dan mempelajari program-program PC.</dd>
                        <dt class="col-sm-3">Kriteria UNtuk Masuk Ke TKJ</dt>
                        <dd class="col-sm-9">
                            <p>-Harus mengetahui fungsi dari firewall</p>
                            <p>-Mengetahui Server Aplikasi</p>
                            <p>-Memperdalam Materi SSH(Secure Shell)</p>
                        </dd>

                    </dl>
                </div>
                <Link to="/jurusan"> <button type="button" class="btn btn-danger">Back</button></Link>
            </div>
        );
    }
}

export default TKJ;