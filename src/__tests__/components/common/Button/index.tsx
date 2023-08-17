import { Button } from '@/components/common/Button';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

test('test button with default variant', () => {
  const { asFragment } = render(<Button />);

  expect(asFragment()).toMatchSnapshot();
});

test('test button with secondary variant', () => {
  const { asFragment } = render(<Button variant="secondary" />);

  expect(asFragment()).toMatchSnapshot();
});

test('test button with child text', () => {
  const buttonText = 'Text Button';
  const { getByText } = render(<Button variant="secondary">{buttonText}</Button>);

  expect(getByText(buttonText)).toHaveTextContent(buttonText);
});
