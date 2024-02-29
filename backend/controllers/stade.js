const Stade = require("../models/Stade");

exports.addStade = async (req, res) => {
    if (
    
      req.body.stade !== "" 

    ) {
        Stade.create({
      stade: req.body.stade

      })
      .then(() => {
        res.send("Nouveau terrain ajouter");
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


exports.getStade = (req, res) => {
  const id = req.params.id;
  Stade.findById(id, { include: Stade })
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


exports.updateStade = async (req, res) => {
    const id = req.params.id;
    if (
    
        req.body.stade !== "" 
    ) {
      try {
        const updatedstade = await Stade.findOneAndUpdate(
          { _id: id }, // Assuming _id is the unique identifier for the product
          {
     
            stade: req.body.stade

          }
          ,
          { new: true } // Return the updated document
        )
        if (!updatedstade) {
          return res.status(404).json({ message: 'Stade non trouve' });
        }
        
        return res.status(200).json(updatedstade);
        // Handle the updated message as needed
      } catch (error) {
        console.error('Error updating Stade:', error);
        return res.status(500).json({ message: 'Error updating Stade', error: error });

      }
    } else {
      return res.status(400).json({
        erreur: "Fill all the fields",
      });
    }
  };


exports.showAllStade= async (req, res) => {
    try {
        const allStade= await Stade.find()
        return res.status(200).json(allStade);
        // Handle the retrieved messages as needed
    } catch (error) {
        console.error('Error getting messages:', error);
        return res.status(500).json({ message: 'Error retrieving resirvation', error: error });
    }
};


exports.deleteStade = (req, res) => {
    // Assuming your Message model has a field named "_id"
  Stade.findByIdAndDelete(req.params.id)
      .then((deleteStade) => {
        if (!deleteStade) {
          return res.status(404).send('Stade non trouve');
        }
        res.send('Stade supprime avec succes');
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      });
  };