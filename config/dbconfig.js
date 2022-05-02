const config = {
    user:'sa',
    password:'ev2ryday',
    server: '127.0.0.1',
    database: 'Products',
    options: {
        trustedconnection:  true,
        enableArithAbort:  true,
        trustServerCertificate: true,
        instancename:  'SQLEXPRESS'  // SQL Server instance name
      },
    port: 1433 
}

module.exports = config;

