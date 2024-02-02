import { useRef } from 'react';
import Button from './Button.jsx';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === '' || 
            enteredDescription.trim() === '' || 
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... Looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a Title, Description and Due Date for your new project.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><Button onClick={onCancel}>Cancel</Button></li>
                    <li>
                        <Button onClick={handleSave}>Save</Button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" isTextarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    );
}