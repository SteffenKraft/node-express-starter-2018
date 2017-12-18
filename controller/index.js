const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    res.json({ name: "hans", cool: true });
}

exports.createStore = async (req, res) => {
    const store = new Store({
        name: 'shop Name',
        description: 'description sfsda fdsa g dasg sad g',
        tags: ['shoes', 'shorts', 'underwear']
    });
    await store.save();
    res.redirect('/');
};

exports.getStores = async (req, res) => {
    const stores = await Store.find();
    res.json(stores);
}

exports.getStoreById = async (req, res) => {
    const store = await Store.findOne({ _id: req.params.id });
    res.json(store);
}

exports.editStore = async (req, res) => {
    const store = await Store.findOneAndUpdate(
        { _id: req.params.id }, // query selector
        {
            name: 'new shop Name',
            description: 'nwe description sfsda fdsa g dasg sad g',
            tags: ['new', 'shoes', 'shorts', 'underwear']
        }, // new object values
        {
            new: true, // retrun new store instead of old one
            runValidators: true // run all required, trim etc of the Store model again
        }, // options
    ).exec(); // execute the update
    res.json(store);
}

exports.getStoresByTag = async (req, res) => {
    const tags = await Store.getStoresByTag();
    res.json(tags);
}
