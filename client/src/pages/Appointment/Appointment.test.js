import renderer from 'react-test-renderer';
import Appointment from "./Appointment";

it('Testando a renderização da page Appointment', () => {
    const component = renderer.create(Appointment);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
}) 