import React, { Component } from 'react'

const TableHeader = () => {
  return (
            <thead>
          <th>Name</th>
          <th>Email</th>
        </thead>

  )
}

const TableBody = (props) => {
    const row = props.details.map(( row, index ) => {
        return (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.details}</td>
              </tr>
            );
        });
  return <tbody>{row}</tbody>
}

export class Table extends Component {
  render () {
    const { details } = this.props

    return (
        <table>
            <TableHeader />
            <TableBody  details = {details}  />
      </table>
    );
  }
}

export default Table
