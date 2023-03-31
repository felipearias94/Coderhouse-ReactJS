const products = [
    { id: 1, name: 'Lechuga Crespa', price: 220, img: './img/lechuga-crespa.png', description: 'Hortaliza de primera calidad' },
    { id: 2, name: 'Lechuga Morada', price: 220, img: './img/lechuga-morada.png', description: 'Hortaliza de primera calidad' },
    { id: 3, name: 'Albahaca', price: 220, img: './img/albahaca.png', description: 'Hortaliza de primera calidad' },
    { id: 4, name: 'Rúcula', price: 220, img: './img/rucula.png', description: 'Hortaliza de primera calidad' },
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 5000);
    })
}