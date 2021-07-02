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
    }
};


module.exports = fixer;
