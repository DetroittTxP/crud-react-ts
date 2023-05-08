
import { useState, FC, useEffect } from 'react'
import { Card,Button } from 'react-bootstrap'
import { CrudType,FormType } from '../interface/DataType'

export const CrudDisplayData: FC<CrudType> = ({ UsersType,ongetdeletedata,ongetEdit }) => {

    const [rawdata,Setrawdata] = useState(UsersType)

    useEffect(() => {
        Setrawdata(UsersType)
    },[UsersType])

    const OnClickDelete =(id:number) =>{
            let deleteddata = rawdata.filter(value => value.id !== id)
            Setrawdata(deleteddata)
            ongetdeletedata(deleteddata)
    }

 

    return (
        <div>
            {rawdata.map((e, index) => (
                <Card key={index}>
                    <Card.Body>
                        <Card.Title>{e.user_name}</Card.Title>
                        <Card.Text>
                            <div>{e.user_id}</div>
                            <div>{e.user_email}</div>
                            <div>{e.user_tel}</div>
                        </Card.Text>
                        <Button onClick={()=>OnClickDelete(e.id)} variant="primary">DELETE</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button onClick={() => ongetEdit(e.id) } variant="primary">EDIT</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}