// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// export const GET = async (req, res) => {
//   try {
//     let { searchParams } = new URL(req.url);
//     let id = parseInt(searchParams.get("id"));

//     let PRISMA = new PrismaClient();
//     let result = await PRISMA.users.findFirst({
//       where: { id },
//     });

//     PRISMA.$disconnect(); // Close the Prisma client connection
//     return NextResponse.json({
//       status: "Success",
//       data: result,
//     });
//   } catch (error) {
//     // Handle errors
//     console.error("Error:", error);
//     return NextResponse.error({
//       status: "Error",
//       message: "An error occurred while processing the request.",
//     });
//   }
// };
