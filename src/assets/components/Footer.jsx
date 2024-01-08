import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="container">
      Made with React at Le{" "}
      <a href="https://www.lereacteur.io/" target="_blank">
        Reacteur
      </a>{" "}
      by{" "}
      <a href="https://github.com/jonathanValere" target="_blank">
        Jonathan
      </a>
    </footer>
  );
}
