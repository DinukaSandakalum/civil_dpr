import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchWorkSummarySuccess, fetchWorkSummaryFailure } from '../../actions/workSummary/workSummaryListActions';
import {FETCH_WORK_SUMMARY_REQUEST} from "../../actions/actionTypes";
import axios from 'axios';

function* listWorkSummary(action) {
    console.log("list work summary: ", action);
    try {
        const response = yield call(axios.post, 'http://localhost:8085/civil/dpr/api/v1.0/ui-manager/worksummary/list',
            action.payload,
            {
                headers: { 'Content-Type': 'application/json' }
            });
        console.log("response data: ", response.data);
        const workSummaryList = response.data.responseBody.map(item => ({
            workSummaryId: item.workSummaryId,
            workItem: item.workItem,
            workDate: item.workDate,
            completedQuantity: item.completedQuantity,
            boqCode: item.boqCode,
            boqName: item.boqName,
            userName: item.userName,
            usedMaterialList: item.usedMaterialList.map(material => ({
                usedMaterialId: material.usedMaterialId,
                materialType: material.materialType,
                uom: material.uom,
                quantity: material.quantity,
            })),
            usedLabourList: item.usedLabourList.map(labour => ({
                usedLabourId: labour.usedLabourId,
                labourType: labour.labourType,
                quantity: labour.quantity,
            })),
            usedMachineryList: item.usedMachineryList.map(machine => ({
                usedMachineryId: machine.usedMachineryId,
                machineryType: machine.machineryType,
                uom: machine.uom,
                quantity: machine.quantity,
            })),
            approvalStatus: item.approvalStatus
        }));
        console.log("workSummaryList: ", workSummaryList);
        yield put(fetchWorkSummarySuccess(workSummaryList));
    } catch (error) {
        yield put(fetchWorkSummaryFailure(error.message));
    }
}

export function* workSummaryListSaga() {
    yield takeLatest(FETCH_WORK_SUMMARY_REQUEST, listWorkSummary);
}