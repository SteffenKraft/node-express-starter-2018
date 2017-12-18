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
    const tagQuery = req.params.tag || { $exists: true }
    // get always all tags grouped and sorted
    const tagsPromise = Store.getStoresByTag();
    // get all stores by the tag param, no tag defined get all stores (tagQuery)
    const storesPromise = Store.find({ tags: tagQuery });
    // when both queries are done destructor into two arrays tags and stores
    const [ tags, stores ] = await Promise.all([tagsPromise, storesPromise]);
    // output json
    res.json({ tags, stores });
}
