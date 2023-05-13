const db = require('../config/connection');
const { Profile } = require('../models');
const shapeSeeds = require('./shapeSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(shapeSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
