import { UserType } from './usertype';
import { DepartmentSettings } from 'src/app/balancesheet/model/departmentsettings';

export class User {
    userId: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    userType: UserType;
    userTypeId :string;
    remarks:string;
    departmentId=[]
    departmentName=[]
    isActive : boolean
}

export class UserData {


    public Data = new Array<User>();
}


export class UserList {
    user : User = new User ();
    usertype :  UserType = new UserType();
    department: DepartmentSettings[] = []
}

export class AdminUser{
    userId:string;
    userName:string;
    password:string;
    userType:string
}