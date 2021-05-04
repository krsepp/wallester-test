import React, {useRef, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {JobTypes} from '../enums/JobTypes'
import ICreateUserResponse from '../interfaces/ICreateUserResponse';
import {createUser} from '../services/reqres';
import ModalDialog from './ModalDialog';

const UserForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [job, setJob] = useState<string>(JobTypes.SOFTWARE_ENGINEER);
    const [dateOfBirth, setDateOfBirth] = useState<Date|null>(null);
    const [response, setResponse] = useState<ICreateUserResponse|null>(null);
    const [showResponse, setShowResponse] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const formElement = useRef<HTMLFormElement>(null);

    function handleSubmit(event:React.FormEvent): void {
        event.preventDefault();
        let today: Date = new Date();

        if (dateOfBirth !== null) {
            let diff = Math.abs(today.getTime() - dateOfBirth.getTime());
            let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
            if (age < 18) {
                setShowModal(true);
                return;
            }
        }

        createUser(name, job).then((data) => {
            setResponse(data);
            setName('');
            setJob(JobTypes.SOFTWARE_ENGINEER);
            setShowResponse(true);
            if (formElement.current !== null) formElement.current.reset();
        });
    }

    return (
        <div className='form-container'>
            <Form onSubmit={handleSubmit} className='mb-3' ref={formElement}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter name'
                        pattern='[a-zA-Z ]+'
                        value={name}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='job'>
                    <Form.Label>Job</Form.Label>
                    <Form.Control
                        as='select'
                        value={job}
                        onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setJob(e.target.value)}
                    >
                        {Object.values(JobTypes).map(value => (
                                <option
                                    key={value}
                                    value={value}
                                >
                                    {value}
                                </option>
                            )
                        )}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='dateOfBirth'>
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control
                        required
                        type='date'
                        placeholder='Pick a date'
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDateOfBirth(e.target.valueAsDate)}
                    />
                </Form.Group>

                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>

            {showResponse ?
                <div>
                    <span className='d-block text-danger mb-2'>User successfully created!</span>
                    <div className='text-break'>{JSON.stringify(response)}</div>
                </div>
            : null}

            {showModal ?
                <ModalDialog showModal={showModal} setShowModal={setShowModal}>
                    Account cannot be created! Age should be above 18 years old!
                </ModalDialog>
            : null}
        </div>
    );
};

export default UserForm;