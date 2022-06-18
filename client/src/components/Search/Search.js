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


export function Search ({id, title, placeholder, handleSearch}) {
    return (
        <div className="input-search">
          <Row>
              <Col md={4}>
                    <Label for={id}>{title}</Label>
                    <InputGroup >
                    <Input id={id} type="text" placeholder={placeholder}></Input>
                    <Button
                        color="success"
                        onClick={() => {
                            handleSearch()
                    }}>
                        Search
                    </Button>
                </InputGroup>'
              </Col>
          </Row>
        </div>
    )
}