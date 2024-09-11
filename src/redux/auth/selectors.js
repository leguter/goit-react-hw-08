export const selectAuthToken = state => state.auth.token
export const selectAuthIsLogin = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUser = state => state.auth.user