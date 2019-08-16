const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
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

function findSteps(id) {
  // get all cols from steps
  return (
    db("steps as st")
      // joins in scheme to steps table
      .join("schemes as sch", "st.scheme_id", "sch.id")
      // selects all cols without scheme table id
      .select("st.id", "st.step_number", "st.instructions", "sch.scheme_name")
      // sort by scheme id, if scheme.id === id then return
      .where("sch.id", id)
  );
}

// function findSteps(scheme_id) {
//   return db("steps")
//     .join("schemes")
//     .where({ scheme_id });
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
