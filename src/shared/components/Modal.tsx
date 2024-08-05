import { FC, ReactNode } from 'react'
import classNames from 'classnames'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    className?: string
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) return null

    return (
        <div className="modal-backdrop">
            <div className={classNames('modal', className)}>
                <button onClick={onClose} className="modal-close-button">
                    X
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
