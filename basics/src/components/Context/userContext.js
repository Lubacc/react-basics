import React from 'react';

const UserContext = React.createContext('Default')//Here we can add a default value to the context

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext