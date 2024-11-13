'use client'

const aboutPage = () => {
    return (
        <div>
            <main data-aos="fade-left" data-aos-delay="2000" >
                <div>
                <h2>About This System</h2>
                <p>
                    The Early Warning System Kelulusan PRODITI WICIDA is a data-driven application aimed at assisting in monitoring the academic progress of students at STMIK Widya Cipta Dharma (WICIDA). By analyzing various factors such as grades, attendance, and extracurricular activities, the system provides insights into students' likelihood of graduating on time or experiencing delays.
                </p>
                <p>
                    This system leverages advanced algorithms and data mining techniques to offer timely alerts to educators and administrators, allowing for interventions that can help students improve their academic performance and achieve timely graduation.
                </p>
                </div>
            </main>

            <div className="about-container" data-aos="fade-up-right" data-aos-delay="2000">
                <h3> Model Used </h3>
                <p>Random Forest</p>
                <img src="https://qqzumjdawvvrqegltuqq.supabase.co/storage/v1/object/public/Fernandes/ab1.jpg?t=2024-11-13T03%3A39%3A24.034Z" alt="Description of the GIF" className="gif-image"></img>
            </div>
        </div>
    )
}

export default aboutPage