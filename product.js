const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log(" CONNECTION OPEN!!! ")
    })
    .catch(err => {
        console.log(" OH NO ERROR!!! ")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20 // this is an example of mongoose validators
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [1, 'Price too low']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty:{
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})




// MODEL INSTANCE METHODS
productSchema.methods.greet = function () {
    console.log("HELLO HI!! ")
}


productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale
    return this.save()
}
productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

//MODEL STATIC METHOD
productSchema.statics.fireSale = function (){
    return this.updateMany({},{ onSale: true, price:0 })
}






const Product = mongoose.model('Product', productSchema);



const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct);
}

//findProduct()

Product.fireSale().then(res => console.log(res))












// const bike = new Product({name: 'Tire pump', price: 19.5, categories: ['safety','cycling']})
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err =>{
//         console.log("OH NO ERROR!!!")
//         console.log(err)
//     })



// Product.findOneAndUpdate({name: 'Tire pump'}, { price: -30.4}, {new: true, runValidators: true}) // new is set to true, so that the updated entry will show... runValidators is set to true so that the update function runs the validators on the new entry
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err =>{
//         console.log("OH NO ERROR!!!")
//         console.log(err)
//     })