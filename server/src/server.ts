// server.ts
import {Elysia} from 'elysia'
import { cors } from '@elysiajs/cors'

import {connectDatabase} from "./utils/connection";
import {DemoController} from "./controllers/demo";

connectDatabase();

const demoController = new DemoController();

const app = new Elysia()
    .use(cors())
    .get('/', () => `Welcome to Elysia`)
    .get('/hello',  async ({query: {name}}) => {
        return await demoController.searchUserByName(name ?? '');
    })
    .get('/view/:name',  ({params:{name}}) => `View now ${name}`)
    .listen(3001)
console.log('Server is running on port 3001');
export type ServerApp = typeof app
