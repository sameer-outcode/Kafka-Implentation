const { kafka } = require('./kafka')
async function init() {
    const producer = kafka.producer()
    console.log("Connecting producer")
    await producer.connect()
    await producer.send({
        topic: "rider-updates",
        messages: [
            {
                key: 'location-update', value: JSON.stringify({ name: 'Tony Stark', loc: 'Hyderabad', partition: 0 })
            }
        ]

    })
    console.log("Connected ")
    await producer.disconnect()
}

init()
