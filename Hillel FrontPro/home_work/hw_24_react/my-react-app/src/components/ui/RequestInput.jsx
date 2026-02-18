import { InputGroup, Form, Button } from 'react-bootstrap'

export default function RequestInput() {
  return (
    <>
      <div className="mb-2 text-muted">
        https://swapi.dev/api/ request
      </div>

      <InputGroup className="mb-2">
        <InputGroup.Text>
          https://swapi.dev/api/
        </InputGroup.Text>

        <Form.Control
          defaultValue="people/1/"
          placeholder="people/1/"
        />

        <Button variant="primary">
          request
        </Button>
      </InputGroup>

      <div className="text-muted mb-3">
        Need a hint? try <code>people/1/</code> or <code>planets/3/</code> or <code>starships/9/</code>
      </div>
    </>
  )
}
