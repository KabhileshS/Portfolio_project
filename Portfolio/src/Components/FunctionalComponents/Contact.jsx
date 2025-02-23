import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const styling = {
    container: {
      textAlign: "center", // Center the text and icons
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      display: "flex", // Use flexbox to align items horizontally
      justifyContent: "center", // Center the items horizontally
      gap: "20px", // Add space between the icons
    },
    icon: {
      fontSize: "50px", // Make the icons bigger
      textDecoration: "none", // Remove underline
      transition: "transform 0.3s ease"
    },
    iconHover: {
        transform: "scale(2)"
    },
  };

  return (
    <div style={styling.container}>
      <h1>This is my Contact</h1>
      <ol style={styling.list}>
        <li>
          <a
            href="https://github.com/KabhileshS"
            target="_blank"
            rel="noopener noreferrer"
            style={styling.icon}
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kabhilesh-s-1b227b25b/"
            target="_blank"
            rel="noopener noreferrer"
            style={styling.icon}
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:kabhilesh14@gmail.com" style={styling.icon}>
            <FaEnvelope />
            FaLi
          </a>
        </li>
      </ol>
      <h3>Contact Number : +91 7395992803</h3>
      
    </div>
  );
};

export default Contact;
