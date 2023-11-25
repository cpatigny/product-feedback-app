import { prisma } from '@/src/lib/prisma';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import { ZodError, z } from 'zod';

const userSchema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have at least 8 characters'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: 'User with this email already exists',
        },
        { status: 409 },
      );
    }

    const existingUserByUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: 'User with this username already exists',
        },
        { status: 409 },
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: newUserPassword, ...newUserData } = newUser;

    return NextResponse.json(
      { user: newUserData, message: ['User created successfully'] },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: [...error.errors.map(err => err.message)] },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: ['Something went wrong'] },
      { status: 500 },
    );
  }
}
