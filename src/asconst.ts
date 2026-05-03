

// const UserRoles = {
//     Admin : "Admin",
//     Editor : "Editor",
//     Viewer : "Viewer"
// } as const;

// // typeof operator
// // keyof operator

// const canEdit = (role: keyof typeof UserRoles) => {
//     if(role === UserRoles.Admin || role === UserRoles.Editor){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const isEditPermissible = canEdit(UserRoles.Admin);
// console.log(isEditPermissible);




const UserRoles = {
    Admin : "ADMIN",
    Editor : "EDITOR",
    Viewer : "VIEWER"
} as const;


const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }
    else{
        return false;
    }
}

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);



