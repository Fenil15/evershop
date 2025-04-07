const { buildUrl } = require("@evershop/evershop/src/lib/router/buildUrl");

module.exports = (request, response, delegate, next) => {
    const ageVerifyCookie = request.cookies['age-verified'];
    if(!ageVerifyCookie || parseInt(ageVerifyCookie) !== 1) {
        const {currentRoute} = request;

        if(currentRoute.id === "agechecker" || currentRoute.id === "ageverifyfailed") {
            return next();
        } else {
            return response.redirect(buildUrl("agechecker"))
        }
    } else {
        return next();
    }
}