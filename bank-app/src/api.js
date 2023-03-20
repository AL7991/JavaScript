export default {
    server: "http://localhost:8080",
    route:{
        api:{
            users:{
                loggedUser: "/loggedUser",
                login: "/logIn",
                register: "/register",
                admin:{
                    getUser: "/api/user/",
                    allUsers: "/api/user/all",
                    allUsersPages: "/api/user/all/",
                    deleteUser: "/api/user/delete/"
                }
            },
            transactions:{
                transfer: "/transaction/transfer",
                credit:{
                    takeCredit: "/transaction/takeCredit",
                    repaymentPartOfCredit: "/transaction/repaymentPartOfCredit",
                    repaymentAllOfCredit: "/transaction/repaymentAllOfCredit"
                },
                history:{
                    all: "/transaction/history/all",
                    allPages: "/transaction/history/all/",
                    page: "/transaction/history/page/"
                } 
            }
        }
    }
};