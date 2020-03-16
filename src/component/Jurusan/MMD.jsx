import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


class MMD extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>

<Link to="/daftarmmd"> <button type="button" class="btn btn-danger">Daftar</button></Link>

                <p class="h1">Halaman MMD</p>
                <div></div>
                <div>
                    <dl class="row">
                        <dt class="col-sm-3">MMD</dt>
                        <dd class="col-sm-9">Multimedia</dd>

                        <dt class="col-sm-3">Pengertian MMD</dt>
                        <dd class="col-sm-9">
                        Multimedia adalah penggunaan komputer untuk menyajikan dan menggabungkan teks, suara, gambar, animasi, audio dan video dengan alat bantu (tool) dan koneksi (link) sehingga pengguna dapat melakukan navigasi, berinteraksi, berkarya dan berkomunikasi. Multimedia sering digunakan dalam dunia informatika. Selain dari dunia informatika, multimedia juga diadopsi oleh dunia game, dan juga untuk membuat website.</dd>
                        <dt class="col-sm-3">Kriteria UNtuk Masuk Ke MMD</dt>
                        <dd class="col-sm-9">
                            <p>-Harus bisa mengembangkan Web</p>
                            <p>-Harus bisa mengembangkan Game</p>
                            <p>-Tau tentang produksi Cinema atau rumah film</p>
                        </dd>

                    </dl>
                </div>
                <Link to="/jurusan"> <button type="button" class="btn btn-danger">Back</button></Link>
            </div>
        );
    }
}

export default MMD;