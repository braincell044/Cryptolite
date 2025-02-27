import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

const LoginAdmin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://cryptoapi-1-c7wy.onrender.com/api/admin/login', { email, password });

            const { token } = response.data;
            localStorage.setItem('token', token);

            // Decode JWT Token
            const decoded = jwtDecode(token);
            if (decoded.isAdmin) {
                navigate('/admin/dashboard'); // Redirect to Admin Dashboard
            } else {
                navigate('/user/dashboard'); // Redirect to User Dashboard
            }
        } catch (error) {
            setError("Invalid email or password.");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '25rem', padding: '20px' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-3">Admin Login</Card.Title>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LoginAdmin;
