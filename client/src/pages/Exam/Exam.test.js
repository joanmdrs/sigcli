import renderer from 'react-test-renderer';
import Exam from "./Exam";

it('testando a renderização a page Exam', () => {
  const component = renderer.create(Exam);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); tree = component.toJSON();

  
})