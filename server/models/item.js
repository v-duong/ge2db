import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: 'String', required: true },
}, {collection: 'items'});

export default mongoose.model('Item', itemSchema);
