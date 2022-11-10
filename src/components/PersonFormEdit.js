import Modal from "react-bootstrap/Modal";
import {MyInput} from "./MyInput";
import Button from "react-bootstrap/Button";

export function PersonFormEdit(props) {
    const {person, setPersonSelected, savePerson} = props;

    const handleClose = () => {
        setPersonSelected(undefined);
    }



    return (
        <Modal show={person} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit person {person?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MyInput label='Name' value={person?.name} onChange={(e) => setPersonSelected({...person, name: e.target.value})}/>
                <MyInput label='Age' value={person?.age} onChange={(e) => setPersonSelected({...person, age: e.target.value})}/>
                <MyInput label='City' value={person?.city} onChange={(e) => setPersonSelected({...person, city: e.target.value})}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {savePerson(person); handleClose()}}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}