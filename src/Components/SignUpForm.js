import React from 'react';
import './SignInForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Button, Col } from 'react-bootstrap';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { Formik } from 'formik';

function SignUpForm() {
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Password should be 6 characters long').required('Required'),
      });

      const saveUserDataToFirestore = async (user) => {
        try {
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || '',
            phoneNumber: user.phoneNumber || '',
            provider: user.providerData[0].providerId,
            lastLogin: new Date(),
          });
          console.log('User data stored in Firestore');
        } catch (error) {
          console.error('Error storing user data: ', error);
        }
      };

      const handleSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            await saveUserDataToFirestore(user);
            console.log('Signed up and data saved:', user);
          })
          .catch((error) => {
            console.error(error.message);
          });
      };
    return (
        <>
            <Container>
            <h2 className="text-center">Sign Up</h2>
                <Col md={{ span: 6, offset: 3 }}>
                        <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                    handleSignUp(values.email, values.password);
                    setSubmitting(false);
                    }}
                    >
                    {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group mb-3">
                        <label>Email</label>
                        <Field
                            type="email"
                            name="email"
                            className="form-control"
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>

                        <div className="form-group mb-3">
                        <label>Password</label>
                        <Field
                            type="password"
                            name="password"
                            className="form-control"
                        />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                        </div>

                        <Button type="submit" className="w-100" disabled={isSubmitting}>
                        Create Account
                        </Button>
                    </Form>
                    )}
                    </Formik>
                </Col>
            </Container>
        </>
    );
}

export default SignUpForm;