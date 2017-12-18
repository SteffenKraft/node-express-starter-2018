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
