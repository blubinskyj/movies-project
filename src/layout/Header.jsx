function Header() {
  return (
    <nav className={"deep-purple darken-1"}>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/blubinskyj/movies-project">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
