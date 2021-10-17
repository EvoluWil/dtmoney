import { useEffect, useState } from "react";
import { api } from "../../services/serviceApi";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export const TransactionsTable = () => {
  const [transactions, setTransaction] = useState<Transaction[]>([]);
  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>("transactions")
      .then((res) => setTransaction(res.data.transactions));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
