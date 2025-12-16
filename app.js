export default function getUser(userId) {
  if (!userId) {
    return { status: 400, message: 'User ID required' };
  }

  return { status: 200, user: { id: userId, name: 'Ganesh' } };
}

console.log(getUser(0))

