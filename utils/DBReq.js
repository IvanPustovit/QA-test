class DBReq {
  async find(db) {
    try {
      const res = db.find();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async findTickets(db, req) {
    try {
      const { userId, priority, sort } = req.query;
      const tickets = await db
        .find(
          userId && priority
            ? {
                $and: [{ userId: userId }, { priority: priority }],
              }
            : userId || priority
            ? {
                $or: [{ userId: userId }, { priority: priority }],
              }
            : {}
        )
        .populate({
          path: "userId",
          select: "name -_id",
        })
        .sort(sort === "desc" ? { createdAt: -1 } : { createdAt: 1 })
        .exec();
      return tickets;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new DBReq();
