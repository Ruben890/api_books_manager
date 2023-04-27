const app = require('./app.js')
const sequelize = require('./databases/database.js')

const main = async () => {

    try {
        await sequelize.sync({ force: false })
        app.listen(app.get('port'), () => {
            console.log(`Server running on port ${app.get('port')}`)
        })
    } catch (err) {
        console.error(err)
    }
}

main()