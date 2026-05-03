 type User = {
    name: string;
    age: number;
 }


 // interface: object type: array, object, function
 interface IUser {
    name: string;
    age: number;
 }

 type Role = {
    role: 'admin' | 'user';
 }

 type UserWithRole =  User & Role;

 const user1: UserWithRole ={
    name: "Nakib",
    age: 22,
    role: 'admin'
 }

 const user2: IUser ={
    name: "Rakib",
    age: 21
 }

 type IsAdmin = boolean;
 const isAdmin: IsAdmin = false;



 interface IUserWithRole extends IUser{
    role: 'admin' | "user"
 }


 // function


 type Add = (num1: number, num2: number) => number;

 interface IAdd {}


 const add: Add = (num1, num2) => num1 + num2;

 type Friends = string[]
 const friends: Friends = ["A", "B", "C"]

 interface IFriends {
    [index: number] : string;
 }