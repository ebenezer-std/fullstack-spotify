import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songsData";

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    artistsData.map((item) => {
      return prisma.artist.upsert({
        where: { name: item.name },
        update: {},
        create: {
          name: item.name,
          songs: {
            create: item.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
            })),
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
