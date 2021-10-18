import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/serviceApi";
import {
  NewTransaction,
  Transaction,
  TransactionsData,
  TransactionsProviderProps,
} from "../services/Types/Transactions";

export const TransactionsContext = createContext<TransactionsData>(
  {} as TransactionsData
);

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>("transactions")
      .then((res) => setTransaction(res.data.transactions));
  }, []);

  const createTransaction = async (newTransaction: NewTransaction) => {
    const res = await api.post<
      NewTransaction,
      { data: { transaction: Transaction } }
    >("/transactions", {
      ...newTransaction,
      createdAt: new Date(),
    });
    const { transaction } = res.data;
    setTransaction([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};
