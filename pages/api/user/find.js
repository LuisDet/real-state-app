const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function createUser(req, res) {
  const users = await prisma.user.findMany()

  return res.json(users)
}
