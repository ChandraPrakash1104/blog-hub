import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { verify } from 'hono/jwt';
import {
  createBlogInput,
  updateBlogInput,
} from '@chandraprakash1104/blogging-common';

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use('/*', async (c, next) => {
  const authHeader = c.req.header('authorization') || '';

  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);

    if (user) {
      c.set('userId', user.id);
    } else {
      c.status(403);
      return c.json({ message: 'You are not logged in' });
    }
  } catch (e) {
    c.status(403);
    return c.json({ message: 'You are not logged in' });
  }

  await next();
});

blogRouter.post('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const authorId = c.get('userId');

  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      message: 'Invalid data format',
    });
  }

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId,
      published: body.published,
    },
  });
  return c.json({
    id: blog.id,
  });
});

blogRouter.put('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      message: 'Invalid data format',
    });
  }

  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
    },
  });

  return c.json({
    id: blog.id,
  });
});

blogRouter.get('/bulk', async (c) => {
  const page = parseInt(c.req.query('page')|| '1', 10);
  const limit = parseInt(c.req.query('limit') || '10', 10);
  const skip = (page - 1) * limit;
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.blog.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return c.json({
    blogs,
  });
});

blogRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blog,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: 'Error while fetching blog post',
    });
  }
});

export default blogRouter;
