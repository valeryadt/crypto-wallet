import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import './modal-dialog.css'

function ModalDialog({isOpen, setIsOpen}) {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="modal__dialog" open={isOpen} onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="modal__transition-child"/>
                </Transition.Child>

                <div className="modal__dialog-container">
                    <div className="modal__dialog-transition">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="modal__dialog-panel">
                                <Dialog.Title
                                    as="h3"
                                    className="modal__title"
                                >
                                    Message sent successfully
                                </Dialog.Title>
                                <div className="modal__description-container">
                                    <p className="modal__description">
                                        Your message has been successfully sent!
                                        We will reply you as soon as possible.
                                    </p>
                                </div>

                                <div className="modal__btn-container">
                                    <button onClick={() => setIsOpen(false)}
                                            className="modal__btn btn"
                                    >
                                        Got it
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ModalDialog;