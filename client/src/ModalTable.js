import Button from 'react-bootstrap/Button';

function ModalTable({ proj }) {

  const { description = [], hours = [], employee = {}, id } = proj;

function handleDelete(){

  fetch(`/tasks/${id}`, {
    method: 'DELETE'
})
    .then(res => {
        if (res.ok) {
            res.json().then(res => {
             
                console.log(res)
              
            })
        } else {
            res.json().then(json => alert(json.errors))
        }

        
    })
}


  return (<>
    <tr  >
      <td >{description}</td>
      <td>{hours}</td>
      <td>{employee.name}</td>
      <td>{employee.title}</td>
      <td style={{ textAlign: "center" }} >
        <Button
          onClick = {handleDelete}
          size="sm"
          variant="outline-danger">
          x
        </Button ></td>
    </tr>
  </>)

}

export default ModalTable; 