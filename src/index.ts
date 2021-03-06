import express from 'express'
import cors from 'cors'
import { getAllJobs } from './endpoints/getAllJobs'
import { getJobByProvider } from './endpoints/getJobByProvider'
import { createJob } from   './endpoints/createJob'
import { getJob } from './endpoints/getJob'
import { getUserById } from './endpoints/getUserById'
import { getJobById } from './endpoints/getJobById'
import { hiredByClient} from './endpoints/hiredByClient'
import { hiredByProvider } from './endpoints/hiredByProvider'
import { createUser } from './endpoints/createUser'
import { login } from './endpoints/login'
import { updateUser } from './endpoints/updateUser'



const app = express()
app.use(express.json())
app.use(cors())


app.get('/jobs', getAllJobs)
app.get('/provider/jobs/:id', getJobByProvider)
app.get('/job/:id', getJobById)
app.get('/hired/:id', hiredByClient)
app.get('/provider/:id', hiredByProvider)
app.get('/user/:id', getUserById)
app.post('/signin', createUser)
app.post('/login', login)
app.put('/user/:id', updateUser)
app.post('/jobs', createJob)
app.post('/job/:id', getJob)





app.listen(process.env.PORT || 3003, ()=>{
  console.log('Server runing at http://localhost:3003')
})
