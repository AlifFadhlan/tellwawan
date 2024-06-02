export { GET, POST } from "@/auth";

// import { PrismaAdapter } from "@auth/prisma-adapter";
// import NextAuth from "next-auth";
// import prisma from "@/lib/prisma";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         console.log({ credentials });
//         return null;
//       },
//     }),
//   ],
// });
// export { handler as GET, handler as POST };
