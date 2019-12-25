const { Link } = ReactRouterDOM;
export default function () {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="nav-container flex totally-center">
          <Link className="nav-bar-item" to="/">Home</Link>
          <Link className="nav-bar-item" to="/book">MissBook</Link>
          <Link className="nav-bar-item" to="/keep">MisterKeep</Link>
          <Link className="nav-bar-item" to="/mail">MisterMail</Link>
        </div>
      </div>
    </div>
  )
}