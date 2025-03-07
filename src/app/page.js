import Image from "next/image";

export default function Home() {
    return (
        <main data-aos="zoom-in" data-aos-delay="1000">
            <h2>
            Selamat Datang di Early Warning System</h2>
            <p>
            Sistem ini dirancang untuk membantu mengklasifikasikan dan memprediksi resiko kelulusan mahasiswa PRODITI WICIDA, memberikan peringatan dini terhadap potensi masalah kelulusan.
            </p>
            <div className="features">
            <h4>  Fitur </h4>
            <h5>Melakukan klasifikasi prediktif terhadap resiko kelulusan mahasiswa</h5>
                
            </div>

            <div
                className="roadmap-container"
                data-aos="flip-left"
                data-aos-delay="2000"
            >
                <section className="roadmap website-roadmap">
                    <h3>Dosen Pembimbing Utama</h3>
                    <div className="roadmap-timeline">
                        <div className="roadmap-item">
                            <div className="roadmap-date">
                                Wahyuni, S.Kom., M.Kom.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="roadmap model-roadmap">
                    <h3>Dosen Pembimbing Pendamping</h3>
                    <div className="roadmap-timeline">
                        <div className="roadmap-item">
                            <div className="roadmap-date">
                                Pitrasacha Aditya, S.T., M.T.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
