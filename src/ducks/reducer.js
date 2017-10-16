const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE ='UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_REAL_ESTATE = 'UPDATE_REALESTATE',
    UPDATE_COST = 'UPDATE_COST',
    UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT',
    UPDATE_CREDIT = 'UPDATE_CREDIT',
    UPDATE_HISTORY = 'UPDATE_HISTORY',
    UPDATE_ADRESS_ONE = 'UPDATE_ADRESS_ONE',
    UPDATE_ADRESS_TWO = 'UPDATE_ADRESS_TWO',
    UPDATE_ADRESS_THREE = 'UPDATE_ADRESS_THREE',
    UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME = 'UPDATE_LAST_NAME',
    UPDATE_EMAIL = 'UPDATE_EMAIL';

export function updateEmail(email){
    return{
        type: UPDATE_EMAIL,
        payload: email
    }
}
    
export function updateLastName(name){
    return{
        type: UPDATE_LAST_NAME,
        payload: name
    }
}

export function updateFirstName(name){
    return{
        type: UPDATE_FIRST_NAME,
        payload: name
    }
}

export function updateAdressThree(address){
    return{
        type: UPDATE_ADRESS_THREE,
        payload: address
    }
}

export function updateAdressTwo(address){
    return{
        type: UPDATE_ADRESS_TWO,
        payload: address
    }
}

export function updateAdressOne(address){
    return{
        type: UPDATE_ADRESS_ONE,
        payload: address
    }
}

export function updateHistory(history){
    return{
        type: UPDATE_HISTORY,
        payload: history
    }
}

export function updateCredit(credit){
    return{
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updatePayment(pay){
    return{
        type: UPDATE_DOWN_PAYMENT,
        payload: pay
    }
}

export function updateCost(cost){
    return{
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateRealEstate(agent){
    return{
        type: UPDATE_REAL_ESTATE,
        payload: agent
    }
}

export function updateFound(found){
    return{
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateProp(prop){
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType(property){
    return{
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

function reducer(state=initialState, action){
    switch(action.type){

        

        case UPDATE_LOAN_TYPE:

            return Object.assign({}, state, {loanType:action.payload})

        case UPDATE_PROPERTY_TYPE:

            return Object.assign({}, state, {propertyType:action.payload})

        case UPDATE_CITY:

            return Object.assign({}, state, {city: action.payload})

        case UPDATE_PROP:

            return Object.assign({}, state, {propToBeUsedOn: action.payload})

        case UPDATE_FOUND:

            return Object.assign({}, state, {found: action.payload})

        default:

            return state;
    }
}

export default reducer;