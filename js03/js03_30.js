let address = 'Seoul';
let members = {};
let addFamily = function(age, name, role) {
    this.members[role] = {age, name};
};
let getHeadcount = function() {
    return Object.keys(this.members).length;
};

let family = {address, members, addFamily, getHeadcount};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn','niece');
family.addFamily(10, 'dongdangi', 'dog');
console.log(family.getHeadcount());