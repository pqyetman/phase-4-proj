
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import IndProj from './IndProj.js'

function Projects() {

    const [projects, setProjects] = useState([])
  

    useEffect(() => {
        fetch(`/projects`).then((r) => {
            if (r.ok) {
              r.json().then((proj) => setProjects(proj));
            }
        })

    }
        , []);

    let tableData = projects.map(projects => <IndProj key={projects.id} projects={projects} />)

    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Project Description</th>
                        <th>Company Name</th>
                        <th>Estimated Hours</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </Table>
        </Container>

    )

}

export default Projects; 