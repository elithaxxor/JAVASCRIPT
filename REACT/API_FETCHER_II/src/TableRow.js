import TableCell from './TableCell'

// set up table rows, drill the TableCell
const  TableRow = ( { data, parsed_data }) => {
    return (
        <tr>
            {Object.entries(parsed_data).map(([key, value])=> {
                return(
                    <TableCell key={key} cellData={JSON.stringify(value)} />
                )
            })}
        </tr>
    )}
export default TableRow;
