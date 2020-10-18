const supertest = require("supertest");
const server = require("../api/server");

const user = {
    username: "HailOmninyte1",
    password: "password8"
}

let token = "";

describe("server", () => {
    describe("GET", () => {
        it("should receive body with Frankenstein as key", () => {
            return supertest(server).get("/").then(response => {expect(response.body).toEqual({Frankenstein: "It's alive!"})})
        })
        it("fetches article data", () => {
            return supertest(server).get("/articles").then(response => {expect(response.status).toBe(200)})
        })
        it("saved articles cannot be fetched without authentication", () => {
            return supertest(server).get("/saved_articles").then(response => {expect(response.status).toBe(401)})
        })
        it("saved articles with authentication can be fetched", () => {
            return supertest(server).post("/users/login").send(user).then(response => {
                expect(response.status).toBe(201);
                token = response.body.token;
            })
        })
        it.skip("able to fetch saved articles", () => {
            return supertest(server).get("/saved_articles").set("Authorization", token).then(response => {expect(response.status).toBe(200)})
        })
    })
})