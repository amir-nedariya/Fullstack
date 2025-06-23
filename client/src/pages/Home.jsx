import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>🚀 Full Stack Web Developer</p>
              <h1>Hi, I'm Nedariya Amir</h1>
              <p>
                I build scalable and responsive web applications using the MERN
                stack (MongoDB, Express.js, React, Node.js). From idea to
                deployment, I deliver complete web solutions for modern
                businesses.

              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Hire Me</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">View Projects</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>Let's Build Together</p>
            <h1>Have a Project in Mind?</h1>
            <p>
              Whether it's a portfolio, an eCommerce app, or a custom dashboard, I can turn your idea into reality using the MERN stack.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Let's Connect </button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">Explore Services</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
