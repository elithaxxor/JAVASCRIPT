import ListDisplay from './ListDisplay'

// to recieve the data, then map it (create new array) and send to displayList to display

const  List = ( { data }) => {
    return (
        <ul>
            {data.map(list_data => (
                <ListDisplay key={list_data.id} data={data}/>
                ))}
        </ul>
    )}
export default List;
