import { Field } from '@/components/Crossword/Field';
import { Button } from '@/components/common/Button';
import { FC, useEffect, useState } from 'react';
import { zip } from 'lodash';
import { useAppDispatch, useAppSelector } from '@/store';
import { addPicture } from '@/store/pictures/asyncThunks';
import { toast } from '@/components/ui/use-toast';
import { FieldValue } from '@/store/pictures';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getEmptyField } from '@/components/Crossword';
import { useNavigate } from 'react-router-dom';

const getTableValues = (field: FieldValue[][]): number[][] => {
  const filledValuesLength = field.map(el => {
    const filledValues = el.join('').replace(/0+/g, ' ').trim().split(' ');
    return filledValues.map(el => el.length);
  });

  const maxLength = filledValuesLength.reduce((maxValue, current) => {
    return maxValue > current.length ? maxValue : current.length;
  }, 0);

  return filledValuesLength.map(el => {
    if (el.length < maxLength) {
      return [...new Array(maxLength - el.length).fill(0), ...el];
    }

    return el;
  });
};

const validationSchema = z.object({
  width: z.string().refine(val => +val % 5 === 0, {
    message: 'Value must be a multiple of 5',
  }),
  height: z.string().refine(val => +val % 5 === 0, {
    message: 'Value must be a multiple of 5',
  }),
  difficulty: z
    .string({
      required_error: 'Field is required',
    })
    .nonempty()
    .refine(val => +val <= 5, {
      message: 'Value must be less then 5',
    }),
});

const inputs = [
  {
    label: 'Width',
    name: 'width',
    placeholder: '5',
  },
  {
    label: 'Height',
    name: 'height',
    placeholder: '5',
  },

  {
    label: 'Difficulty',
    name: 'difficulty',
    placeholder: '3',
  },
] as const;

export const AddNewCrossword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof validationSchema>>({
    defaultValues: {
      width: '45',
      height: '45',
    },
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [width, height] = watch(['width', 'height']);
  const [field, setField] = useState<FieldValue[][]>(getEmptyField(height, width));
  const errorMessage = useAppSelector(state => state.picture.errorMessage);

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: errorMessage,
        variant: 'destructive',
      });
    }
  }, [errorMessage]);

  const onSubmit = (data: z.infer<typeof validationSchema>) => {
    const transposeField = zip(...field) as FieldValue[][];
    const leftTable = getTableValues(field);
    const topTable = zip(...getTableValues(transposeField)) as number[][];
    const picture = { result: field, leftTable, topTable, width, height, difficulty: data.difficulty };
    dispatch(addPicture(picture));
    navigate('/crosswords');
    toast({
      title: 'Crossword successfully created',
      variant: 'successful',
    });
  };

  return (
    <form
      className="mx-auto grid max-w-7xl grid-cols-[240px,_1fr] items-start px-4"
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {inputs.map((input, id) => {
          return (
            <div key={id}>
              <label className="mb-2 mt-6 block text-sm font-medium text-cyan-700 dark:text-white">{input.label}</label>

              <input
                {...register(input.name)}
                placeholder={input.placeholder}
                className="focus:cyan-700 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-cyan-700"
              />
              {errors[input.name] && <p className="text-red-700">{errors[input.name]?.message?.toString()}</p>}
            </div>
          );
        })}
        <div className="mt-10 flex justify-center">
          <Button
            type="button"
            className="px-16"
            onClick={() => {
              if (!errors.height && !errors.width && !errors.difficulty) {
                setField(getEmptyField(height, width));
              }
            }}
          >
            Apply
          </Button>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col items-center justify-center gap-10">
        <Field fieldValues={field} setField={setField} isCreatingMode />
        <Button type="submit" className="px-16">
          Submit
        </Button>
      </div>
    </form>
  );
};
