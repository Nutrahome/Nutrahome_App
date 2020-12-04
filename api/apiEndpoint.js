
export default {
    api: (path) => `https://young-grasshopper-38.loca.lt/${path}`,
    users: () => "/api/users",
    dietitians: () => `/api/dietitians`,
    booths: () => `/api/booths`,
    meals: () => `/api/meals`,
    payatm: () => `/api/paymethods/atm`,
    payinet: () => `/api/paymethods/internet`,
    payemoney: () => `/api/paymethods/emoney`,
}