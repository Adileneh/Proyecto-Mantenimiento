const {Router} = require("express")
const {addSolicitud,deleteSolicitudById,updateSolicitudByID, getSolicitud, getSolicitudByID} = require("../controllers/Solicitud")
const router = Router()

///POST///
router.post("/", addSolicitud)
router.post("/id/:id", updateSolicitudByID)

///GET///
router.get("/", getSolicitud)
router.get("/id/:id", getSolicitudByID)
///DELETE///
router.delete("/id/:id", deleteSolicitudById)

module.exports = router