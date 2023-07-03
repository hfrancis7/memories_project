//what are reducers?

//a reducer is a function -- has a state and an action
//state has been renamed to post

export default (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE': 
            return [...posts, action.payload];
        default: 
            return posts;
    }
}