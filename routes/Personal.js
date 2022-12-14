const {Router} = require("express")
const {addPersonal,deletePersonalById,updatePersonalByID, getPersonalID, getPersonal} = require("../controllers/Personal")
const router = Router()

///POST///
router.post("/", addPersonal)
router.post("/id/:id", updatePersonalByID)

///GET///
router.get("/id/:id", getPersonalID)
router.get("/", getPersonal)

///DELETE///
router.delete("/id/:id", deletePersonalById)

module.exports = router