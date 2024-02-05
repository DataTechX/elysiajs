import { Elysia } from 'elysia'

const rootRouter = new Elysia({prefix:'/get'})
.get('/', () =>  'Hello, World!')


export default rootRouter