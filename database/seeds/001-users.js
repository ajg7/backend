exports.seed = function (knex) {
  const users = [
    {
      username: "HailOmninyte1",
      password: "password8"
    },
    {
      username: "GottaCatchEmAll5278",
      password: "password12345"
    }
  ]

  return knex("users").insert(users)
}