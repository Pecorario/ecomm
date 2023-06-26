import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    nome: {
      type: String,
      minLength: [4, 'O nome deve ter mais de 3 caracteres'],
      required: [true, 'O nome é obrigatório'],
    },
    status: {
      type: String,
      enum: ['ATIVA', 'INATIVA'],
      default: 'ATIVA',
    },
  },
);

const categories = mongoose.model('categories', categorySchema);

export default categories;
