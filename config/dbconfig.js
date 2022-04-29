const config = {
    user:'sa',
    password:'ev2ryday',
    server: '127.17.0.2',
    database: 'Products',
    options: {
        trustedconnection:  true,
        enableArithAbort:  true,
        instancename:  'SQLEXPRESS'  // SQL Server instance name
      },
    port: 1433 
}

module.exports = config;

