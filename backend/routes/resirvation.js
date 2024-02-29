const express = require("express");
const router = express.Router();

const {
    addResirvation,
    updateResirvation,
    showAllResirvation,
    getResirvation,
    deleteResirvation
} = require("../controllers/resirvation");

router.post("/add", addResirvation);
router.put("/update/:id", updateResirvation);
router.get("/all", showAllResirvation);
router.get("/get/:id", getResirvation);
router.delete("/deleteResirvation/:id", deleteResirvation);

module.exports = router;