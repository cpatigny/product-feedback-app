'use server';

import { prisma } from '@/src/lib/prisma';
import { hash } from 'bcrypt';
import { z } from 'zod';

export async function checkEmailAvailability(email: string) {
  const existingUserByEmail = await prisma.user.findUnique({
    where: { email },
  });

  return !existingUserByEmail;
}

export async function checkUsernameAvailability(username: string) {
  const existingUserByUsername = await prisma.user.findUnique({
    where: { username },
  });

  return !existingUserByUsername;
}

const userSchema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have at least 8 characters'),
});

export async function createUser(formData: FormData) {
  try {
    const userFormData = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const result = userSchema.safeParse(userFormData);
    if (!result.success) {
      return { error: true, message: 'Invalid form data' };
    }

    const { username, email, password } = result.data;

    const isEmailAvailable = await checkEmailAvailability(email);
    if (!isEmailAvailable) {
      return { error: true, message: 'User with this email already exists' };
    }

    const isUserNameAvailable = await checkUsernameAvailability(username);
    if (!isUserNameAvailable) {
      return { error: true, message: 'User with this username already exists' };
    }

    const hashedPassword = await hash(password, 10);
    await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    return { error: false, message: 'User has been created successfully' };
  } catch (error) {
    return { error: true, message: 'Something went wrong' };
  }
}
