import React, {memo} from "react";

const DataTable = ({tData}) => {
    // get table column
    const column = Object.keys(tData[0]);

    // get table heading data
    const ThData = () => (column.map((item)=> <th key={item} className="px-6 py-3">{item}</th> ))

    // get table row data
    const rowData = () =>(
        tData.map((item) => (
            <tr className={`border-b dark:border-gray-700 ${item.assetClass === 'Credit' ? 'bg-green-500' : item.assetClass === 'Equities' ? 'bg-blue-500' : 'bg-white-500'}`}>
                {
                    column.map((v) => <td className={`px-6 py-4 ${v === 'price' && Math.sign(item[v]) === -1 ? 'text-red-800 font-medium' : 'text-black-400'}`}>{item[v]}</td>)
                }
            </tr>
        ))
    )

    return(
        <>
            <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>{ThData()}</tr>
                </thead>
                <tbody>
                    {rowData()}
                </tbody>
            </table>
        </>
    )
}

export default memo(DataTable);