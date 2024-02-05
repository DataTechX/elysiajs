import { Elysia } from "elysia";
import rootRouter from './router/root';
import { cors } from '@elysiajs/cors'
const app = new Elysia()

app
  .use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    credentials: true,

  }))
  .group('/api/v1', (router) => router.use(rootRouter))
  .listen(process.env.PORT || 3048)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
