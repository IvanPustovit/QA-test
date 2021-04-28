const Ticket = require("../Models/TicketModel");
const dbReq = require("../utils/DBReq");

class TicketController {
  async getTicket(req, res) {
    try {
      const tickets = await dbReq.findTickets(Ticket, req);

      const response = tickets.map((el) => ({
        id: el._id,
        userName: el.userId.name,
        ticketName: el.name,
        priority: el.priority,
      }));
      res.json(response);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  }

  async postTicket(req, res) {
    try {
      const { name, userId, priority } = req.body;
      const newTicket = new Ticket({
        name,
        priority,
        userId,
        createdAt: new Date(),
      });
      await newTicket.save();
      return res.status(201).json(newTicket);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  }
}

module.exports = new TicketController();
