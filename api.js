let express = require('express')
let app = express()
let Db = require('./config/dbconfig')
let Order = require('./controller/order')
let cors = require('cors')
let bodyP = require('body-parser')
//let router = express.Router();
let {router} = require('./routes/routes')

app.use(bodyP.urlencoded({extended:true}))
app.use(bodyP.json());
app.use(cors())
app.use('/api',router)

router.use((req, res, next) => {
    console.log("middleware");
    next();
})

router.route('/orders').get((req,res) => {
    Db
})

let port = 8090
app.listen(port)
console.log("API rodando em " + port)