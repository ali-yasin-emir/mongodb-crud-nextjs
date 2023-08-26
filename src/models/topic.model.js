import mongoose, {Schema} from 'mongoose'

const topicSchema = new Schema({
    title: String,
    description: String
},
{
    timestamps: true
})


export default mongoose.models.Topic || mongoose.model('Topic', topicSchema)
