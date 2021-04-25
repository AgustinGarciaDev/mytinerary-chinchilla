const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    nombreItinerary: { type: String , required: true},
    authorName: { type: String , required: true },
    authorPic: { type: String, required: true },
    precie: { type: Number, required: true, min: 1, max: 5 },
    duration: {type:Number},
    likes: { type: Number , default:0 },
    userLiked: [{ type: String }],
    hastag: [{ type: String, required: true}],
    idCity: { type:mongoose.Types.ObjectId, ref:'city'  },
    comments: [{ userId:{type:mongoose.Types.ObjectId, ref:'user' }, comment: { type: String } }],
    picBanner: [{ type: String, required: true }],
    countryCoin:[{ type: String, required: true }],
    offered:[{ type: String, required: true }],
})


const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports =Itinerary

