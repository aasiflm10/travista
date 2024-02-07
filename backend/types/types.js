const zod = require("zod");

const createDestination = zod.object({
    title : zod.string(),
    description : zod.string(),
    location : zod.string(),
    imageLink : zod.string()
});

const updateDestination = zod.object({
    id : zod.string(),
})

module.exports = {
    createDestination : createDestination, 
    updateDestination : updateDestination
}