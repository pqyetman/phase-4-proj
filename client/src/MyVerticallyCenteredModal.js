import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ModalTable from "./ModalTable.js"
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

function MyVerticallyCenteredModal(props) {
    
    const { proj, id} = props;
  //  let mapProjId = proj.map(proj => proj.project_id)
    const [formData, setFormData] = useState({
       hours: 1,
        description: '',
        employee_id: 1,
        project_id: id
    })

    const { hours, description, employee_id, project_id } = formData
    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
     
      
    }

    function onSubmit(e) {
        e.preventDefault()
        console.log(formData)
        const task = {
            hours,
            description,
            employee_id,
            project_id    //mapProjId[0]
            
        }
        console.log(task)
        fetch(`/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(task => {
                     
                       console.log(task)
                      
                    })
                } else {
                    res.json().then(json => alert(json.errors))
                }

                
            })

    }  

    

    


    let mappedContents = proj.map(proj => <ModalTable key={proj.id} proj={proj}></ModalTable>)

    const hoursArray = [1, 2, 3, 4, 5, 6, 7, 8]
    const employeeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const hoursSelect = hoursArray.map(hour => (<option key={hour} value={hour} >{hour}</option>))
    const employeeSelect = employeeArray.map(emp => (<option key={emp} value={emp} >{emp}</option>))

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Summary of Tasks Performed
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Hours</th>
                            <th>Employee Name</th>
                            <th>Employee Title</th>
                            <th style={{ textAlign: "center"}}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedContents}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Click To Add A Task</Accordion.Header>
                    <Accordion.Body>
                        <Form onSubmit = {onSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control onChange = {handleChange} name="description" placeholder="Enter Task Description" />
                                <Form.Text className="text-muted">
                                    Please enter a task done for this project
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Hours</Form.Label>
                                <Form.Select onChange = {handleChange} name="hours" size="sm">
                                    {hoursSelect}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Employee Id</Form.Label>
                                <Form.Select name="employee_id" onChange = {handleChange} size="sm">
                                    {employeeSelect}
                                </Form.Select>
                            </Form.Group>
                            <Button style={{ margin: '10px' }} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Modal>
    );
}

export default MyVerticallyCenteredModal