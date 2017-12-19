const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    res.json({ name: "hans", cool: true });
}

exports.createStore = async (req, res) => {
    const store = new Store(req.body);
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
        req.body,
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

exports.searchStores = async (req, res) => {
    const stores = await Store
    // first find stores that match
    .find({
      $text: {
        $search: req.query.q
      }
    }, {
      score: { $meta: 'textScore' }
    })
    // the sort them
    .sort({
      score: { $meta: 'textScore' }
    })
    // limit to only 5 results
    .limit(5);

    res.json(stores);
  };
