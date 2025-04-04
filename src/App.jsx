import { Routes, Route } from 'react-router-dom'
import TopUsers from './pages/TopUsers'
import TrendingPosts from './pages/TrendingPosts'
import Feed from './pages/Feed'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending-posts" element={<TrendingPosts />} />
      </Routes>
    </div>
  )
}

export default App
