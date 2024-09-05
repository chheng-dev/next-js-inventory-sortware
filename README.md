This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### Prisma ORM

Add Prisma ORM to your application in a few minutes to start modeling your data, run schema migrations and query your database.

1/ install the Prisma CLI as a development dependency in the project:
for this we example for mongodb

```  ssh
npx prisma init --datasource-provider mongodb
```

2/ migrate db 

``` ssh
  npx prisma generate 
```

3/ create table 

``` ssh 
   npx prisma db push 
```

Here is sample for create table

``` ssh
model Category {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String?
}
```

4/ prisma studio
``` ssh 
  npx prisma studio   
```

For More Details, 
``` ssh 
  https://www.prisma.io/docs/getting-started/quickstart
```

If missing format using this:

``` 
  npx prisma format
````