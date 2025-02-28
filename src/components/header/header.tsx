import './header.css';

export default function Header() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#tools">Tools</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="mailto:leo.ereno@outlook.com">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
