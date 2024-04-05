import { PrismaClient } from "@prisma/client";
import * as readline from 'readline';
import { Prisma } from '@prisma/client';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prisma = new PrismaClient();

async function main() {
    // const race = await prisma.race.create({
    //     data: {
    //         name: 'Seattle Fun Run',
    //         distance: 3.1,
    //     }
    // });

    // console.log(race);

    // prompt the user for a name
    rl.question('Enter the name of the race: ', async (name) => {
        const query = 'SELECT * FROM Race WHERE name = "' + name + '"';
        const prismaQuery = Prisma.raw(query);
        const result = await prisma.$queryRaw(prismaQuery);
        console.log(result);
        rl.close();
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });