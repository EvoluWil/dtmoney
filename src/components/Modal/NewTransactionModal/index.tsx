import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../../assets/close.svg";
import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { api } from "../../../services/serviceApi";

interface HeaderProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTrasactionModal: React.FC<HeaderProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [data, setData] = useState<{
    title: string;
    value: number;
    category: string;
    type: "deposit" | "withdraw";
  }>({
    title: "",
    value: 0,
    category: "",
    type: "deposit",
  });

  const handleCreateNewTrasaction = (event: FormEvent) => {
    event.preventDefault();

    api.post("/transactions", data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={data.title}
          onChange={(event) => setData({ ...data, title: event.target.value })}
        />

        <input
          type="number"
          placeholder="Valor"
          value={data.value}
          onChange={(event) =>
            setData({ ...data, value: Number(event.target.value) })
          }
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setData({ ...data, type: "deposit" })}
            isActive={data.type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setData({ ...data, type: "withdraw" })}
            isActive={data.type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={data.category}
          onChange={(event) =>
            setData({ ...data, category: event.target.value })
          }
        />

        <button type="submit" onClick={handleCreateNewTrasaction}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
};
