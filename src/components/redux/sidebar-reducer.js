let initialState = {
    navBar: [
        {id: 1, name: "Profail" , link: "/Profail"},
        {id: 2, name: "Messages" , link: "/Dialogs"},
        {id: 3, name: "News" , link: "/News"},
        {id: 4, name: "Music" , link: "/Music"},
        {id: 5, name: "Find user" , link: "/User"},
        {id: 6, name: "Settings" , link: "/Settings"},
    ],
};

const sidebarReducer = (state = initialState, action) => {

    return state;
};

export default sidebarReducer;