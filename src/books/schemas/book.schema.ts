import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title: String, 
    autor: String,
    ISBN: String,
    price: Number
  }//, {
   // timestemps: true       <- Mostra quando foi criado
   //}
  
  );

  // const bookModel = model("Book", bookSchema) da pra fazer assim tbm

  export default model('Book', bookSchema)