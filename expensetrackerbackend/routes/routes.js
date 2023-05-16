const express = require("express");
const router = express.Router();
const expenseTrackerTemplate = require("../models/expensesModels");

router.post("/addexpense", (request, response) => {
  const expenseTrackerdata = expenseTrackerTemplate({
    productname: request.body.productname,
    productprice: request.body.productprice,
    date: request.body.date,
  });
  expenseTrackerdata
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.get("/getexpenses", (request, response) => {
  expenseTrackerTemplate
    .find()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.post("/getFilteredExpenses", async (req, res) => {
  const { month, year } = req.body;
  const expenses = await expenseTrackerTemplate.find({
    date: { $gte: new Date(year, month - 1), $lt: new Date(year, month) },
  });
  res.json(expenses);
});

router.post("/getYearlyExpenses", async (req, res) => {
  const { year } = req.body;

  // Create an aggregation pipeline to group expenses by month and year
  const pipeline = [
    {
      $match: { date: { $gte: new Date(year, 0), $lt: new Date(year + 1, 0) } },
    },
    {
      $group: {
        _id: { month: { $month: "$date" } },
        total: { $sum: "$productprice" },
      },
    },
    {
      $sort: { "_id.month": 1 },
    },
  ];

  try {
    const monthlyExpenses = await expenseTrackerTemplate.aggregate(pipeline);
    res.json(monthlyExpenses);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
