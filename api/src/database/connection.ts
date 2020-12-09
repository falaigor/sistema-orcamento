import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/orcamento', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conecxão com o Banco de Dados realizada com sucesso');
}).catch((err) => {
  console.log("Erro na conecxão com o Bando de Dados " + err);
});
