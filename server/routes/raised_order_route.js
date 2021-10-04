const router = require("express").Router();

const Raised_Order = require("../models/raised_order");

router.post("/add", async(req, res) => {

  const newRaisedOrder = new Raised_Order({
    order_id: req.body.order_id,
    item_name: req.body.item_name,
    measuring_unit: req.body.measuring_unit,
    required_quantities: req.body.required_quantities,
    delivery_address: req.body.delivery_address,
    total_amount: req.body.total_amount,
    supplier_id:req.body.supplier_id
  });
  await newRaisedOrder.save()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
});

router.get("/view", async(req,res) => {
    await Raised_Order.find()
    .then(data => {
        res.status(200).send({ data: data });
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
})

router.get("/viewSupOrd/:supplier_id", async(req,res) => {
    if (req.params && req.params.supplier_id) {
        await Raised_Order.find({"supplier_id":req.params.supplier_id})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
})

router.get("/viewOne/:order_id", async(req,res) => {
    if (req.params && req.params.order_id) {
        await Raised_Order.findOne({"order_id":req.params.order_id})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
})

module.exports = router;