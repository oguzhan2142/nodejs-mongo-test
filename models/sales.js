const mongoose = require("mongoose");

const schema = mongoose.Schema({
  type: "object",
  properties: {
    _id: {
      type: "object",
      properties: {
        $oid: {
          type: "string",
        },
      },
      required: ["$oid"],
    },
    saleDate: {
      type: "object",
      properties: {
        $date: {
          type: "object",
          properties: {
            $numberLong: {
              type: "string",
            },
          },
          required: ["$numberLong"],
        },
      },
      required: ["$date"],
    },
    items: {
      type: "array",
      items: [
        {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            tags: {
              type: "array",
              items: [
                {
                  type: "string",
                },
                {
                  type: "string",
                },
              ],
            },
            price: {
              type: "object",
              properties: {
                $numberDecimal: {
                  type: "string",
                  default: "0.0",
                },
              },
              required: ["$numberDecimal"],
            },
            quantity: {
              type: "object",
              properties: {
                $numberInt: {
                  type: "string",
                },
              },
              required: ["$numberInt"],
            },
          },
          required: ["name", "tags", "price", "quantity"],
        },
        {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            tags: {
              type: "array",
              items: [
                {
                  type: "string",
                },
                {
                  type: "string",
                },
                {
                  type: "string",
                },
              ],
            },
            price: {
              type: "object",
              properties: {
                $numberDecimal: {
                  type: "string",
                },
              },
              required: ["$numberDecimal"],
            },
            quantity: {
              type: "object",
              properties: {
                $numberInt: {
                  type: "string",
                },
              },
              required: ["$numberInt"],
            },
          },
          required: ["name", "tags", "price", "quantity"],
        },
      ],
    },
    storeLocation: {
      type: "string",
    },
    customer: {
      type: "object",
      properties: {
        gender: {
          type: "string",
        },
        age: {
          type: "object",
          properties: {
            $numberInt: {
              type: "string",
            },
          },
          required: ["$numberInt"],
        },
        email: {
          type: "string",
        },
        satisfaction: {
          type: "object",
          properties: {
            $numberInt: {
              type: "string",
            },
          },
          required: ["$numberInt"],
        },
      },
      required: ["gender", "age", "email", "satisfaction"],
    },
    couponUsed: {
      type: "boolean",
    },
    purchaseMethod: {
      type: "string",
    },
  },
  required: [
    "_id",
    "saleDate",
    "items",
    "storeLocation",
    "customer",
    "couponUsed",
    "purchaseMethod",
  ],
});

module.exports = mongoose.model("Sales", schema);
