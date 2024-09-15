import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';


const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required('Required'),
    number: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.formik}>
              <div className={styles.fiel}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={styles.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </div>

        <div className={styles.fiel}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field className={styles.field} type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
        </div>

                  <button className={styles.button} type="submit">Add Contact</button>
              </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;

