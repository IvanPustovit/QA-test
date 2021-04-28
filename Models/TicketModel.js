const { Schema, model, Types } = require("mongoose");

const Ticket = new Schema({
  name: { type: String, required: true },
  priority: { type: Number, default: 0 },
  createdAt: { type: Date, required: true },
  userId: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Ticket", Ticket);
