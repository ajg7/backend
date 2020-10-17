const jwt = require("jsonwebtoken")
const secrets = require("./secrets");

module.exports = (request, response, next) => {
    const token = request.headers.authorization;

    if(token) {
        jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
            if(error) {
                response.status(401).json({ message : "forbidden path" })
            } else {
                request.jwt = decodedToken;
                next();
            }
        })
    } else {
        response.status(401).json({ message: "you shall not pass!" })
    }
} 