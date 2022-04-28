const config = {
    user:'user',
    password:'foo',
    database: 'Products',
    options: {
        trustedconnection:  true,
        enableArithAbort:  true,
        instancename:  'SQLEXPRESS'  // SQL Server instance name
      },
    port: 55892 
}

module.exports = config;

