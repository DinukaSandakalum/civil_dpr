import React, { useState, useEffect } from 'react';
import './index.css';
import { useParams } from "react-router";
import TopBar from "../../../templates/topBar";
import { useDispatch, useSelector } from 'react-redux';
import {fetchBoqRequest} from "../../../../redux/actions/boq/boqActions";
import Spinner from "../../../templates/Spinner";
import {fetchLabourRequest} from "../../../../redux/actions/labour/labourActions";
import {fetchMaterialRequest} from "../../../../redux/actions/material/materialActions";
import {fetchMachineryRequest} from "../../../../redux/actions/machinery/machineryActions";

const DailyProgressReport = () => {
    const { name } = useParams();
    const [boqItems, setBoqItems] = useState([]);
    const [selectedBoqCode, setSelectedBoqCode] = useState('');
    const [selectedBoqItem, setSelectedBoqItem] = useState('');
    const [selectedMaterialType, setSelectedMaterialType] = useState('');
    const [selectedMaterialUom, setSelectedMaterialUom] = useState('');
    const [selectedMachineryType, setSelectedMachineryType] = useState('');
    const [selectedMachineryUom, setSelectedMachineryUom] = useState('');
    const [materialTypes, setMaterialTypes] = useState([]);
    const [materialUoms, setMaterialUoms] = useState([]);
    const [labourTypes, setLabourTypes] = useState([]);
    const [machineryTypes, setmachineryTypes] = useState([]);
    const [machineryUoms, setmachineryUoms] = useState([]);
    const [reportDate, setReportDate] = useState(Date.now);
    const dispatch = useDispatch();
    const boqList = useSelector(state => state.boq.boqList);
    const boqLoading = useSelector(state => state.boq.loading);
    const materialList = useSelector(state => state.material.materialList);
    const labourList = useSelector(state => state.labour.labourList);
    const machineryList = useSelector(state => state.machinery.machineryList);

    useEffect(() => {
        dispatch(fetchBoqRequest());
        dispatch(fetchLabourRequest());
        dispatch(fetchMaterialRequest());
        dispatch(fetchMachineryRequest());
    }, []);

    useEffect(() => {
        setBoqItems(boqList.map(boq => boq.boqDescription));
        setMaterialTypes(materialList.map(material => material.materialName));
        setMaterialUoms(materialList.map(material => material.materialUom));
        setLabourTypes(labourList.map(labour => labour.labourType));
        setmachineryTypes(machineryList.map(machinery => machinery.machineryType));
        setmachineryUoms(machineryList.map(machinery => machinery.machineryUom));
        setSelectedBoqCode(boqList.length > 0 ? boqList[0].boqCode : '');
        setSelectedBoqItem(boqList.length > 0 ? boqList[0].boqDescription : '');
    }, [boqList]);

    const handleDateChange = (e) => {
        const date = e.target.value;
        if(date){
            setReportDate(date);
        }
    };

    const handleBoqItemChange = (e) => {
        const selectedBoq = e.target.value;
        setSelectedBoqItem(selectedBoq);
        const selectedCode = boqList.find(boq => boq.boqDescription === selectedBoq);
        if (selectedCode) {
            setSelectedBoqCode(selectedCode.boqCode);
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

        const materialType = e.target.value;
        setSelectedMaterialType(materialType);
        const selectedMaterialItem = materialList.find(material => material.materialName === materialType);
        if (selectedMaterialItem) {
            setSelectedMaterialUom(selectedMaterialItem.materialUom);
            list[index]['materialUOM'] = selectedMaterialItem.materialUom;
        }

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

        const machineryType = e.target.value;
        setSelectedMachineryType(machineryType);
        const selectedMachineryItem = machineryList.find(machine => machine.machineryType === machineryType);
        if (selectedMachineryItem) {
            setSelectedMachineryUom(selectedMachineryItem.machineryUom);
            list[index]['machineUOM'] = selectedMachineryItem.machineryUom;
        }

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

    // // const labourTypes = ['skill', 'un-skill'];
    // const machineryTypes = ['Backhoe loader', '10 ton roller', 'Bob cat', 'Motor grader'];
    // const machineryUoms = ['hrs', 'days', 'nos'];
    // const materialUoms = ['cum', 'nos'];

    const [data, setData] = useState([]);

    return (
        <>
            <div>
                { boqLoading ? (<Spinner />) :
                    (<>
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
                                            <th rowSpan="2" width='15%'>Quantity</th>
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
                                            <td rowSpan='2'><input type="text" name="quantity"/></td>
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
                                                    <select type="text"
                                                            name="materialType"
                                                            placeholder="material Type"
                                                            value={material.materialType}
                                                            onChange={(e) => handleMaterialInputChange(e, index)}>
                                                        <option value="" disabled>Select Material type</option>
                                                        {materialTypes.map((item, index) => (
                                                            <option key={index} value={item}>
                                                                {item}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td>{material.materialUOM}</td>
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
                                                    <select value={machinery.machineType}
                                                            name="machineType"
                                                            onChange={(e) => handleMachineInputChange(e, index)}>
                                                        <option value="" disabled>machine</option>
                                                        {machineryTypes.map(item => (
                                                            <option key={item} value={item}>{item}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td>{machinery.machineUOM}</td>
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

                        </div>)
                    </>)
                }
            </div>
        </>
    );
};

export default DailyProgressReport;
