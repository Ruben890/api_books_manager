const  app  = require('./app.js')
const sequelize = require('./databases/database.js')

const main = async () => {
    try {
        await sequelize.sync({ force: false })
        app.listen(app.get('port'), () => {
            console.log(`http://localhost:${app.get("port")}/api-v1-docs/`)
        })
    } catch (err) {
        console.error(err)
    }
}

main()


