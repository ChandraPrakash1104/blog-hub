import { Hono } from 'hono';
import { cors } from 'hono/cors';

import user from './routes/user';
import blog from './routes/blog';

const app = new Hono();

app.use('/api/*', cors());

app.route('/api/v1/user', user);
app.route('/api/v1/blog', blog);

app.get('/api/v1', (c) => c.json('list authors'));

export default app;
