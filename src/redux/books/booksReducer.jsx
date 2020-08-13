import data from '../../data/data.json'
const initialstate = {
    primaryData : data
}

const booksReducer = (state = initialstate, {type,payload}) => {
    switch(type){
        default :
          	return state;
    }

}

export default booksReducer