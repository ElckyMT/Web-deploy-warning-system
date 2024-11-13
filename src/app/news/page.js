'use client'

const newsPage = () => {
    return (
        <main>
            <div className="imgnws">
                <img
                    src="https://qqzumjdawvvrqegltuqq.supabase.co/storage/v1/object/public/Fernandes/in.gif"
                    alt="Description of the GIF"
                    className="gif-image"
                />
            </div>
            <div className="roadmap-container">
                <section className="roadmap website-roadmap">
                    <h3>Website Development Roadmap</h3>
                    <div className="roadmap-timeline">
                        <div className="roadmap-item">
                            <div className="roadmap-date">Phase 1: Planning</div>
                            <div className="roadmap-title">Project Initiation and Requirements Gathering</div>
                            <div className="roadmap-description">
                                Define project scope, gather requirements, and create initial designs.
                            </div>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-date">Phase 2: Development</div>
                            <div className="roadmap-title">Frontend and Backend Development</div>
                            <div className="roadmap-description">
                                Implement core features, develop database, and create user interface.
                            </div>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-date">Phase 3: Testing</div>
                            <div className="roadmap-title">Quality Assurance and User Testing</div>
                            <div className="roadmap-description">
                                Conduct thorough testing, fix bugs, and gather user feedback.
                            </div>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-date">Phase 4: Deployment</div>
                            <div className="roadmap-title">Launch and Maintenance</div>
                            <div className="roadmap-description">
                                Deploy the website, monitor performance, and provide ongoing support.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="roadmap model-roadmap">
                    <h3>Model Development Roadmap</h3>
                    <div className="roadmap-timeline">
                        <div className="roadmap-item">
                            <div className="roadmap-date">Phase 1: Planning</div>
                            <div className="roadmap-title">Project Initiation and Requirements Gathering</div>
                            <div className="roadmap-description">
                                Define project scope, gather requirements, and create initial designs.
                            </div>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-date">Phase 2: Development</div>
                            <div className="roadmap-title">Data Cleaning etc</div>
                            <div className="roadmap-description">
                                Train the Random Forest model with gathered data.
                            </div>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-date">Phase 3: Testing and Training</div>
                            <div className="roadmap-title">Quality Assurance and User Testing</div>
                            <div className="roadmap-description">
                                Conduct thorough testing, fix bugs, and gather user feedback.
                            </div>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-date">Phase 4: Deployment</div>
                            <div className="roadmap-title">Launch and Maintenance</div>
                            <div className="roadmap-description">
                                Deploy the Python Model, monitor performance, and provide ongoing support.
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="news-section">
                    <h2>Latest Commits</h2>
                    <ul id="commit-list"></ul>
                    <input type="text" id="commit-input" placeholder="Enter commit message" />
                    <button id="add-commit-btn">Add Commit</button>
                </section>
            </div>
        </main>
    );
};

export default newsPage;
