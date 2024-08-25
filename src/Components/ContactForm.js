import React, { useState, useEffect} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

function ContactForm() {

    const validationSchema = Yup.object().shape({
        category: Yup.string().required('Category is required'),
        location: Yup.string().required('Location is required'),
        name: Yup.string().required('Name is required'),
        phone: Yup.string().required('Phone is required').matches(/^[0-9]{10}$/, 'Phone number is not valid'),
        address: Yup.string().required('Address is required'),
        message: Yup.string().required('Message is required'),
      });

    const [isLoading, setLoading] = useState(false);

    useEffect(() =>{
        function Request() {
            return new Promise((resolve) => setTimeout(resolve, 2000))
        }

        if(isLoading){
            Request().then(() => {
                setLoading(false);
            })
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true)

    return (
        <>
            <Container fluid className='contact-container contact-form p-5'>
                <h1 className='display-3 text-center font-weight-bold'>Contact Us & Feedback</h1>
                <h2 className='emergency mt-4 text-muted'>DO NOT FILL THIS FORM FOR EMERGENCY. FOR EMERGENCY CALL -</h2>
                <Row>
                    <Col md={12} sm={12} className='d-flex justify-content-center'>
                        <div className='d-flex'>
                            <Button size='sm' className='btn d-flex'><img src='image/emergency.png' alt='emergency' className='mx-1' width={18} /><span className='text-center'>EMERGENCY - DIAL 100</span></Button>
                            <Button size='sm' className='btn btn1 d-flex'><span className='text-center'>WOMEN & CHILD HELPLINE - 1098</span></Button>
                        </div>
                    </Col>
                </Row>
                <Container fluid className=' p-5'>
                    <Formik
                        initialValues={{ category: '', location: '', name: '', phone: '', address: '', message: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                        console.log('Form Data:', values);
                        setSubmitting(false);
                        }}
                    >
                        {({
                             handleSubmit,
                             handleChange,
                             handleBlur,
                             values,
                             errors,
                             touched,
                             isSubmitting,
                        }) => (
                            <Form onSubmit={handleSubmit} className='form'>
                                <Row>
                                    <Col md={6} sm={12} className='mb-3'>
                                        <Form.Group controlId='formCategory'>
                                            <Form.Label>Select Category *</Form.Label>
                                            <Form.Select
                                                    name='category'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.category}
                                                    isInvalid={touched.category && !!errors.category}
                                                >
                                                    <option value="">Choose...</option>
                                                    <option value="Feedback">Feedback</option>
                                                    <option value="Complaint">Complaint</option>
                                                    <option value="Suggestion">Suggestion</option>
                                                </Form.Select>
                                                <Form.Control.Feedback type='invalid'>{errors.category}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} sm={12} className='mb-3'>
                                        <Form.Group controlId='formLocation'>
                                        <Form.Label>Select Location *</Form.Label>
                                        <Form.Select
                                            name='location'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.location}
                                            isInvalid={touched.location && !!errors.location}
                                        >
                                            <option value="">Choose...</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Mumbai">Mumbai</option>
                                            <option value="Chennai">Chennai</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{errors.location}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} sm={12} className='mb-3'>
                                        <Form.Group controlId='formName'>
                                            <Form.Label>YOUR NAME *</Form.Label>       
                                            <Form.Control
                                                type='text'
                                                name='name'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                isInvalid={touched.name && !!errors.name}
                                            />
                                            <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} sm={12} className='mb-3'>
                                        <Form.Group controlId='formPhone'>
                                            <Form.Label>PHONE NUMBER *</Form.Label>
                                            <Form.Control 
                                                type='text'
                                                name='phone'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                isInvalid={touched.phone && !!errors.phone}
                                            />
                                            <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} sm={12} className='mb-3'>
                                        <Form.Group controlId='formAddress'>
                                            <Form.Label>ADDRESS *</Form.Label>
                                            <Form.Control 
                                                type='text'
                                                name='address'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address}
                                                isInvalid={touched.address && !!errors.address}
                                            />
                                            <Form.Control.Feedback type='invalid'>{errors.address}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <Form.Group controlId='formMessage'>
                                            <Form.Label>SEND MESSAGE *</Form.Label>
                                            <Form.Control 
                                                as="textarea"
                                                rows={3}                                               
                                                name='message'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.message}
                                                isInvalid={touched.message && !!errors.message}
                                            />
                                            <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className='text-center'>
                                    <Button type='submit' disabled={isLoading} onClick={!isLoading ? handleClick : isSubmitting}>
                                        {isLoading ? 'Submiting...': 'Submit'}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Container>
        </>
    );
}

export default ContactForm;