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

    const [materials, setMaterials] = useState([
        { materialType: '', materialUOM: '', materialQuantity: '' }
    ]);

    const handleMaterialAddRow = () => {
        const newRow = { materialType: '', materialUOM: '', materialQuantity: '' };
        setMaterials([...materials, newRow]);
    };

    const handleMaterialInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...materials];
        list[index][name] = value;
        setMaterials(list);
    };

    const handleMaterialRemoveRow = (index) => {
        const list = [...materials];
        if (list.length > 1) {
            list.splice(index, 1);
            setMaterials(list);
        }
    };

    const [labours, setLabours] = useState([
        { labourType: '', labourUOM: '', labourQuantity: '' }
    ]);

    const handleLabourAddRow = () => {
        const newRow = { labourType: '', labourUOM: '', labourQuantity: '' };
        setLabours([...labours, newRow]);
    };

    const handleLabourInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...labours];
        list[index][name] = value;
        setLabours(list);
    };

    const handleLabourRemoveRow = (index) => {
        const list = [...labours];
        if (list.length > 1) { // Prevents deleting the last row
            list.splice(index, 1);
            setLabours(list);
        }
    };

    const [machineries, setMachineries] = useState([
        { machineType: '', machineUOM: '', machineQuantity: '' }
    ]);

    const handleMachineAddRow = () => {
        const newRow = { machineType: '', machineUOM: '', machineQuantity: '' };
        setMachineries([...machineries, newRow]);
    };

    const handleMachineInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...machineries];
        list[index][name] = value;
        setMachineries(list);
    };

    const handleMachineRemoveRow = (index) => {
        const list = [...machineries];
        if (list.length > 1) {
            list.splice(index, 1);
            setMachineries(list);
        }
    };

    return (
        <>
            <TopBar/>
            <div className="daily-progress-report-container">
                <h1>Project Details</h1>
                <h2>Project Name: Project {id}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="boq-item-table-section">
                        <table className="boq-item-table">
                            <thead>
                            <tr>
                                <th rowSpan="2" width='15%'>Date</th>
                                <th rowSpan="2" width='15%'>BOQ Code</th>
                                <th rowSpan="2">BOQ Item</th>
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
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sub-table-section">
                        <table className="sub-tables">
                            <thead>
                            <tr>
                                <th colSpan="3">Material</th>
                                <th rowSpan="2">Action</th>
                            </tr>
                            <tr>
                                <th>Type</th>
                                <th>UOM</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {materials.map((material, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="text"
                                            name="materialType"
                                            placeholder="Type"
                                            value={material.materialType}
                                            onChange={(e) => handleMaterialInputChange(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="materialUOM"
                                            placeholder="UOM"
                                            value={material.materialUOM}
                                            onChange={(e) => handleMaterialInputChange(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="materialQuantity"
                                            placeholder="Quantity"
                                            value={material.materialQuantity}
                                            onChange={(e) => handleMaterialInputChange(e, index)}
                                        />
                                    </td>
                                    <td><button type="button" onClick={() => handleMaterialRemoveRow(index)}>Del</button></td>
                                </tr>
                            ))}
                            <tr className="add-row">
                                <td colSpan="4"><button type="button" onClick={handleMaterialAddRow}>Add Material</button></td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="sub-tables">
                            <thead>
                            <tr>
                                <th colSpan="3">Labour</th>
                                <th rowSpan="2">Action</th>
                            </tr>
                            <tr>
                                <th>Type</th>
                                <th>UOM</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {labours.map((labour, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="text"
                                            name="labourType"
                                            placeholder="Type"
                                            value={labour.labourType}
                                            onChange={(e) => handleLabourInputChange(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="labourUOM"
                                            placeholder="UOM"
                                            value={labour.labourUOM}
                                            onChange={(e) => handleLabourInputChange(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="labourQuantity"
                                            placeholder="Quantity"
                                            value={labour.labourQuantity}
                                            onChange={(e) => handleLabourInputChange(e, index)}
                                        />
                                    </td>
                                    <td>
                                        {/* Use type="button" to prevent form submission when removing rows */}
                                        <button type="button" onClick={() => handleLabourRemoveRow(index)}>Del</button>
                                    </td>
                                </tr>
                            ))}
                            {/* Use type="button" to prevent form submission when adding rows */}
                            <tr className="add-row">
                                <td colSpan="4">
                                    <button type="button" onClick={handleLabourAddRow}>Add Labour</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="sub-tables">
                            <thead>
                            <tr>
                                <th colSpan="3">Machinery</th>
                                <th rowSpan="2">Action</th>
                            </tr>
                            <tr>
                                <th>Type</th>
                                <th>UOM</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {machineries.map((machinery, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="text"
                                            name="machineType"
                                            placeholder="Type"
                                            value={machinery.machineType}
                                            onChange={(e) => handleMachineInputChange(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="machineUOM"
                                            placeholder="UOM"
                                            value={machinery.machineUOM}
                                            onChange={(e) => handleMachineInputChange(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="machineQuantity"
                                            placeholder="Quantity"
                                            value={machinery.machineQuantity}
                                            onChange={(e) => handleMachineInputChange(e, index)}
                                        />
                                    </td>
                                    <td><button type="button" onClick={() => handleMachineRemoveRow(index)}>Del</button></td>
                                </tr>
                            ))}
                            <tr className="add-row">
                                <td colSpan="4"><button type="button" onClick={handleMachineAddRow}>Add Machinery</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="save-record">
                        <button type="submit">Save Record</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default DailyProgressReport;
