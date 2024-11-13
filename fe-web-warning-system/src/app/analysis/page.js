'use client';

import React, { useState, useEffect } from 'react';
import { dataPandas, dataNumpy } from './action';
import Loading from '../../component/loading';

const AnalysisPage = () => {
    const [pandas, setPandas] = useState(null);
    const [numpy, setNumpy] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pandasData = await dataPandas();
                const numpyData = await dataNumpy();
                setPandas(pandasData);
                setNumpy(numpyData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
                    pandas && numpy && (
                        <div>
                            <p>Pandas Data: {JSON.stringify(pandas)}</p>
                            <p>Numpy Data: {JSON.stringify(numpy)}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default AnalysisPage;
