import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import { signupInput, signinInput } from '@chandraprakash1104/blogging-common';

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
userRouter.get('/a', (c) => c.json('list authors'));

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: 'Invalid inputs',
    });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    const token = await sign({ id: newUser.id }, c.env.JWT_SECRET);

    console.log('Success: User created', newUser);

    return c.json({
      message: 'User created successfully',
      email: newUser.email,
      token,
    });
  } catch (error) {
    console.error('Error creating user:', error);

    c.status(411);
    return c.json({
      message: 'Internal Server Error',
    });
  } finally {
    await prisma.$disconnect();
  }
});

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      message: 'Invalid data format',
    });
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!existingUser || body.password !== existingUser.password) {
      c.status(404);
      return c.json({
        message: 'Invalid email or password',
      });
    }

    const token = await sign({ id: existingUser.id }, c.env.JWT_SECRET);

    console.log('Success: User created', existingUser);

    return c.json({
      message: 'Logged In successfully',
      email: existingUser.email,
      token,
    });
  } catch (error) {
    console.error('Error creating user:', error);

    c.status(500);
    return c.json({
      message: 'Internal Server Error',
    });
  } finally {
    await prisma.$disconnect();
  }
});

export default userRouter;
