const router = require("express").Router();

const Purchase_order = require("../models/purchase_order_model");

const rn = require("random-number");

router.post("/site-manager-approve", (req, res) => {
  var gen = rn.generator({
    min: 0,
    max: 9999,
    integer: true,
  });

  const newOrderPurchase = new Purchase_order({
    order_id: "ORD" + gen(),
    item_name: req.body.item_name,
    supplier_name: req.body.supplier_name,
    site_name: req.body.site_name,
    priority: req.body.priority,
    measuring_unit: req.body.measuring_unit,
    required_quantities: req.body.required_quantities,
    note: req.body.note,
    status: "Approved",
    delivery_address: req.body.delivery_address,
    total_amount: req.body.total_amount,
    damaged: req.body.damaged,
    supplier_note: req.body.supplier_note,
    //Number(req.body.required.unit_price * req.body.required_quantities)
  });
  const newOrderPurchase1 = new Purchase_order({
    order_id: "ORD" + gen(),
    item_name: req.body.item_name,
    supplier_name: req.body.supplier_name,
    site_name: req.body.site_name,
    priority: req.body.priority,
    measuring_unit: req.body.measuring_unit,
    required_quantities: req.body.required_quantities,
    note: req.body.note,
    status: "Pending",
    delivery_address: req.body.delivery_address,
    total_amount: req.body.total_amount,
    damaged: req.body.damaged,
    supplier_note: req.body.supplier_note,
    //Number(req.body.required.unit_price * req.body.required_quantities)
  });
  try {
    if (parseInt(req.body.total_amount, 10) < parseInt("100000")) {
      newOrderPurchase.save().then(() => {
        res.status(200).json("Purchase order added successfully!");
        console.log("Purchase order added successfully! " + newOrderPurchase);
      });
    } else if (parseInt(req.body.total_amount, 10) > parseInt("100000")) {
      newOrderPurchase1.save().then(() => {
        res.status(200).json("Purchase order added successfully!");
        console.log("Purchase order added successfully! " + newOrderPurchase1);
      });
    } else {
      console.log("none");
      console.log(req.body.supplier_name);
      console.log(req.body.total_amount);
    }
  } catch (error) {
    res.status(400).json(`Error While Adding A New Purchase order! : ${error}`);
    console.log(error);
  }
});

router.post("/for-staff-request", (req, res) => {
  var gen = rn.generator({
    min: 0,
    max: 9999,
    integer: true,
  });

  const newOrderPurchase = new Purchase_order({
    order_id: "ORD" + gen(),
    item_name: req.body.item_name,
    supplier_name: req.body.supplier_name,
    site_name: req.body.site_name,
    priority: req.body.priority,
    measuring_unit: req.body.measuring_unit,
    required_quantities: req.body.required_quantities,
    note: req.body.note,
    status: "Pending",
    delivery_address: req.body.delivery_address,
    total_amount: req.body.total_amount,
    damaged: req.body.damaged,
    supplier_note: req.body.supplier_note,
    //Number(req.body.required.unit_price * req.body.required_quantities)
  });
  try {
    newOrderPurchase.save().then(() => {
      res.status(200).json("Purchase order added successfully!");
      console.log("Purchase order added successfully! " + newOrderPurchase);
    });
  } catch (error) {
    res.status(400).json(`Error While Adding A New Purchase order! : ${error}`);
    console.log(error);
  }
});

router.route("/get-all-orders").get((req, res) => {
  try {
    Purchase_order.find().then((purchase_order) => {
      res.status(200).json(purchase_order);
      console.log("All Orders Belong To This Site Fetched! " + purchase_order);
    });
  } catch (error) {
    res.status(400).json(`Error While Fetching All Orders! : ${error}`);
    console.log(`Error While Fetching All Inventories! : ${error}`);
  }
});

router.route("/get-all-orders/:site_name").get((req, res) => {
  try {
    let site_name = req.params.site_name;
    Purchase_order.find({ site_name: site_name }).then((purchase_order) => {
      res.status(200).json(purchase_order);
      console.log("All Orders Belong To This Site Fetched! " + purchase_order);
    });
  } catch (error) {
    res.status(400).json(`Error While Fetching All Orders! : ${error}`);
    console.log(`Error While Fetching All Inventories! : ${error}`);
  }
});

router.get("/get-approved-orders/", async(req,res) => {
  if (req.params && req.params.user) {
      await Purchase_order.find({"status":"Approve"})
      .then(data => {
          res.status(200).send({ data: data });
      })
      .catch(error => {
          res.status(500).send({ error: error.message });
      });
  }
})

router.get("/get-pending-orders/", async(req,res) => {
  if (req.params && req.params.user) {
      await Purchase_order.find({"status":"Pending"})
      .then(data => {
          res.status(200).send({ data: data });
      })
      .catch(error => {
          res.status(500).send({ error: error.message });
      });
  }
})
router.route("/sm-approved-orders/:site_name").get((req, res) => {
  try {
    let site_name = req.params.site_name;
    let status = req.params.status;
    Purchase_order.find({ site_name: site_name, status: "Approved" }).then(
      (purchase_order) => {
        res.status(200).json(purchase_order);
        console.log(
          "All Orders Belong To This Site Fetched! " + purchase_order
        );
      }
    );
  } catch (error) {
    res.status(400).json(`Error While Fetching All Orders! : ${error}`);
    console.log(`Error While Fetching All Inventories! : ${error}`);
  }
});

router.route("/sm-pending-orders/:site_name").get((req, res) => {
  try {
    let site_name = req.params.site_name;
    let status = req.params.status;
    Purchase_order.find({ site_name: site_name, status: "Pending" }).then(
      (purchase_order) => {
        res.status(200).json(purchase_order);
        console.log(
          "All Orders Belong To This Site Fetched! " + purchase_order
        );
      }
    );
  } catch (error) {
    res.status(400).json(`Error While Fetching All Orders! : ${error}`);
    console.log(`Error While Fetching All Inventories! : ${error}`);
  }
});

router.route("/sm-reject-orders/:site_name").get((req, res) => {
  try {
    let site_name = req.params.site_name;
    let status = req.params.status;
    Purchase_order.find({ site_name: site_name, status: "Reject" }).then(
      (purchase_order) => {
        res.status(200).json(purchase_order);
        console.log(
          "All Orders Belong To This Site Fetched! " + purchase_order
        );
      }
    );
  } catch (error) {
    res.status(400).json(`Error While Fetching All Orders! : ${error}`);
    console.log(`Error While Fetching All Inventories! : ${error}`);
  }
});

router.route("/get-one-order/:id").get(async (req, res) => {
  try {
    let order_id = req.params.id;
    const getoneorder = await Purchase_order.findById(order_id).then(
      (get_one_order) => {
        res
          .status(200)
          .send({ status: "Single Order Fetched! ", get_one_order });
        console.log("Single Order Fetched! ", get_one_order);
      }
    );
  } catch (error) {
    res.status(400).send({
      status: "Error While Fetching The Single Order! ",
      error: error.message,
    });
    console.log(`Error While Fetching The Single Order! ${error}`);
  }
});

router.route("/update-one-order/:id").put(async (req, res) => {
  try {
    let order_id = req.params.id;
    const getoneorder = await Purchase_order.findByIdAndUpdate(order_id).then(
      (get_one_order) => {
        //get_one_order.order_id = req.body.order_id,
        (get_one_order.item_name = req.body.item_name),
          (get_one_order.supplier_name = req.body.supplier_name),
          (get_one_order.site_name = req.body.site_name),
          (get_one_order.priority = req.body.priority),
          (get_one_order.measuring_unit = req.body.measuring_unit),
          (get_one_order.required_quantities = req.body.required_quantities),
          (get_one_order.note = req.body.note),
          (get_one_order.status = req.body.status),
          (get_one_order.delivery_address = req.body.delivery_address),
          (get_one_order.total_amount = req.body.total_amount);
        get_one_order.damaged = req.body.damaged;
        get_one_order.supplier_note = req.body.supplier_note;

        get_one_order
          .save()
          .then(() => {
            res
              .status(200)
              .send({ status: "Single Order Updated! ", get_one_order });
            console.log("Single Order Updated! " + get_one_order);
          })
          .catch((error) => {
            res.status(400).send({
              status: "Error While Fetching The Single Order! ",
              error: error.message,
            });
            console.log(`Error While Fetching The Single Order! ${error}`);
          });
      }
    );
  } catch (error) {
    res.status(400).send({
      status: "Error While Fetching The Single Order! ",
      error: error.message,
    });
    console.log(`Error While Fetching The Single Order! ${error}`);
  }
});

router.route("/staff-approve-order/:id").put(async (req, res) => {
  try {
    let order_id = req.params.id;
    const getoneorder = await Purchase_order.findByIdAndUpdate(order_id).then(
      (get_one_order) => {
        //get_one_order.order_id = req.body.order_id,
        (get_one_order.item_name = req.body.item_name),
          (get_one_order.supplier_name = req.body.supplier_name),
          (get_one_order.site_name = req.body.site_name),
          (get_one_order.priority = req.body.priority),
          (get_one_order.measuring_unit = req.body.measuring_unit),
          (get_one_order.required_quantities = req.body.required_quantities),
          (get_one_order.note = req.body.note),
          (get_one_order.status = "Approve"),
          (get_one_order.delivery_address = req.body.delivery_address),
          (get_one_order.total_amount = req.body.total_amount);
        get_one_order.damaged = req.body.damaged;
        get_one_order.supplier_note = req.body.supplier_note;

        get_one_order
          .save()
          .then(() => {
            res
              .status(200)
              .send({ status: "Single Order Updated! ", get_one_order });
            console.log("Single Order Updated! " + get_one_order);
          })
          .catch((error) => {
            res.status(400).send({
              status: "Error While Fetching The Single Order! ",
              error: error.message,
            });
            console.log(`Error While Fetching The Single Order! ${error}`);
          });
      }
    );
  } catch (error) {
    res.status(400).send({
      status: "Error While Fetching The Single Order! ",
      error: error.message,
    });
    console.log(`Error While Fetching The Single Order! ${error}`);
  }
});

router.route("/staff-reject-order/:id").put(async (req, res) => {
  try {
    let order_id = req.params.id;
    const getoneorder = await Purchase_order.findByIdAndUpdate(order_id).then(
      (get_one_order) => {
        //get_one_order.order_id = req.body.order_id,
        (get_one_order.item_name = req.body.item_name),
          (get_one_order.supplier_name = req.body.supplier_name),
          (get_one_order.site_name = req.body.site_name),
          (get_one_order.priority = req.body.priority),
          (get_one_order.measuring_unit = req.body.measuring_unit),
          (get_one_order.required_quantities = req.body.required_quantities),
          (get_one_order.note = req.body.note),
          (get_one_order.status = "Reject"),
          (get_one_order.delivery_address = req.body.delivery_address),
          (get_one_order.total_amount = req.body.total_amount);
        get_one_order.damaged = req.body.damaged;
        get_one_order.supplier_note = req.body.supplier_note;

        get_one_order
          .save()
          .then(() => {
            res
              .status(200)
              .send({ status: "Single Order Updated! ", get_one_order });
            console.log("Single Order Updated! " + get_one_order);
          })
          .catch((error) => {
            res.status(400).send({
              status: "Error While Fetching The Single Order! ",
              error: error.message,
            });
            console.log(`Error While Fetching The Single Order! ${error}`);
          });
      }
    );
  } catch (error) {
    res.status(400).send({
      status: "Error While Fetching The Single Order! ",
      error: error.message,
    });
    console.log(`Error While Fetching The Single Order! ${error}`);
  }
});

router.route("/staff-raise-order/:id").put(async (req, res) => {
  try {
    let order_id = req.params.id;
    const getoneorder = await Purchase_order.findByIdAndUpdate(order_id).then(
      (get_one_order) => {
        //get_one_order.order_id = req.body.order_id,
        (get_one_order.item_name = req.body.item_name),
          (get_one_order.site_name = req.body.site_name),
          (get_one_order.priority = req.body.priority),
          (get_one_order.measuring_unit = req.body.measuring_unit),
          (get_one_order.required_quantities = req.body.required_quantities),
          (get_one_order.note = req.body.note),
          (get_one_order.status = "Raised"),
          (get_one_order.delivery_address = req.body.delivery_address),
          (get_one_order.total_amount = req.body.total_amount);

        get_one_order
          .save()
          .then(() => {
            res
              .status(200)
              .send({ status: "Single Order Updated! ", get_one_order });
            console.log("Single Order Updated! " + get_one_order);
          })
          .catch((error) => {
            res.status(400).send({
              status: "Error While Fetching The Single Order! ",
              error: error.message,
            });
            console.log(`Error While Fetching The Single Order! ${error}`);
          });
      }
    );
  } catch (error) {
    res.status(400).send({
      status: "Error While Fetching The Single Order! ",
      error: error.message,
    });
    console.log(`Error While Fetching The Single Order! ${error}`);
  }
});

router.route("/delete-one-order/:id").delete(async (req, res) => {
  try {
    let order_id = req.params.id;
    const getoneorder = await Purchase_order.findOneAndDelete({
      _id: order_id,
    }).then((get_one_order) => {
      res.status(200).send({ status: "Order Deleted!", get_one_order });
      console.log("Order Deleted! " + get_one_order);
    });
  } catch (error) {
    res.status(400).json(`Error While Deleting This Order! : ${error}`);
    console.log(`Error While Deleting This Order! : ${error}`);
  }
});

module.exports = router;
