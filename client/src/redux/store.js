import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import alertSlice from "./AlertSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    alert: alertSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;

// 리덕스는 전역 상태를 관리하는데 사용되는 라이브러리로
// 'store'에 전역 상태가 저장되어 있음
// + 컴포넌트 간 상태 공유, 최적화
