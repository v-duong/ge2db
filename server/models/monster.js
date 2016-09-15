import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
  name: { type: 'String', required: true },
}, {collection: 'aragami'});

export default mongoose.model('Monster', monsterSchema);
