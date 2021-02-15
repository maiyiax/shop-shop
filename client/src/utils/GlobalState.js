// import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers';

// // instatiate the global state object
// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//     const [state, dispatch] = useProductReducer({
//         products: [],
//         cart: [],
//         cartOpen: false,
//         categories: [],
//         currentCategory: '',
//     });
//     // use this to confirm it works!
//     console.log(state);
//     // returns most up to date version of our global state object and the method executed to update the state
//     return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//     return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };