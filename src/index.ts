import express from 'express'


const app = express()

app.set( 'view engine', 'pug' )

app.get( '/', (req, res) => {
  res.render( 'index', { title: 'Express' } )
} )

const port = 8000

app.listen( port, () => console.log(`server started on port ${port}`) )