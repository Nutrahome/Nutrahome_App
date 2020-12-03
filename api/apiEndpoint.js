
export default {
    api: (path) => `https://great-baboon-12.loca.lt/${path}`,
    users: () => "/api/users",
    dietitians: () => `/api/dietitians`,
    booths: () => `/api/booths`,
    meals: () => `/api/meals`,
    payatm: () => `/api/paymethods/atm`,
    payinet: () => `/api/paymethods/internet`,
    payemoney: () => `/api/paymethods/emoney`,
}