
import { useState, FC } from 'react'
import { Card,Button } from 'react-bootstrap'
import { CrudType } from '../interface/DataType'



export const CrudDisplayData: FC<CrudType> = ({ UsersType }) => {
    return (
        <div>
            {UsersType.map((e, index) => (
                <Card key={index}>
                    <Card.Body>
                        <Card.Title>{e.user_name}</Card.Title>
                        <Card.Text>
                            <div>{e.user_id}</div>
                            <div>{e.user_email}</div>
                            <div>{e.user_tel}</div>
                        </Card.Text>
                        <Button variant="primary">DELETE</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}