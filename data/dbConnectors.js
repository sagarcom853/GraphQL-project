import mongoose from "mongoose";

async function connectMongo() {
    try {
        await mongoose.connect('mongodb://localhost/widgets',{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            family: 4,
        }
        )
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectMongo();

const widgetsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    soldout: String,
    inventory: String,
    stores: Array
});

const Widgets = mongoose.model('widgets', widgetsSchema);
export { Widgets, connectMongo };
