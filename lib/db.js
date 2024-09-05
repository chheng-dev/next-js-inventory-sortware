// import { PrismaClient } from "@prisma/client";

// const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production")
//   globalThis.prisma == db;


// export default db;

import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export default db;