import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

export default function ContactForm({ onAdd }) {
  const formId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(/^[0-9()+-]*$/, 'Invalid phone number')
      .min(5, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formInfoWrapper}>
          <label htmlFor={`${formId}-name`}>Name</label>
          <Field
            type="text"
            name="name"
            id={`${formId}-name`}
            className={css.formInput}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formInfoWrapper}>
          <label htmlFor={`${formId}-number`}>Number</label>
          <Field
            type="tel"
            name="number"
            id={`${formId}-number`}
            className={css.formInput}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
