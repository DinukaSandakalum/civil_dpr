import React, { useState, useEffect } from 'react';
import './index.css';
import { useParams } from "react-router";
import TopBar from "../../../templates/topBar";

const DailyProgressReport = () => {
    const { id } = useParams();

    const [boqCodes, setBoqCodes] = useState([]);
    const [selectedBoqCode, setSelectedBoqCode] = useState('');
    const [selectedBoqItem, setSelectedBoqItem] = useState('');
    const [rowHeight, setRowHeight] = useState('1');
    const [rows, setRows] = useState([]);
    const mockBoqData = [
        { code: '001', item: 'excavation' },
        { code: '002', item: 'concreting' },
    ];
    const fetchBoqData = () => {
        setBoqCodes(mockBoqData.map(boq => boq.code));
        setSelectedBoqCode(mockBoqData[0].code);
        setSelectedBoqItem(mockBoqData[0].item);
    };

    useEffect(() => {
        fetchBoqData();
    }, []);

    const handleBoqCodeChange = (e) => {
        const selectedCode = e.target.value;
        setSelectedBoqCode(selectedCode);
        // Find corresponding BOQ item for the selected code
        const selectedBoq = mockBoqData.find(boq => boq.code === selectedCode);
        if (selectedBoq) {
            setSelectedBoqItem(selectedBoq.item);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    };

    return (
        <>
            <TopBar/>
            <div className="daily-progress-report-container">
                <h1>Project Details</h1>
                <h2>Project Name: Project {id}</h2>
                <form onSubmit={handleSubmit}>
                    <table>
                        <thead>
                        <tr>
                            <th rowSpan="2">Date</th>
                            <th rowSpan="2">BOQ Code</th>
                            <th rowSpan="2">BOQ Item</th>
                            <th colSpan="3">Material</th>
                            <th rowSpan="2">Action</th>
                            <th colSpan="3">Labour</th>
                            <th rowSpan="2">Action</th>
                            <th colSpan="3">Machinery</th>
                            <th rowSpan="2">Action</th>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <th>UOM</th>
                            <th>Quantity</th>
                            <th>Type</th>
                            <th>UOM</th>
                            <th>Quantity</th>
                            <th>Type</th>
                            <th>UOM</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowSpan={rowHeight}><input type="date" name="date" /></td>
                            <td rowSpan={rowHeight}>
                                <select value={selectedBoqCode} onChange={handleBoqCodeChange}>
                                    <option value="" disabled>Select BOQ Item</option>
                                    {boqCodes.map(item => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </td>
                            <td rowSpan={rowHeight}>
                                <span>{selectedBoqItem}</span>
                            </td>
                            <td>
                                <input type="text" name="materialType" placeholder="Type" />
                            </td>
                            <td>
                                <input type="text" name="materialUOM" placeholder="UOM" />
                            </td>
                            <td>
                                <input type="number" name="materialQuantity" placeholder="Quantity" />
                            </td>
                            <td><button type="submit">Del</button></td>
                            <td>
                                <input type="text" name="labourType" placeholder="Type" />
                            </td>
                            <td>
                                <input type="text" name="labourUOM" placeholder="UOM" />
                            </td>
                            <td>
                                <input type="number" name="labourQuantity" placeholder="Quantity" />
                            </td>
                            <td><button type="submit">Del</button></td>
                            <td>
                                <input type="text" name="machineType" placeholder="Type" />
                            </td>
                            <td>
                                <input type="text" name="machineUOM" placeholder="UOM" />
                            </td>
                            <td>
                                <input type="number" name="machineQuantity" placeholder="Quantity" />
                            </td>
                            <td><button type="submit">Del</button></td>
                        </tr>
                        <tr className="add-row">
                            <td colSpan="3"></td>
                            <td colSpan="4"><button type="submit">Add Material</button></td>
                            <td colSpan="4"><button type="submit">Add Labour</button></td>
                            <td colSpan="4"><button type="submit">Add Machinery</button></td>
                        </tr>
                        <tr className="save-record">
                            <td colSpan="13"></td>
                            <td colSpan="2"><button type="submit">Save Record</button></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
};

export default DailyProgressReport;
