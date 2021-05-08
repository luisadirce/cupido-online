import { Form, Button, Col} from 'react-bootstrap';
import { useState } from 'react';

export function FormEmail() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control required type="text"/>
          <Form.Control.Feedback type="invalid">
            Por favor, escreva o nome do crush.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>E-mail</Form.Label>
          <Form.Control required type="email"/>
          <Form.Control.Feedback type="invalid">
            Por favor, escreva o e-mail do crush.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustom03">
        <Form.Label>Mansagem</Form.Label>          
        <Form.Control as="textarea" rows={6} required />
          <Form.Control.Feedback type="invalid">
            Por favor, escreva a mensagem.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Button type="submit" className="button">Enviar</Button>
    </Form>
  );
}
