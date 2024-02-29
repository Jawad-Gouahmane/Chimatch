const express = require("express");
const router = express.Router();

const {
    addStade,
    updateStade,
    showAllStade,
    getStade,
    deleteStade
} = require("../controllers/stade");

router.post("/add", addStade);
router.put("/update/:id", updateStade);
router.get("/all", showAllStade);
router.get("/get/:id", getStade);
router.delete("/deleteStade/:id", deleteStade);

module.exports = router;