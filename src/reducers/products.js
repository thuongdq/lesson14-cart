var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-7-plus-xam-didongviet.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Sam sung galazy s7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/75180/samsung-galaxy-s7-edge-xanh-org.png',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'Oppo 1s',
        image: 'https://cdn.tgdd.vn/Products/Images/42/75091/oppo-f1-plus-14-300x300.jpg',
        description: 'Sản phẩm do China sản xuất',
        price: 350,
        inventory: 10,
        rating: 3
    },

];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;