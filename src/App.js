import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Others from "./components/Others";
import Footer from "./components/Footer"

function App() {
  // let skills=""
  return (
    <div className="App bg-dark-subtle text-emphasis-dark">
      <Navbar />
      <About />
      <Others
        title="Skills"
        details="Skills

My skill set includes:

Problem Solving: I thrive on challenges and enjoy finding elegant solutions to intricate problems. My logical approach to breaking down problems and my ability to think critically have been instrumental in my academic and professional endeavors.

Web Development: I have a strong command of front-end technologies, including HTML and CSS, which enable me to craft visually appealing and responsive user interfaces. Additionally, I am proficient in React, a powerful JavaScript library, allowing me to build interactive and dynamic web applications."
      />

      <Others
        title="Passion for Web Development"
        details="My journey into web development began with a fascination for how websites and applications shape our digital experiences. I believe that a well-designed website is not just a digital presence but a gateway to connect with users. I am constantly exploring the latest trends and technologies to enhance my skills and create web solutions that leave a lasting impression.

"
      />
      <Others
        title="Collaboration and Learning"
        details="I value collaboration and enjoy working in a team environment. I believe that the exchange of ideas and knowledge is essential for personal and professional growth. I am always eager to learn from others and contribute my expertise to achieve common goals."
      />

      <Others
        title="Athletics and Leadership"
        details="Beyond the world of coding, I have a proud history in athletics. I represented my state in the 100m event, competing at the highest levels of sports. This experience taught me the value of discipline, dedication, and pushing my limits to achieve excellence.

In addition to athletics, I also served as the General Secretary of my school. This role allowed me to develop strong leadership skills, effectively communicate with peers, and organize events that contributed to the overall growth of the school community.

"
      />

      <Others
        title="Conclusion"
        details="As I continue to evolve in the field of web development, my goal is to combine my problem-solving skills with my passion for creating beautiful and functional web applications. I am excited about the endless possibilities that lie ahead and look forward to contributing my skills to projects that make a positive impact.

Thank you for visiting my portfolio, and I hope you enjoy exploring my work. If you have any questions or would like to collaborate, please feel free to reach out to m."
      />

      <Footer/>
    </div>



  );
}

export default App;
