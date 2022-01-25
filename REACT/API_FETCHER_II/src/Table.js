
import TableRow from './TableRow';

// to recieve the data, then map it for further processing (row, col, cell)
const  Table = ( { data }) => {
    return (
      <div className='table-container'>
          <table>
              <tbody>
              {data.map(parsed_data => (
                  <TableRow key={parsed_data.id} parsed_data={parsed_data}/>
              ))}

              </tbody>
          </table>
      </div>
    )}
export default Table;
