const { db } = require('../config/conn');

module.exports = {
  // get all grades for gradebook page
  getAll() {
    db.many(`
      SELECT *
      FROM gradebook`);
  },

  // get grades for one dog
  // Displayed on puppyProfile page
  getOne(id) {
    db.one(`
      SELECT *
      FROM gradebook
      WHERE dogs_id = $1`, id);
  },
  // update grades for one dog
  // Accessed through puppyProfile page
  updateOne(data) {
    db.one(`
      UPDATE gradebook
      SET
      potty_traning = $/potty_training/
      stay = $/stay/
      leash_training = $/leash_training/
      sit = $/sit/
      quiet = $/quiet/
      leave_it = $/leave_it/
      comments = $/comments/
      WHERE dog_id = $/dog_id/`, data)
  },
};
