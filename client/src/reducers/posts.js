//what are reducers?

//a reducer is a function -- has a state and an action
//state has been renamed to post

const reducer = (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return posts;
        case 'CREATE': 
            return posts;
        default: 
            break;
    }
}