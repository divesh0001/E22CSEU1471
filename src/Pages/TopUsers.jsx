import { useData } from '../Context/DataContext';
import UserCard from '../Components/UserCard';

function TopUsers() {
  const { users, posts } = useData();

  // Ensure users and posts are defined to avoid runtime errors
  if (!users || !posts) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Top Users</h1>
        <p>No data available.</p>
      </div>
    );
  }

  // Calculate post counts per user
  const postCounts = posts.reduce((acc, post) => {
    if (post.user?.id) {
      acc[post.user.id] = (acc[post.user.id] || 0) + 1;
    }
    return acc;
  }, {});

  // Get top 5 users based on post counts
  const topUsers = users
    .map(user => ({
      ...user,
      count: postCounts[user.id] || 0,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Top Users</h1>
      {topUsers.length > 0 ? (
        topUsers.map(user => (
          <UserCard key={user.id} user={user} count={user.count} />
        ))
      ) : (
        <p>No top users to display.</p>
      )}
    </div>
  );
}

export default TopUsers;