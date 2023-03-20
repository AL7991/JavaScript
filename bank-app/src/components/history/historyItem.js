const HistoryItem = ({transaction}) =>{

    return(
        <div>
                <p>Transaction Id: {transaction.id}</p>
                <p>Transaction: {transaction.transactionType}</p>
                <p>Date: {transaction.dateOfTransaction }</p>
                <p>Amount: {transaction.amount }</p>
                {transaction.accountReciverId !== undefined && (<p>Reciver account: {transaction.accountReciverId }</p>)}
        </div>
    );
}

export default HistoryItem;