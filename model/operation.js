let config = require('./dbconfig')
const sql = require('mssql')

async  function  getOrders(){
    try {
      
      let  pool = await  sql.connect(config);//COnexão com o banco
      
      let  products = await  pool.request().query("SELECT * from Orders");//Usa a conexão do banco para a realização da query
      return  products.recordsets; //Retorna o resultado da query em um array
    }
    catch (error) {
      console.log(error);
    }
  }

  async function getOrder(productId){
    try{
      let pool = await sql.connect(config)
      let product = await pool.request()
      .input('input_parameter', sql.Int, productId)
      .query("SELECT * FROM Orders WHERE Id = @input_parameter")
      return product.recordsets
    }
    catch(error){
      console.log(error)
    }
  }

  async function addOrder(order){

    try{
      let pool = await sql.connect(config)
      let insertProduct = await pool.request()
      .input('Id', sql.Int,order.Id)
      .input('Title', sql.VarChar,order.Title)
      .input('Quantity', sql.Int,order.Quantity)
      .input('Message', sql.VarChar,order.Message)
      .input('City', sql.VarChar,order.City)
      .execute('InsertOrders')
      return insertProduct.recordsets 
    }
    catch(error){
      console.log(error)
    }
  }

  module.exports = {
    getOrders : getOrders,
    getOrder: getOrder,
    addOrder: addOrder
  }