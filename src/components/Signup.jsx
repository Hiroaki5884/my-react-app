import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Compressor from "compressorjs";

const Signup = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    avatar: Yup.mixed().required("Required"),
  });

  const handleImageUpload = (file, setFieldValue) => {
    new Compressor(file, {
      quality: 0.6,
      success(result) {
        setFieldValue("avatar", result);
      },
    });
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", avatar: null }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={(event) =>
                handleImageUpload(event.currentTarget.files[0], setFieldValue)
              }
            />
            <ErrorMessage name="avatar" component="div" />
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
