const reminder = require('../../db').reminder;

const getReminders = async (req, res) => {
    try {
        let db = await reminder.findAll({ where: { user: req.body.user } })
        if (db[0]) {
            res.send({ status: 'found', data: db })
        } else {
            res.send({ status: 'not found' })
        }
    } catch (err) {
        console.log('err');
        res.send(err)
    }
}

module.exports = getReminders;
