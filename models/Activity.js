const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({
    activities: [{ title: { type: String }, pic: { type: String }, }],
    idItinerary: { type: mongoose.Types.ObjectId, ref: 'itineray' }
})

const Activity = mongoose.model('activity', activitySchema)
module.exports = Activity