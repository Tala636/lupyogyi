const SignReducer = (state = null, action) => {

    switch(action.type){

        case 'Signup':
        return action;


        default:
        return state;

    }

}

export default SignReducer;