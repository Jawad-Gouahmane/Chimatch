const Resirvation = require("../models/Resirvation");

exports.addResirvation = async (req, res) => {
    if (
      req.body.name !== "" &&
      req.body.phone !== "" &&
      // req.body.categorie !=="" &&
      req.body.date !== "" &&
      req.body.stade !== "" 

    ) {
        Resirvation.create({
            name: req.body.name,
            phone: req.body.phone,
            // categorie:req.body.categorie,
            date: req.body.date,
            stade: req.body.stade


      })
      .then(() => {
        res.send("New Message inserted Succefully");
      })
      .catch((err) => {
        res.json({ error: err });
      });
    } else {
      return res.status(400).json({
        erreur: "fill all the fields",
      });
    }
  };


exports.getResirvation = (req, res) => {
  const id = req.params.id;
  Resirvation.findById(id, { include: Resirvation })
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Message with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Message with id=" + id,
      });
    });
};


exports.updateResirvation = async (req, res) => {
    const id = req.params.id;
    if (
        req.body.name !== "" &&
        req.body.phone !== "" &&
        req.body.categorie!==""&&
        req.body.date !== "" &&
        req.body.stade !== "" 
    ) {
      try {
        const updatedresirvation = await Resirvation.findOneAndUpdate(
          { _id: id }, // Assuming _id is the unique identifier for the product
          {
            name: req.body.name,
            phone: req.body.phone,
            categorie:req.body.categorie,
            date: req.body.date,
            stade: req.body.stade

          }
          ,
          { new: true } // Return the updated document
        )
        if (!updatedresirvation) {
          return res.status(404).json({ message: 'Resirvation not found' });
        }
        
        return res.status(200).json(updatedresirvation);
        // Handle the updated message as needed
      } catch (error) {
        console.error('Error updating Resirvation:', error);
        return res.status(500).json({ message: 'Error updating Resirvation', error: error });

      }
    } else {
      return res.status(400).json({
        erreur: "Fill all the fields",
      });
    }
  };


exports.showAllResirvation = async (req, res) => {
    try {
        const allResirvation= await Resirvation.find()
        return res.status(200).json(allResirvation);
        // Handle the retrieved messages as needed
    } catch (error) {
        console.error('Error getting messages:', error);
        return res.status(500).json({ message: 'Error retrieving resirvation', error: error });
    }
};


exports.deleteResirvation = (req, res) => {
    // Assuming your Message model has a field named "_id"
    Resirvation.findByIdAndDelete(req.params.id)
      .then((deleteResirvation) => {
        if (!deleteResirvation) {
          return res.status(404).send('Resirvation not found');
        }
        res.send('Resirvation Removed Successfully');
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      });
  };