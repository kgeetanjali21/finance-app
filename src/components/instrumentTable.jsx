import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchInstrumentData } from "../features/instrumentSlice";
import DataTable from "./dataTable";

const InstrumentTable = () => {
    const dispatch = useDispatch();
    const dataInstrument  = useSelector((state) => state.instrument);
    const isLoading = useSelector((state) => state.loading);
    const isError = useSelector((state) => state.error);
    
    useEffect(() => {
        dispatch(fetchInstrumentData());
    }, [dispatch]);

    return(
        <>
            <div className="text-center py-6 font-bold">Table of Financial Instruments</div>
            { isLoading && <div>Loading...</div>}
            { 
                !isLoading && isError ?
                    <div>Error: { isError }</div>
                : null
            }
            {
                !isLoading && dataInstrument.length
                ? (<DataTable tData={dataInstrument} />)
                : null
            }
        </>
    )
}

export default InstrumentTable;