
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom'


function NewProjModal({ show, setShow, id, name }) {

    const hoursArray = [25, 50, 75, 100, 125, 150, 175, 200]
    const hoursSelect = hoursArray.map(hour => (<option key={hour} value={hour} >{hour}</option>))

    const history = useHistory()

    const [formData, setFormData] = useState({
        open: true,
        description: '',
        estimated_total_hours: 25,
        customer_id: id
    })

    const { estimated_total_hours, description } = formData

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })


    }

   
   function onSubmit(e) {
       e.preventDefault()
       console.log(formData)
      
       const project = {
            open: true,
            description,
            estimated_total_hours,
            customer_id: id
           
       }
       console.log(project)
       fetch(`/projects`, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(project)
       })
           .then(res => {
               if (res.ok) {
                   res.json().then(project => {
                    
                      console.log(project)
                      history.push(`/home`)
                   })
               } else {
                   res.json().then(json => alert(json.errors))
               }
 
               
           })
 
   }  



    const handleClose = () => setShow(false);


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Project for: {name} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={handleChange} name="description" placeholder="Enter Task Description" />
                            <Form.Text className="text-muted">
                                Please enter a task done for this project
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Estimated Total Hours</Form.Label>
                            <Form.Select onChange={handleChange} name="estimated_total_hours" size="sm">
                                {hoursSelect}
                            </Form.Select>
                        </Form.Group>
                        <Button style={{ margin: '10px' }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>               
            </Modal>
        </>
    );
}

export default NewProjModal