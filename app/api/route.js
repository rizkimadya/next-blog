// app/api/route.js
import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    nama: "Kurnia Andi Nugroho",
    email: "email@example.com",
    alamat: "Jl. Contoh No. 123",
  },
  {
    id: 2,
    nama: "Agni Rosyadi",
    email: "email@example.com",
    alamat: "Jl. Percobaan No. 456",
  },
];

export async function GET(request) {
  return NextResponse.json(users);
}
