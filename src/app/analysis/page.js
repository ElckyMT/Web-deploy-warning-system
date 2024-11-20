'use client';

import React, { useState, useEffect } from 'react';
import { dataPandas, dataNumpy } from './action';
import Loading from '../../component/loading';

const AnalysisPage = () => {
    const [pandas, setPandas] = useState(null);
    const [numpy, setNumpy] = useState(null);
    const [loading, setLoading] = useState(true);

    // State untuk input dan hasil klasifikasi
    const [sl, setSL] = useState(0.0);
    const [sw, setSW] = useState(0.0);
    const [pl, setPL] = useState(0.0);
    const [pw, setPW] = useState(0.0);
    const [classificationResult, setClassificationResult] = useState(null);

    // Ambil data pandas dan numpy
    useEffect(() => {
        const fetchData = async () => {
            try {
                const pandasData = await dataPandas();
                const numpyData = await dataNumpy();
                setPandas(pandasData);
                setNumpy(numpyData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Fungsi untuk mengirim permintaan klasifikasi ke backend
    const handleClassify = async () => {
        try {
            const url = `/api/v1/classify?sl=${sl}&sw=${sw}&pl=${pl}&pw=${pw}`;
            const response = await fetch(url);
            const data = await response.json();
            setClassificationResult(data.result);
        } catch (error) {
            console.error("Classification error:", error);
        }
    };

    return (
        <div>
            <main>
                <h2>About This System</h2>
                <p>Masih Ngambil Data cug sabar</p>
                <p>Masih lama ya xD</p>
            </main>

            <div className="model">
                {loading ? (
                    <Loading />
                ) : (
                    pandas && numpy ? (
                        <div>
                            <p>Pandas Model: {JSON.stringify(pandas)}</p>
                            <p>Numpy Data: {JSON.stringify(numpy)}</p>
                            <p>{pandas?.Hasil}</p> {/* Gunakan optional chaining untuk menghindari error */}
                        </div>
                    ) : (
                        <p>Data tidak ditemukan.</p>
                    )
                )}
            </div>

            {/* Input dan Tombol untuk Klasifikasi */}
            <div>
                <h2>Classify Using Model</h2>
                <div>
                    <label>Nilai: <input type="number" value={sl} onChange={(e) => setSL(parseFloat(e.target.value))} /></label>
                    <label>IPK: <input type="number" value={sw} onChange={(e) => setSW(parseFloat(e.target.value))} /></label>
                    <label>JUmlah SKS: <input type="number" value={pl} onChange={(e) => setPL(parseFloat(e.target.value))} /></label>
                    <label>Kehadiran: <input type="number" value={pw} onChange={(e) => setPW(parseFloat(e.target.value))} /></label>
                </div>
                <button onClick={handleClassify}>Classify</button>
            </div>

            {/* Menampilkan Hasil Klasifikasi */}
            <div className="model">
                <p>Classification Result: {classificationResult ? classificationResult : "Masih nggak tahu ini cak"}</p>
            </div>
        </div>
    );
};

export default AnalysisPage;
