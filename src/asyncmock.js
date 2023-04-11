const products = [
    {
        id: '1',
        categoryId: '1',
        name: 'Lechuga Crespa',
        price: 220,
        img: '../img/lechuga-crespa.png',
        description: 'Hortaliza de primera calidad'
    },
    {
        id: '2',
        categoryId: '1',
        name: 'Lechuga Morada',
        price: 220,
        img: '../img/lechuga-morada.png',
        description: 'Hortaliza de primera calidad'
    },
    {
        id: '3',
        categoryId: '1',
        name: 'Albahaca',
        price: 240,
        img: '../img/albahaca.png',
        description: 'Hortaliza de primera calidad'
    },
    {
        id: '4',
        categoryId: '1',
        name: 'Rúcula',
        price: 220,
        img: '../img/rucula.png',
        description: 'Hortaliza de primera calidad'
    },
    {
        id: '5',
        categoryId: '2',
        name: 'Cajón de Lechuga Crespa',
        price: 4000,
        img: '../img/cajon-crespa.png',
        description: 'Hortaliza de primera calidad'
    },
    {
        id: '6',
        categoryId: '2',
        name: 'Cajón de Lechuga Morada',
        price: 4000,
        img: '../img/lechuga-morada.png',
        description: 'Hortaliza de primera calidad'
    },
    {
        id: '7',
        categoryId: '2',
        name: 'Cajón de Albahaca',
        price: 4500,
        img: '../img/albahaca-maceta.png',
        description: 'Hortaliza de primera calidad'
    },
    {
        id: '8',
        categoryId: '2',
        name: 'Cajón de Rúcula',
        price: 4000,
        img: '../img/rucula.png',
        description: 'Hortaliza de primera calidad'
    },
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}

export const getProductById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productByID = products.find(prod => prod.id === id)
            resolve(productByID);
        }, 2000);
    })
}

export const getProductsByCategoryId = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const categoryById = products.filter(prod => prod.categoryId === categoryId)
            resolve(categoryById);
        }, 2000);
    })
}