import 'bootstrap/dist/css/bootstrap.min.css';
import "./Search.css"
import {
    Row,
    Col,
    Label,
    InputGroup,
    Input,
    Button
} from 'reactstrap';


export function Search ({handleFilterByCpf}) {
    return (
        <div className="input-search">
          <Row>
              <Col md={4}>
                    <Label for="searchCpf">Filter By CPF</Label>
                    <InputGroup >
                    <Input id="searchCpf" type="text" placeholder="cpf"></Input>
                    <Button
                        color="success"
                        onClick={() => {
                            handleFilterByCpf()
                    }}>
                        Search
                    </Button>
                </InputGroup>'
              </Col>
          </Row>
        </div>
    )
}