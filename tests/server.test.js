const supertest = require("supertest");
const server = require("../api/server");

const randomNum = Math.round(Math.random() * 900)
const username = `HailOmninyte4Ever${randomNum}`;
const password = "i<3Pokemon"

const user = {
    username: `${username}`,
    password: `${password}`
}

let token = "";

const editedArticle = {
    rank: randomNum
}

const savedArticleToBeDel = 3;

describe("server", () => {
    describe("GET", () => {
        it("should receive body with Frankenstein as key", () => {
            return supertest(server).get("/").then(response => {expect(response.body).toEqual({Frankenstein: "It's alive!"})})
        })
        it("fetches article data", () => {
            return supertest(server).get("/articles").then(response => {expect(response.status).toBe(200), expect(response.body).toBeDefined()})
        })
        it("saved articles cannot be fetched without authentication", () => {
            return supertest(server).get("/saved_articles").then(response => {expect(response.status).toBe(401)})
        })
        it("user can signup", () => {
            return supertest(server).post("/users/signup").send(user).then(response => {
                expect(response.status).toBe(201)
            })
        })
        it("saved articles with authentication can be fetched", () => {
            return supertest(server).post("/users/login").send(user).then(response => {
                expect(response.status).toBe(200);
                token = response.body.token;
            })
        })
        it("able to fetch saved articles", () => {
            return supertest(server).get("/saved_articles").set("Authorization", token).then(response => {
                expect(response.status).toBe(200), expect(response.body).toBeDefined()
            })
        })
        it("can edit articles", () => {
            return supertest(server).put("/articles/2").send(editedArticle).then(response => {
                expect(response.status).toBe(200)
            })
        })
        it("can delete saved articles", () => {
            return supertest(server).delete(`/saved_articles/${savedArticleToBeDel}`).set("Authorization", token).then(response => {
                expect(response.status).toBe(200)
            })
        })
    })
})