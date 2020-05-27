// URL base
export const URL_BASE = process.env.URL_BASE || window.location.origin;

export const ROUTER_DEFAULT = '/';
export const ROUTER_HOME = '/home';
export const ROUTER_LOTTERY = '/lottery';
export const ROUTER_ACCOUNT = '/account';
export const ROUTER_DEPOSIT = '/deposit';
export const ROUTER_WITHDRAW = '/withdraw';
export const ROUTER_HISTORY = '/history';
export const ROUTER_BONUS = '/bonus';
export const ROUTER_CART = '/cart';
export const ROUTER_AFFILIATE = '/affiliate';

export const POST = 'POST';
export const GET = 'GET';
export const PUT = 'PUT';
export const DELETE = 'DELETE';


export const API_LOGIN = `${URL_BASE}/login`;

export const ROLE = {
	ADMIN: '1',
	USER: '2',
}

export const SORT = {
	DESC: 'DESC',
	ASC: 'ASC'
}

export const STATUS_LOTTERY = {
	WIN: 'Win',
	LOSS: 'Loss'
}

export const LIST_CURRENCY ={
	BTC: 'BTC',
	ETH: 'ETH',
	QTN: 'QTN',
	USD: 'USD'
}

export const BALANCE_TYPE = [
	{
		symbol: LIST_CURRENCY.BTC,
		name: 'Bitcoin'
	},
	{
		symbol: LIST_CURRENCY.ETH,
		name: 'Ethereum'
	},
	{
		symbol: LIST_CURRENCY.QTN,
		name: 'QuocTruongToken'
	},
];

export const TABS = {
	DASHBOARD: 'DASHBOARD',
	WITHDRAW: 'WITHDRAW',
	DEPOSIT: 'DEPOSIT',
	ORDER: 'ORDER',
	HISTORY: 'HISTORY',
	SETTING: 'SETTING',
}