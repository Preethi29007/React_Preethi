import './MainContent.css';

const MainContent = () => {
  return (
    <div className="MainContent">
      <section className="hero">
        <h1>Welcome to E-Learning</h1>
        <p>Learn new skills anytime, anywhere. Start your journey today!</p>
        <button className="explore-btn">Explore Courses</button>
      </section>

      <section className="courses">
        <h2>Featured Courses</h2>
        <div className="course-list">
          <div className="course-card">
            <h3>Web Development Basics</h3>
            <p>Learn HTML, CSS, and JavaScript from scratch.</p>
          </div>
          <div className="course-card">
            <h3>Python Programming</h3>
            <p>Beginner-friendly Python course to kickstart coding.</p>
          </div>
          <div className="course-card">
            <h3>Data Science Essentials</h3>
            <p>Explore data analysis, visualization, and ML basics.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
