import React, {memo, useState} from "react";

const DataTable = ({tData}) => {
    const [sortBy, setSortBy] = useState('');
    const [tableData, setTableData] = useState(tData);

    // get table column
    const column = Object.keys(tableData[0]);

    // get table heading data
    const ThData = () => (column.map((item)=> <th key={item} className="px-6 py-3">{item}</th> ))

    // get table row data
    const rowData = () =>(
        tableData.map((item) => (
            <tr className={`border-b dark:border-gray-700 ${item.assetClass === 'Credit' ? 'bg-green-500' : item.assetClass === 'Equities' ? 'bg-blue-500' : 'bg-white-500'}`}>
                {
                    column.map((v) => <td className={`px-6 py-4 ${v === 'price' && Math.sign(item[v]) === -1 ? 'text-red-800 font-medium' : 'text-black-400'}`}>{item[v]}</td>)
                }
            </tr>
        ))
    )

    const handleChange = (e) => {
        const {value} = e.target;
        setSortBy(value);
        if(value === 'price') {
            const tempData = tData.toSorted((a, b) => b.price - a.price);
            setTableData(tempData);
        } else if(value === 'ticker') {
            const tempData = tData.toSorted((a, b) => a.ticker < b.ticker ? -1 : 1);
            setTableData(tempData);
        } else if(value === 'assetClass') {
            
        }
    }

    return(
        <>
            <div className="py-4">
                <label>SortBy: </label>
                <select
                    value={sortBy}
                    onChange={handleChange}
                    className="capitalize"
                >
                    <option value="" disabled>Select one</option>
                    {
                        column.map((col, i) => {
                            return <option value={col} key={i} className="capitalize">{col}</option>
                        })
                    }
                </select>
            </div>
            {
                tableData.length ?
                    <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>{ThData()}</tr>
                        </thead>
                        <tbody>
                            {rowData()}
                        </tbody>
                    </table>
                : null
            }
        </>
    )
}

export default memo(DataTable);