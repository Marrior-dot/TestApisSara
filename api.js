let Db = require('./model/operation')
let Order = require('./controller/order')
let express = require('express')
let cors = require('cors')
let bodyP = require('body-parser')
let app = express()
let {router} = require('./routes/routes')

app.use(bodyP.urlencoded({extended:true}))
app.use(bodyP.json());
app.use(cors())
app.use('/api',router)

router.use((req, res, next) => {
    console.log("middleware");
    next();
})

//Fazendo fetch dos dados da requisição, o método getOrders possui um select na sql
router.route('/orders').get((req,res) => {
    Db.getOrders().then((data) => {
        res.json(data[0]);
    })
})
//Lendo o q se encontra no corpo da requisição e inserindo no banco de dados, 
//o método addOrder possui vários inputs dentro
router.route('/orders').post((req, res) => {
    let order = {...req.body}
    Db.addOrder(order).then((data) => {
        res.status(201).json(data);
    })
})

router.route('/orders/:id').get((req, res) => {
    Db.getOrder(req.params.id).then((data) => {
      res.json(data[0]);
    })
  })
  
let port = 8090
app.listen(port)
console.log("API rodando em " + port)