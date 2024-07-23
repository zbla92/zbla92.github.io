// app/page.js
import styles from './page.module.css'; // Import styles

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Experienced React Native and React Software Engineer</h1>
          <p>
            With over 6 years of experience in frontend development, I specialize in building high-performance,
            responsive mobile applications using React Native and creating dynamic user interfaces with React. Skilled
            in JavaScript, Redux, and other popular frontend technologies. Also experienced in building backend services
            with Node.js and Express. I’ve led teams and am dedicated to delivering high-quality, user-centered
            products.
          </p>
          <a href="#experience" className={styles.cta}>
            See My Experience
          </a>
        </div>
      </section>

      <section id="experience" className={styles.experience}>
        <h2>Experience</h2>
        <div className={styles.job}>
          <h3>Additiv</h3>
          <p>
            <strong>Software Engineer</strong> (Apr 2023 - Present)
          </p>
          <p>
            Lead engineer in a white-label project for wealth management. Used React Native, Expo (with native modules),
            and Apollo-GraphQL. Implemented multiple native modules and managed the deployment process.
          </p>
        </div>
        <div className={styles.job}>
          <h3>SPARWK AS</h3>
          <p>
            <strong>Software Engineer</strong> (Sep 2022 - Feb 2023)
          </p>
          <p>
            Built an MVP for a company in the music industry. Worked on identity verification and push notifications
            with React Native. Key technologies included Ondifo - Signicat, OneSignal, and Bitrise.
          </p>
        </div>
        <div className={styles.job}>
          <h3>VIVANT</h3>
          <p>
            <strong>Lead Software Engineer</strong> (Sep 2021 - Sep 2022)
          </p>
          <p>
            Architected and led the development of a React Native application for video streaming. Managed a team of
            10-15 engineers, optimized app performance, and implemented cross-technology component logic.
          </p>
        </div>
        <div className={styles.job}>
          <h3>Previous Role</h3>
          <p>
            <strong>Software Engineer</strong> (Mar 2019 - Sep 2021)
          </p>
          <p>
            Developed React Native and React applications, optimized video streaming performance, and built deployment
            pipelines. Worked with React Native, Redux, Socket.io, webRTC, and RESTful APIs.
          </p>
        </div>
      </section>
    </div>
  );
}
