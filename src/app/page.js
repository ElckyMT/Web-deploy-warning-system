import Image from "next/image";

export default function Home() {
    return (
        <main data-aos="zoom-in" data-aos-delay="1000">
            <h2>Welcome to the Early Warning System</h2>
            <p>
                This system is designed to help classify and predict the academic performance
                of students at PRODITI WICIDA, providing early warnings for
                potential graduation issues.
            </p>
            <div className="features">
                <h5>Features</h5>
                <h4> Classifying students</h4>
            </div>

            <div
                className="roadmap-container"
                data-aos="flip-left"
                data-aos-delay="2000"
            >
                <section className="roadmap website-roadmap">
                    <h3>Pembimbing 1</h3>
                    <div className="roadmap-timeline">
                        <div className="roadmap-item">
                            <div className="roadmap-date">
                                Wahyuni, S.Kom., M.Kom.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="roadmap model-roadmap">
                    <h3>Pembimbing 2</h3>
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
