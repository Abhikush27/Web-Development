export const reducer=(state,action)=>{
  // reducer function takes two parameters "oldstate" and "action"
  let transactions;

    switch(action.type){
        case 'ADD_TRANSACTION':
           transactions = [action.payload, ...state];
// local storage is to store so that data remains stored even after refreshing the page
           localStorage.setItem('transactions', JSON.stringify(transactions));
// JSON is used to exchange the data to/from the web server
            return transactions;

            case 'DELETE_TRANSACTION':
              transactions = state.filter((transaction) => transaction.id !== action.payload);

              localStorage.setItem('transactions', JSON.stringify(transactions));

                  return transactions;
                  // filter use to return the array . The condition inside the filter got removed
              
              default:
                return state;
}
}
