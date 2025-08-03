import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 기본 템플릿 생성
  const template1 = await prisma.template.upsert({
    where: { id: 'template-classic' },
    update: {},
    create: {
      id: 'template-classic',
      name: '클래식',
      description: '깔끔하고 우아한 클래식 템플릿',
      thumbnail: '/templates/classic.jpg',
      isActive: true,
    },
  })

  const template2 = await prisma.template.upsert({
    where: { id: 'template-modern' },
    update: {},
    create: {
      id: 'template-modern',
      name: '모던',
      description: '세련되고 심플한 모던 템플릿',
      thumbnail: '/templates/modern.jpg',
      isActive: true,
    },
  })

  console.log('✅ 시드 데이터 생성 완료')
  console.log({ template1, template2 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })