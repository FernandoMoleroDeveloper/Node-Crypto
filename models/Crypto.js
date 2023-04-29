const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cryptoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    marketCap: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Crypto = mongoose.model("Crypto", cryptoSchema);
module.exports = { Crypto };
