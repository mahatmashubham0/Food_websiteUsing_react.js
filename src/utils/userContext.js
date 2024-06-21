const { createContext } = require("react");

const UserContext = createContext({
    name: "ankit",
    email: "ankit@gmail.com"
})

export default UserContext;