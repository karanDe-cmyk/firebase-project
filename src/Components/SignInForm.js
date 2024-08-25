import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Col, Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, facebookProvider, db } from './Firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import Header from './Header';
import Footer from './Footer';

const SignInForm = () => {

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

  // const handleSignUp = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(async (userCredential) => {
  //       const user = userCredential.user;
  //       await saveUserDataToFirestore(user);
  //       console.log('Signed up and data saved:', user);
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //     });
  // };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await saveUserDataToFirestore(user);
        console.log('Signed in and data saved:', user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const user = result.user;
        await saveUserDataToFirestore(user);
        console.log('Signed in with Google and data saved:', user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then(async (result) => {
        const user = result.user;
        await saveUserDataToFirestore(user);
        console.log('Signed in with Facebook and data saved:', user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
    <Header />
    <Container>
      
        <Outlet />
      <Col md={{ span: 6, offset: 3 }}>
        <h2 className="text-center">Sign In</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSignIn(values.email, values.password);
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
                Sign In
              </Button>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-3">
          <Button className="btn btn-danger w-100" onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
          <Button className="btn btn-primary w-100 mt-2" onClick={signInWithFacebook}>
            Sign In with Facebook
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className='d-flex justify-content-center'>Don't have an account?<Nav.Link as={NavLink} to="/signin/signup" style={{color:"blue"}}>Create account.</Nav.Link></p>
          {/* <Formik
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
          </Formik> */}
        </div>
      </Col>
    </Container>
    <Footer />
  </>
  );
};

export default SignInForm;
