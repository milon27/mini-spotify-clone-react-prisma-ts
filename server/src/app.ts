import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import ErrorMid from './routers/middlewares/ErrorMid'


//init
dotenv.config()
const app = express()

//middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieparser())
app.use(cors({ origin: true, credentials: true }))

//routers
app.get('/', (req, res) => res.send(`Running app in ${process.env.NODE_ENV}.. 🚀`))

app.use(ErrorMid)

const port = process.env.PORT || 2828
app.listen(port, () => console.log(`Server Running on PORT ${port}`))