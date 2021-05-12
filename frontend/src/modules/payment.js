import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as paymentApi from '../lib/api/payment';
import {deleteAllShoppingListItem} from './shoppingList';
import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';
import moment from 'moment';
export const requestPayment = createAsyncThunk(
  'payment/requestPayment',
  async (formData, {dispatch, getState}) => {
    try {
      const {shoppingList, userInfo} = getState();
      const txSeq = String(shoppingList.id);
      const txDateTime = String(moment().format('YYYYMMDDHHmmss'));
      const plainString = txSeq + txDateTime + shoppingList.storeId + clientNo;
      const key = 'incssafy12#$12#$';
      const authHash = await Base64.stringify(hmacSHA256(plainString, key));
      console.log(authHash);
      const response = await paymentApi.requestPayment({
        txSeq: txSeq,
        txDateTime: txDateTime,
        storeId: shoppingList.storeId,
        clientNo: userInfo.memberId,
        prodList: shoppingList.paymentDetail,
        authHash: authHash,
      });
      if (response.status === 200) {
        console.log(formData);
        await paymentApi.resultPayment({
          paymentId: shoppingList.id,
          paymentPlan: formData,
          paymentResult: '성공',
        });
        dispatch(deleteAllShoppingListItem(1));
        return shoppingList.paymentDetail;
      }
    } catch (e) {}
  },
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    hasErrors: false,
    paymentList: [],
  },
  reducers: {},
  extraReducers: {
    [requestPayment.pending]: state => {
      state.loading = true;
    },
    [requestPayment.fulfilled]: (state, {payload}) => {
      console.log(payload);
      state.paymentList = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [requestPayment.rejected]: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {} = paymentSlice.actions;
export default paymentSlice.reducer;
