const jsonServer=require('json-server')

const doctServer=jsonServer.create()

const router=jsonServer.router('db.json')

const middleware=jsonServer.defaults()

const port=3001

doctServer.use(middleware)
doctServer.use(router)

doctServer.listen(port,()=>{
    console.log('Doct server listening on port'+port);
})