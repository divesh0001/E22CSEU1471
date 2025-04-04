import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <h1 className="text-xl font-bold">Social Media Analytics</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-500">Feed</Link>
          <Link to="/top-users" className="text-blue-500">Top Users</Link>
          <Link to="/trending-posts" className="text-blue-500">Trending Posts</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
