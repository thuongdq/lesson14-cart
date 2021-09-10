var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Sam sung galazy s7',
        image: '',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15
    },
    {
        id: 3,
        name: 'Oppo 1s',
        image: '',
        description: 'Sản phẩm do China sản xuất',
        price: 350,
        inventory: 5
    },

];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;