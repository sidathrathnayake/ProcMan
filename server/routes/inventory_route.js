const router = require("express").Router();

const Inventory = require("../models/inventory_model");

router.post("/insert-inventory", (req, res) => {
  
  const newInventory = new Inventory({
    item_name: req.body.item_name,
    item_description: req.body.item_description,
    site_name: req.body.site_name,
    item_capacity: req.body.item_capacity,
    available_quantity: req.body.available_quantity,
    measuring_unit: req.body.measuring_unit,
    unit_price: req.body.unit_price,
  });
  
  try {
    newInventory.save().then(() => {
      res.status(200).json("Inventory added successfully!");
      console.log("Inventory added successfully! " + newInventory);
    });
  } catch (error) {
    res.status(400).json(`Error While Adding A New Inventory! : ${error}`);
    console.log(error);
  }
  // const user = new Inventory(req.body);

  //   user.save((err) => {
  //       if(err){
  //           return next(new Error('Something went wrong!. Please check and try again.', 400));
  //       }
  //       return res.status(201).json({
  //           success: [true, 'Added successfully'],
  //           user
  //       });
  //   });
  console.log(req.body);
  
});

router.route("/get-all-inventories/:site_name").get((req, res) => {
  try {
    let site_name = req.params.site_name;
    Inventory.find({ site_name: site_name }).then((inventories) => {
      res.status(200).json(inventories);
      console.log(
        "All Inventories Belong To This Site Fetched! " + inventories
      );
    });
  } catch (error) {
    res.status(400).json(`Error While Fetching All Inventories! : ${error}`);
    console.log(`Error While Fetching All Inventories! : ${error}`);
  }
});

router.route("/get-one-inventory/:id").get(async (req, res) => {
  try {
    let inventory_id = req.params.id;
    const getoneinventory = await Inventory.findById(inventory_id).then(
      (get_one_inventory) => {
        res
          .status(200)
          .send({ status: "Single Inventory Fetched! ", get_one_inventory });
        console.log("Single Inventory Fetched! ", get_one_inventory);
      }
    );
  } catch (error) {
    res
      .status(400)
      .send({
        status: "Error While Fetching The Single Inventory! ",
        error: error.message,
      });
    console.log(`Error While Fetching The Single Inventory! ${error}`);
  }
});

router.route("/update-one-inventory/:id").put(async (req, res) => {
  try {
    let inventory_id = req.params.id;
    const getoneinventory = await Inventory.findByIdAndUpdate(
      inventory_id
    ).then((get_one_inventory) => {
      (get_one_inventory.item_name = req.body.item_name),
        (get_one_inventory.item_description = req.body.item_description),
        (get_one_inventory.site_name = req.body.site_name),
        (get_one_inventory.item_capacity = req.body.item_capacity),
        (get_one_inventory.available_quantity = 
          req.body.available_quantity
        ),
        (get_one_inventory.measuring_unit = req.body.measuring_unit),
        (get_one_inventory.unit_price = req.body.unit_price);

      get_one_inventory
        .save()
        .then(() => {
          res
            .status(200)
            .send({ status: "Single Inventory Updated! ", get_one_inventory });
          console.log("Single Inventory Updated! " + get_one_inventory);
        })
        .catch((error) => {
          res
            .status(400)
            .send({
              status: "Error While Fetching The Single Inventory! ",
              error: error.message,
            });
          console.log(`Error While Fetching The Single Inventory! ${error}`);
        });
    });
  } catch (error) {
    res
      .status(400)
      .send({
        status: "Error While Fetching The Single Inventory! ",
        error: error.message,
      });
    console.log(`Error While Fetching The Single Inventory! ${error}`);
  }
});

router.route("/delete-one-inventory/:id").delete(async (req, res) => {
  try {
    let inventory_id = req.params.id;
    const getoneinventory = await Inventory.findOneAndDelete({
      _id: inventory_id,
    }).then((get_one_inventory) => {
      res
        .status(200)
        .send({ status: "Favorite Inventory Deleted!", get_one_inventory });
      console.log("Favorite Inventory Deleted! " + get_one_inventory);
    });
  } catch (error) {
    res
      .status(400)
      .json(`Error While Deleting This Favorite Inventory! : ${error}`);
    console.log(`Error While Deleting This Favorite Inventory! : ${error}`);
  }
});

module.exports = router;
