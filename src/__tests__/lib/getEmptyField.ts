import { getEmptyField } from '@/lib/getEmptyField';

test('test getEmptyField', () => {
  expect(getEmptyField(5, 5)).toMatchInlineSnapshot(`
    [
      [
        0,
        0,
        0,
        0,
        0,
      ],
      [
        0,
        0,
        0,
        0,
        0,
      ],
      [
        0,
        0,
        0,
        0,
        0,
      ],
      [
        0,
        0,
        0,
        0,
        0,
      ],
      [
        0,
        0,
        0,
        0,
        0,
      ],
    ]
  `);
});
