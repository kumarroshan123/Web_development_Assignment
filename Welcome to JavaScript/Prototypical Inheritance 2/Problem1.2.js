function User(name,role){
    this.name=name;
    this.role=role;
}

User.prototype.getRole=function(){
    console.log(`Role: ${this.role}`);
}

function Admin(name){
    User.call(this,name,'admin');
}

Object.setPrototypeOf(Admin.prototype,User.prototype);
Admin.prototype.manageUser=function(){
    console.log('Admin managing users')
}

let admin = new Admin('Roshan');
admin.getRole();
admin.manageUser();