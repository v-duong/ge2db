import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
  name: { type: 'String', required: true },
}, {collection: 'aragami2'});

export default mongoose.model('Monster', monsterSchema);
