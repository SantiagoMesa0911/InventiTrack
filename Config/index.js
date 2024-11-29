require('dotenv').config()

const config={
    port:process.env.PORT,
    dbUsername:process.env.DB_USERNAME,
    dbPassword:process.env.DB_PASSWORD,
    dbHost:process.env.DB_HOST,
    dbName:process.env.DB_NAME,
    urlcors:process.env.URL_CORS,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY

}

module.exports=config