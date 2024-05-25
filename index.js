const jsonServer = require('json-server')
const empServer =jsonServer.create()
const router= jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const port = 4000 || process.env.PORT
empServer.use(middleware)
empServer.use(router)

empServer.listen(port,()=>{
    console.log(`employee portal server running successfully at port number : ${port} `);
})
