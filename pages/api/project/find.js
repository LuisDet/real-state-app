const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function findProject(req, res) {
  const users = await prisma.project.findMany({
    orderBy: { id: 'desc' }
  })
  return res.json(users)
}
1
