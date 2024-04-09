import React, {useEffect, useState} from 'react';
import './index.css';
import TopBar from "../../../templates/topBar";
import {fetchWorkSummaryRequest} from "../../../../redux/actions/workSummary/workSummaryListActions";
import {useDispatch, useSelector} from "react-redux";

const SummaryPage = () => {

    const dispatch = useDispatch();
    const workSummaryList =  useSelector(state => state.workSummaryList.workSummaryList);
    const [selectedWorkSummaryList, setSelectedWorkSummaryList] = useState(workSummaryList);
    const user = useSelector(state => state.user);
    const approvalStatusEnums = ['APPROVED', 'NOT_APPROVED', 'PENDING'];

    useEffect(() => {
        const requestBody = {
            "requestBody": {
                "workSummaryId": null,
                "userId": null,
                "workItemId": null
            },
            "requestHeader": {
                "requestId": "1676541979935",
                "timestamp": "2023-02-16T10:06:17.152Z",
                "channel": "dpr-ui",
                "userId": "10"
            }
        };

        dispatch(fetchWorkSummaryRequest(requestBody));
        setSelectedWorkSummaryList(workSummaryList);
    }, [dispatch]);

    const handleChange = (event, workSummaryIndex) => {
        const { value } = event.target;
        // Create a new array with updated approvalStatus for the specific workSummary
        const updatedWorkSummaryList = workSummaryList.map((workSummary, index) => {
            if (workSummary.workSummaryId === workSummaryIndex) {
                return { ...workSummary, approvalStatus: value };
            }
            return workSummary;
        });
        // Update state or dispatch an action to update the workSummaryList
        setSelectedWorkSummaryList(updatedWorkSummaryList);
        // Example of dispatching an action (if you're using Redux)
        // dispatch(updateWorkSummaryList(updatedWorkSummaryList));
    };


    let num = 0;

    return (
        <>
            <div className="summary-page">
                <h1>Work Summary</h1>
            </div>
            <div className="summary-page">
                <table className="summary-page-table">
                    <thead>
                    <tr>
                        <th rowSpan="2">No</th>
                        <th rowSpan="2">WorkItem</th>
                        <th rowSpan="2">Date</th>
                        <th rowSpan="2">BOQ Code</th>
                        <th rowSpan="2">BOQ Name</th>
                        <th colSpan="3">Material</th>
                        <th colSpan="2">Labour</th>
                        <th colSpan="3">Machinery</th>
                        <th rowSpan="2">Approval Status</th>
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

                        selectedWorkSummaryList.map((workSummary, index) => {
                            num++;
                            const len = Math.max(workSummary.usedLabourList.length, workSummary.usedMaterialList.length, workSummary.usedMachineryList.length);
                            const arrays = [workSummary.usedMaterialList, workSummary.usedLabourList, workSummary.usedMachineryList];
                            let maxArray = workSummary.usedMaterialList;
                            for (let i = 1; i < 3; i++){
                                if (maxArray.length < arrays[i].length){
                                    maxArray = arrays[i];
                                }
                            }
                            return maxArray.map((item, itemIndex) =>
                                <tr key={'row_${itemIndex}'}>
                                    {itemIndex === 0 && (
                                        <>
                                            <td rowSpan={len}>{num}</td>
                                            <td rowSpan={len}>{workSummary.workItem}</td>
                                            <td rowSpan={len}>{workSummary.workDate}</td>
                                            <td rowSpan={len}>{workSummary.boqCode}</td>
                                            <td rowSpan={len}>{workSummary.boqName}</td>
                                        </>
                                    )}
                                    <td>{workSummary.usedMaterialList[itemIndex]? workSummary.usedMaterialList[itemIndex].materialType : '-'}</td>
                                    <td>{workSummary.usedMaterialList[itemIndex]? workSummary.usedMaterialList[itemIndex].uom : '-'}</td>
                                    <td>{workSummary.usedMaterialList[itemIndex]? workSummary.usedMaterialList[itemIndex].quantity : '-'}</td>
                                    <td>{workSummary.usedLabourList[itemIndex]? workSummary.usedLabourList[itemIndex].labourType : '-'}</td>
                                    <td>{workSummary.usedLabourList[itemIndex]? workSummary.usedLabourList[itemIndex].quantity : '-'}</td>
                                    <td>{workSummary.usedMachineryList[itemIndex]? workSummary.usedMachineryList[itemIndex].machineryType : '-'}</td>
                                    <td>{workSummary.usedMachineryList[itemIndex]? workSummary.usedMachineryList[itemIndex].uom : '-'}</td>
                                    <td>{workSummary.usedMachineryList[itemIndex]? workSummary.usedMachineryList[itemIndex].quantity : '-'}</td>
                                    {itemIndex === 0 && (
                                        <>
                                            {console.log("logged in user: ", user)}
                                            {user.user.responseBody.userRole === 'USER'?
                                                <td rowSpan={len}>
                                                    {workSummary.approvalStatus}
                                                </td> :
                                                <td rowSpan={len}>
                                                <select value={workSummary.approvalStatus} onChange={(event) => handleChange(event, workSummary.workSummaryId)}>
                                            {approvalStatusEnums.map(item => (
                                                <option key={item} value={item}>{item}</option>
                                                ))}
                                                </select>
                                                </td>
                                            }

                                        </>
                                    )}
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

export default SummaryPage;