import Modal from 'react-modal'
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
            <Container>
                <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar Modal" />
                </button>

                <h2>Cadastrar Transação</h2>

                <input 
                type="text"
                placeholder='Titulo' />

                <input 
                type="number"
                placeholder='Valor' />

                <input 
                type="text"
                placeholder='Categoria' />

                <button 
                type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}