import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>
                Welcome,
                {user ? ` ${user.username}  to our website` : ` to our website`}
              </p>
              <h1>Why Choose Us? </h1>
              <p>
                <strong>👨‍💻 Expertise:</strong> I build full-stack web apps using MongoDB,
                 Express.js, React.js, and Node.js — always up-to-date with latest technologies.
              </p>
              <p>
          <strong>⚙️ Customization:</strong> Every project is tailored to fit your exact business needs.
              </p>
              <p>
                <strong>🎯 Client-First Approach:</strong> Your satisfaction is my top priority, 
                with clear communication and support throughout.
              </p>
              <p>
                <strong>💰 Affordable Pricing:</strong> Get the best quality work within your budget.
              </p>
              <p>
                <strong>🕒 Reliable Delivery:</strong> I ensure timely delivery and full support post-launch.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
