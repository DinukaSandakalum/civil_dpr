import React, { useState, useEffect } from 'react';
import './index.css';
import { useParams } from "react-router";
import TopBar from "../../../templates/topBar";

const DailyProgressReport = () => {
    const { name } = useParams();
    const [boqItems, setBoqItems] = useState([]);
    const [selectedBoqCode, setSelectedBoqCode] = useState('');
    const [selectedBoqItem, setSelectedBoqItem] = useState('');
    const [reportDate, setReportDate] = useState(Date.now);
    const mockBoqData = [
        { item: 'excavation', code: '001'},
        { item: 'concreting', code: '002'},
    ];
    const fetchBoqData = () => {
        setBoqItems(mockBoqData.map(boq => boq.item));
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

    const handleDateChange = (e) => {
        const date = e.target.value;
        if(date){
            setReportDate(date);
        }
    }

    const handleBoqItemChange = (e) => {
        const selectedBoq = e.target.value;
        setSelectedBoqItem(selectedBoq);
        const selectedCode = mockBoqData.find(boq => boq.item === selectedBoq);
        if (selectedCode) {
            setSelectedBoqCode(selectedCode.code);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            no: 1,
            date: reportDate,
            boqCode: selectedBoqCode,
            boqName: selectedBoqItem,
            materials: materials,
            labours: labours,
            machinery: machineries
        };
        setData([...data, newData]);
        console.log(data);
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

    let num = 0;

    const maxLength = Math.max(materials.length, labours.length, machineries.length);

    const labourTypes = ['skill', 'un-skill']
    const machineTypes = ['Backhoe loader', '10 ton roller', 'Bob car', 'Motor grader']
    const machineUOM = ['hrs', 'days', 'nos']

    const [data, setData] = useState([]);

    return (
        <>
            <TopBar/>
            <div className="daily-progress-report-container">
                <h1>Daily Progress Report</h1>
                <h2>Project Name: {name}</h2>
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
                                <td rowSpan='2'><input type="date" name="date" onChange={handleDateChange}/></td>
                                <td rowSpan='2'>
                                    <span>{selectedBoqCode}</span>
                                </td>
                                <td rowSpan='2'>
                                    <select value={selectedBoqItem} onChange={handleBoqItemChange}>
                                        <option value="" disabled>Select BOQ Item</option>
                                        {boqItems.map(item => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
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
                                            step="0.01"
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
                                <th colSpan="2">Labour</th>
                                <th rowSpan="2">Action</th>
                            </tr>
                            <tr>
                                <th>Type</th>
                                <th>Quantity (hrs)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {labours.map((labour, index) => (
                                <tr key={index}>
                                    <td>
                                        <select type="text"
                                                name="labourType"
                                                placeholder="Type"
                                                value={labour.labourType}
                                                onChange={(e) => handleLabourInputChange(e, index)}>
                                            <option value="" disabled>Select labour type</option>
                                            {labourTypes.map((item, index) => (
                                                <option key={index} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            step="0.1"
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
                                            step="0.01"
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

            <div className="summary-section">
                <h1>Daily Progress Summary</h1>
                <table className="summary-table">
                    <thead>
                    <tr>
                        <th rowSpan="2">No</th>
                        <th rowSpan="2">Date</th>
                        <th rowSpan="2">BOQ Code</th>
                        <th rowSpan="2">BOQ Name</th>
                        <th colSpan="3">Material</th>
                        <th colSpan="2">Labour</th>
                        <th colSpan="3">Machinery</th>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <th>UOM</th>
                        <th>Quantity</th>
                        <th>Type</th>
                        <th>Quantity (hrs)</th>
                        <th>Type</th>
                        <th>UOM</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        data.map((record, index) => {
                            num++;
                            const len = Math.max(record.materials.length, record.labours.length, record.machinery.length);
                            console.log('len: ', len);
                            const arrays = [record.materials, record.labours, record.machinery];
                            console.log('arrays: ', arrays);
                            let maxArray = record.materials;
                            console.log('maxArray: ', maxArray);
                            for (let i = 1; i < 3; i++){
                                if (maxArray.length < arrays[i].length){
                                    maxArray = arrays[i];
                                }
                            }
                            console.log('maxArray: ', maxArray);
                            return maxArray.map((item, itemIndex) =>
                                <tr key={'row_${itemIndex}'}>
                                    {console.log('aaaaaaaaaa')}
                                    {itemIndex === 0 && (
                                        <>
                                            {console.log('record: ', record)}
                                            <td rowSpan={len}>{num}</td>
                                            <td rowSpan={len}>{record.date}</td>
                                            <td rowSpan={len}>{record.boqCode}</td>
                                            <td rowSpan={len}>{record.boqName}</td>
                                        </>
                                    )}
                                        <td>{record.materials[itemIndex]? record.materials[itemIndex].materialType : '-'}</td>
                                        <td>{record.materials[itemIndex]? record.materials[itemIndex].materialUOM : '-'}</td>
                                        <td>{record.materials[itemIndex]? record.materials[itemIndex].materialQuantity : '-'}</td>
                                        <td>{record.labours[itemIndex]? record.labours[itemIndex].labourType : '-'}</td>
                                        <td>{record.labours[itemIndex]? record.labours[itemIndex].labourQuantity : '-'}</td>
                                        <td>{record.machinery[itemIndex]? record.machinery[itemIndex].machineType : '-'}</td>
                                        <td>{record.machinery[itemIndex]? record.machinery[itemIndex].machineUOM : '-'}</td>
                                        <td>{record.machinery[itemIndex]? record.machinery[itemIndex].machineQuantity : '-'}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>

            </div>
        </>
    );
};

export default DailyProgressReport;
