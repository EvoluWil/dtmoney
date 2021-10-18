import { createServer, Model } from "miragejs";

export const mirageJsConfig = () => {
  createServer({
    models: { transaction: Model },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Freelance Landing Page",
            type: "deposit",
            category: "Web Development",
            amount: 6000,
            createdAt: new Date("2021-02-12 09:00:00"),
          },
          {
            id: 2,
            title: "Rent",
            type: "withdraw",
            category: "House",
            amount: 1100,
            createdAt: new Date("2021-02-14 11:00:00"),
          },
        ],
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/transactions", () => {
        return this.schema.all("transaction");
      });
      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("transaction", data);
      });
    },
  });
};
