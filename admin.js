const { Kafka } = require('kafkajs')
const { kafka } = require('./kafka')

async function init() {
    const admin = kafka.admin();
    await admin.connect()
    console.log("Connected Admin...")

    admin.createTopics({
        topics: [{
            topic: 'rider-updates',
            numPartitions: 2
        }]
    }).then((d) => {
        console.log("Created suceessfuly")
    }).catch((err) => {
        console.log("Already exists")
    })
    await admin.disconnect()
}

init()