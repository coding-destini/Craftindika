import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

const AddRecord = () => {
  const initialValues = {
    name: '',
    salary: '',
    currency: '',
    department: '',
    sub_department: '',
    on_contract: false
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    salary: Yup.number().required('Salary is required'),
    currency: Yup.string().required('Currency is required'),
    department: Yup.string().required('Department is required'),
    sub_department: Yup.string().required('Sub Department is required')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post('http://localhost:8080/record/add', values);
      toast.success('Record added successfully');
      resetForm();
    } catch (error) {
      toast.error('Failed to add record');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md">
      <div className="w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="name" component="p" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4">
                <label htmlFor="salary" className="block text-gray-700 text-sm font-bold mb-2">
                  Salary
                </label>
                <Field
                  type="number"
                  name="salary"
                  id="salary"
                  placeholder="Salary"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="salary" component="p" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4">
                <label htmlFor="currency" className="block text-gray-700 text-sm font-bold mb-2">
                  Currency
                </label>
                <Field
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="Currency"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="currency" component="p" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4">
                <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">
                  Department
                </label>
                <Field
                  type="text"
                  name="department"
                  id="department"
                  placeholder="Department"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="department" component="p" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4">
                <label htmlFor="sub_department" className="block text-gray-700 text-sm font-bold mb-2">
                  Sub Department
                </label>
                <Field
                  type="text"
                  name="sub_department"
                  id="sub_department"
                  placeholder="Sub Department"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="sub_department" component="p" className="text-red-500 text-xs italic" />
              </div>
              <div className="mb-4">
                <Field
                  type="checkbox"
                  name="on_contract"
                  id="on_contract"
                  className="mr-2 leading-tight"
                />
                <label htmlFor="on_contract" className="block text-gray-700 text-sm font-bold mb-2">
                  On Contract
                </label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {isSubmitting ? 'Adding...' : 'Add Record'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddRecord;
