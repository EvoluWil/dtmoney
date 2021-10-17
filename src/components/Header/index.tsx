import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTrasactionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNewTrasactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="DT-Money" />
        <button type="button" onClick={onOpenNewTrasactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
