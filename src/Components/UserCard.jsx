function UserCard({ user, count }) {
    const randomImages = [
      'https://picsum.photos/seed/user1/100/100',
      'https://picsum.photos/seed/user2/100/100',
      'https://picsum.photos/seed/user3/100/100',
    ]
    const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)]
  
    return (
      <div className="flex items-center bg-white shadow rounded p-4 mb-3">
        <img src={randomImage} alt="User" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-gray-500 text-sm">{count} posts</p>
        </div>
      </div>
    )
  }
  
  export default UserCard
  