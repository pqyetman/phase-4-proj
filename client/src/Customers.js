import CarouselThing from './CarouselThing';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import IndCust from "./IndCust"


function Customers() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch(`/customers`).then((r) => {

            if (r.ok) {
                r.json().then((cust) => setCustomers(cust));
            }
        })
    }
        , []);




        

    let tableData = customers.map(customer => <IndCust key={customer.id} customer={customer} />)

    return (
        <>

            <CarouselThing />
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Company Address</th>
                            <th>Add Project</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Customers;