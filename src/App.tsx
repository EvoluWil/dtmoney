import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTrasactionModal } from "./components/Modal/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export const App = () => {
  const [newTransactionModalOpen, setNewTransactionModalOpen] =
    useState<boolean>(false);

  const handleOpenNewTrasactionModal = () => {
    setNewTransactionModalOpen(true);
  };

  const handleCloseNewTrasactionModal = () => {
    setNewTransactionModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTrasactionModal={handleOpenNewTrasactionModal} />
      <Dashboard />
      <NewTrasactionModal
        isOpen={newTransactionModalOpen}
        onRequestClose={handleCloseNewTrasactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
};
