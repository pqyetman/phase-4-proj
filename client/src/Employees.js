import CarouselThing from './CarouselThing';

import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import IndEmp from './IndEmp';


function Employees() {

    const [employees, setEmployees] = useState([])



    useEffect(() => {
        fetch(`/employees`).then((r) => {
            if (r.ok) {
                r.json().then((emp) => setEmployees(emp));
            }

        })
    }
        , []);


    let empMap = employees.map(employee => <IndEmp key={employee.id} employee={employee} />)


    return (
        <>

            <CarouselThing />
            <Container flex="true">
                <Row xs={1} md={3} className="g-4">
                    {empMap}
                </Row>
            </Container>
        </>
    )
}

export default Employees;