import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import {GlobalFilter} from './GlobalFilter';

export const PaginationTable = () => {

  const columns= useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []); 

  //destructuring:
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups,  //an array, use map method for this
    page, 
    nextPage, //helper functions
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({
    columns: columns, //can also use shorthand
    data: data
  },
   useGlobalFilter,
   useSortBy,
   usePagination

  );

  //destructuring
  const {globalFilter } = state;
  const {pageIndex, pageSize} = state;

  return (
    <>
      {/* receives 2 props globalFilter and setGlobalFilter */}
      <div className="table__filter flex justify-between items-center">
        <GlobalFilter filter ={globalFilter} setFilter ={setGlobalFilter} />
        <div className="per-page flex justify-between items-center">
          <span className="table__filter-name text-green-600 font-bold text-left block mr-4">Show</span>
          <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="w-24 border border-green-500 rounded-sm text-green-600">
            {
              [10,25,50].map(pageSize => (
                <option key={pageSize} value={pageSize}>{pageSize}</option>
              ))
            }
          </select>
        </div>
      </div>
      
      <div>
        <table className="test-table border-collapse w-full text-lg shadow my-4 rounded overflow-hidden"
        {...getTableProps()}>
          <thead>
            {
              headerGroups.map( headerGroup => (
                <tr className="thead-row bg-yellow-600 text-white text-left" 
                {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map( column => (
                      <th className="p-5"
                      {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {/* for sorting added the column.getSortByToggleProps method */}  
                      {column.render('Header')} 
                        <span className="sorting-icon ml-2"> 
                          {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼'): ''}
                        </span>
                      </th> //renders the Header property
                    ))
                  }
                </tr>
              ))
            }
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              page.map(row => {
                prepareRow(row)
                return (
                  <tr className="table-row text-left bg-gray-50 hover:bg-white"
                  {...row.getRowProps()}>
                    {
                      row.cells.map( cell => {
                        return <td className="p-4"
                        {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })
                    }
                  </tr>
                )
              })
            }

          </tbody>
        </table>
       
        <div className="flex items-center justify-center">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="border-2 border-green-600 bg-green-500 text-white w-12 rounded-sm font-bold  flex justify-center items-center py-4 px-6">{'<<'} </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className="border-2 border-green-600 bg-green-500 text-white w-32 block rounded-sm font-bold py-4 px-6 mx-2 flex justify-center items-center">Previous</button>
          <button onClick={() => nextPage()} disabled={!canNextPage} className="border-2 border-green-600 bg-green-500 text-white w-32 block rounded-sm font-bold py-4 px-6 mx-2 flex justify-center items-center">Next</button>
          <button onClick={()=> gotoPage(pageCount -1)} disabled={!canNextPage} className="border-2 border-green-600 bg-green-500 text-white w-12 rounded-sm font-bold flex justify-center items-center py-4 px-6">{'>>'}</button>
        </div>
        <div className="flex items-center justify-center mb-2">
        <span className="text-green-600">
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong> 
          </span>
        </div>
      </div>
    </>
  )
}