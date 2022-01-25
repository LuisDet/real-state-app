const { PrismaClient } = require('@prisma/client')

export default async function createUser(req, res) {
  const prisma = new PrismaClient()

  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io'
    }
  })
  const users = await prisma.user.findMany()

  return res.json(users)
}
