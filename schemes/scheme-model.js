const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  //   findSteps
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

// function findSteps(id){

//     return db('steps')
//     .join('schemes','steps.scheme_id','schemes.id')
//     .where('steps.scheme_id' , '=' , id)
// }

//must destructure array ID

async function add(scheme) {
  const [id] = await db("schemes").insert(scheme);
  return findById(id);
}

async function update(changes, id) {
  await db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
