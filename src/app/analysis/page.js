'use client';

import React, { useState, useEffect } from 'react';
import { dataPandas, dataNumpy } from './action';
import Loading from '../../component/loading';

const AnalysisPage = () => {
    const [pandas, setPandas] = useState(null);
    const [numpy, setNumpy] = useState(null);
    const [loading, setLoading] = useState(true);

    // State untuk file unggahan dan hasil klasifikasi
    const [file, setFile] = useState(null);
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

    // Fungsi untuk menangani unggahan file
    const handleFileUpload = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        console.log("File uploaded:", uploadedFile.name);
    };

    // Fungsi untuk mengirim file ke backend untuk klasifikasi
    const handleClassify = async () => {
        if (!file) {
            console.error("No file uploaded");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/v1/classify-file', {
                method: 'POST',
                body: formData,
            });

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
                <p>Akses data sudah didapatkan, setelah model selesai akan langsung dideploy disini</p>
            </main>

            <div className="model">
                {loading ? (
                    <Loading />
                ) : (
                    pandas && numpy ? (
                        <div>
                            <p>Pandas Model: {JSON.stringify(pandas)}</p>
                            <p>Numpy Data: {JSON.stringify(numpy)}</p>
                            <p>{pandas?.Hasil}</p>
                        </div>
                    ) : (
                        <p>Data tidak ditemukan.</p>
                    )
                )}
            </div>

            {/* Tombol Unggah File untuk Klasifikasi */}
            <div>
                <h2>Upload File for Classification</h2>
                <div>
                    <label>
                        Upload CSV or Excel File:
                        <input type="file" accept=".csv, .xls, .xlsx" onChange={handleFileUpload} />
                    </label>
                </div>
                <button onClick={handleClassify}>Classify</button>
            </div>

            {/* Menampilkan Hasil Klasifikasi */}
            <div className="model">
                <p>Classification Result: {classificationResult ? classificationResult : "Belum ada hasil klasifikasi"}</p>
            </div>
        </div>
    );
};

export default AnalysisPage;
