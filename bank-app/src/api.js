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
                    deleteUser: "/api/user/delete/"
                }
            },
            transactions:{
                transfer: "/transfer",
                credit:{
                    takeCredit: "/takeCredit",
                    repaymentPartOfCredit: "/repaymentPartOfCredit",
                    repaymentAllOfCredit: "/repaymentAllOfCredit"
                },
                history:{
                    all: "/history/all",
                    page: "/history/page/{page}"
                } 
            }
        }
    }
};