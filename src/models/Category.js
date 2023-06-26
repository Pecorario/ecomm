import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    nome: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['ATIVO', 'INATIVO'],
      default: 'ATIVO',
      required: true,
    },
  },
);

const categories = mongoose.model('categories', categorySchema);

export default categories;
