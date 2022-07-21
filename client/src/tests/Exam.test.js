import renderer from 'react-test-renderer';
import Exam from "../pages/Exam/Exam";

it('testando a renderização a page Exam', () => {
  const component = renderer.create(Exam);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); 

  
})
