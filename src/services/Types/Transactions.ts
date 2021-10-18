import { ReactNode } from "react";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export type NewTransaction = Omit<Transaction, "id" | "createdAt">;

export interface TransactionsProviderProps {
  children: ReactNode;
}

export interface TransactionsData {
  transactions: Transaction[];
  createTransaction: (transaction: NewTransaction) => Promise<void>;
}
