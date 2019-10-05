require('dotenv').config({path:'variables.env'});
const CreateServer=require('./createServer');
const db=require('./db');

const server=CreateServer()

//TODO use express middleware to handle cookies (JWT)
//TODO use express middleware to populate current user

server.start({
    cors:{
        credntials:true,
        origin:process.env.FRONTEND_URL,
    },

},deets=>{
    console.log(`Server is running on http://localhost/${deets.port}`)
}

)