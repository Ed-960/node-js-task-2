import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      firstName: `Name${i}`,
      lastName: `Surname${i}`,
      age: Math.floor(Math.random() * 60) + 18,
      gender: i % 2 === 0 ? 'male' : 'female',
      hasProblems: Math.random() > 0.5,
    });
  }

  await prisma.user.createMany({
    data: users,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
