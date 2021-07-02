const fixer = {
    fixData: (data) =>{
        data.forEach(element => {
            element.name = fixer.firstToUpper(element.name);
            element.users.forEach(user => {
                for (const obj in user) {
                    if (user[obj] === undefined) {
                        user[obj] = "";
                    }

                }
                user.firstName = fixer.firstToUpper(user.firstName);
                user.lastName = fixer.firstToUpper(user.lastName);
            });
            element.users = fixer.orderUsersByalphabeticalOrder(element.users);
        });

        data = fixer.orderByUsersAmount(data);
        return data;
    },
    firstToUpper(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    orderByUsersAmount(items){
        items.sort(function(a, b) {
            if (a.users.length < b.users.length) {
                return 1;
            }
            if (a.users.length > b.users.length) {
                return -1;
            }

            return 0
            
        })
         return items;
    },
    orderUsersByalphabeticalOrder(users){
        users.sort(function (a, b) {
            if (a.firstName > b.firstName) {
              return 1;
            }
            if (a.firstName < b.firstName) {
              return -1;
            }
            return 0;
        });
        return users;
    },
    userHasCar(data, hasCar){
        data.forEach(element => {
            element.users = element.users.filter(user => user.car == hasCar)
            element.usersLength = element.users.length
        });

        return data;
    },
    isDataFixed(data){
        data.forEach(element => {
            
            element.users.forEach(user => {
                if(!fixer.firstToUpper(user.firstName) || !fixer.firstToUpper(user.lastName)){
                    return false
                }
            });
        })

        return true;
    },
    isFirstUpper(str){
        return str.charAt(0).toUpperCase() === str.charAt(0)
    },
    usersTable(data){
        let users = [];
        data.forEach((element, i) => {

            element.users.forEach(user => {
                user.company = element.name;
            });
            users = [...users, ...element.users]
        });
        users = fixer.orderByAge(users)

        return users;
    },
    orderByAge(users){
        users.sort(function(a, b) {
            if (a.age < b.age) {
                return 1;
            }
            if (a.age > b.age) {
                return -1;
            }

            return 0
            
        })
        return users;
    },
    averages(data){
        let users = fixer.usersTable(data);
        let usersCar = users.filter(user => user.car == true);
        let totalAge = users.reduce((sum, value) => ( sum + value.age ), 0)
        let totalAgeCar = usersCar.reduce((sum, value) => ( sum + value.age ), 0)
        let average = totalAge / users.length;
        let averageCar = totalAgeCar / usersCar.length;

        let result = {
            size: users.length,
            average: parseFloat(average).toFixed(2),
            hasCar: users.filter(user => user.car == true).length,
            averageWithCar: averageCar

        }

        return result;
    },
    concatFullName(data){
        let newData = [];
        data.forEach((element, i) => {

            element.users.forEach(user => {
                for (const obj in user) {
                    if (user[obj] === undefined) {
                        user[obj] = "";
                    }
                }
                user.firstName+user.lastName+user.age;
                newData[user.firstName+user.lastName+user.age] = user.car
            });
        });

        return newData;
    },
    getCompanyById(data, id){
        result = data.filter(e => e.id == id)
        return result[0].name;
    },
    deleteCompanyById(data, id){
        result = data.filter(e => e.id != id)
        return result;
    },
    addUserByCompanyId(data, id){
        result = data.filter(e => e.id == id)
        result[0].users.push({
            age: 35,
            car: true,
            firstName: "Juan",
            id: Math.floor(Math.random() * (100 - 1)) + 1,
            lastName: "Delgado",
        })
        result[0].usersLength = result[0].users.length;
        return result[0];
    },
    deleteUserById(data, company_id, user_id){
        comp = data.filter(e => e.id == company_id)

        comp[0].users = comp[0].users.filter(e => e.id != user_id)

        comp[0].usersLength = comp[0].users.length

        return comp[0];
    },
    changeUserCompany(data, company_id, user_id){
        indexCompany = data.findIndex(e => e.id == company_id)
        userChange = data[indexCompany].users.filter(e => e.id == user_id);
        data[indexCompany].users = data[indexCompany].users.filter(e => e.id != user_id)
        data[indexCompany].usersLength = data[indexCompany].users.length

        data[data.length - 1].users.push(...userChange);
        data[data.length - 1].usersLength = data[data.length - 1].users.length;
        
        return data;

    }
};


module.exports = fixer;
