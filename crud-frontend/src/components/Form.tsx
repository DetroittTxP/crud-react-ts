import { useState, FC } from 'react'
import { Form, Button } from 'react-bootstrap'

export const CrudForm: FC = () => {
    return (
        <Form>
            <Form.Group controlId='user_id'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' style={{ width: 300 }} placeholder='input username'/>
            </Form.Group>

            <Form.Group controlId='user_password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' style={{ width: 300 }} placeholder='input password'/>
            </Form.Group>

            <Form.Group controlId='user_email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' style={{ width: 300 }} placeholder='input email'/>
            </Form.Group>

            <Form.Group controlId='user_tel'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text' style={{ width: 300 }} placeholder='input tel-number'/>
            </Form.Group>
            <br/>
            <Button>ADD USERS</Button>
        </Form>
    )
}