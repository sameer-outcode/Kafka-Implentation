const { kafka } = require('./kafka')

async function init() {
    const consumer = kafka.consumer({ groupId: "user-1" })
    await consumer.connect()
    await consumer.subscribe({
        topics: ["rider-updates"],
        fromBeginning: true
    })



    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`[${topic}]: PART:${partition}: ${message.value.toString()}`)
        }
    })

    await consumer.seek({ topic: "rider-updates", partition: 0, offset: 0 }); // Seek to the beginning of partition 0

}

init()