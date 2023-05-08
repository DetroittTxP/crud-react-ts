export interface CrudType {
    UsersType:{
        id:number,
        user_name:string
        user_id:string,
        user_password:string,
        user_email:string,
        user_tel:string
    }[],
    ongetdeletedata:(data:FormType[])=>void,
    ongetEdit:(id:number)=>void
}

export interface EditType {
    UsersType:{
        id:number,
        user_name:string
        user_id:string,
        user_password:string,
        user_email:string,
        user_tel:string
    } ,
    id:number,
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




