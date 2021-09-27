import fetchUsers from 'fetchUsers'

export default async function handler(req, res) {
  const users = await fetchUsers.getData()
  return users
}


