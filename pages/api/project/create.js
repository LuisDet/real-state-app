const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function createUser(req, res) {
  const { body } = req
  await prisma.project.create({
    data: {
      name: body.name,
      statusPromo: 'false',
      comission: body.comission,
      date: new Date(),
      clientCounter: 5
    }
  })

  return res.json({ Hola: 'hola' })
}
