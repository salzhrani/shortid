
// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */

var seed = 1;

module.exports = function random() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
};

module.exports.seed = function (_seed_) {
    seed = _seed_;
};