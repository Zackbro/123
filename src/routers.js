const Good = resolve => {
    require.ensure(['./components/goods/Goods.vue'], () => {
        resolve(require('./components/goods/Goods.vue'));
    });
};
const Rating = resolve => {
    require.ensure(['./components/ratings/Ratings.vue'], () => {
        resolve(require('./components/ratings/Ratings.vue'));
    });
};
const Sell = resolve => {
    require.ensure(['./components/seller/Sell.vue'], () => {
        resolve(require('./components/seller/Sell.vue'));
    });
};
// import Sell from './components/seller/Sell'

const routers = [{
    path: '/',
    name: 'good',
    component: Good
}, {
    path: '/ratings',
    name: 'ratings',
    component: Rating
}, {
    path: '/seller',
    name: 'sell',
    component: Sell
}, {
    path: '*',
    component: Good
}];

export default routers;