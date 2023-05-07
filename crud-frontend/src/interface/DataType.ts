export interface CrudType {
    UsersType:{
        id:number,
        user_name:string
        user_id:string,
        user_password:string,
        user_email:string,
        user_tel:string
    }[],
}

export interface FormType{
    id:number,
    user_name:string
    user_id:string,
    user_password:string,
    user_email:string,
    user_tel:string
}

export interface FormFuncType {
    onClickSubmit:(data:FormType) => void
}


