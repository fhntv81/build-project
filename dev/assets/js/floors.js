const flatArray = [
{
    id: 1,
    house: "1",
    floor: "2",
    rooms: "3",
    square: "92.5 м.кв.",
    price: "600$",
    priceTotal: "55500$",
    flatNumber: 21,
    status: "free",
    description: [{
            text: "Бутишів провулок, 17, Київ, 01001",
        },
        {
            text: "By using modal, you can overlay the top layer inside",
        },
        {
            text: "Error: Unexpected identifier 'title'",
        },
        {
            text: 'Приложению "Zoom" нужны',
        },
    ]
},

{
    id: 2,
    house: "1",
    floor: "2",
    rooms: "1",
    square: "40,7 м.кв.",
    price: "600$",
    priceTotal: "24420$",
    flatNumber: 22,
    status: "booking",

    description: [{
            text: "Бутишів провулок, 17, Київ, 01001",
        },
        {
            text: "By using modal, you can overlay the top layer inside",
        },
        {
            text: "Error: Unexpected identifier 'title'",
        },
        {
            text: 'Приложению "Zoom" нужны',
        },
    ]
},
{
    id: 3,
    house: "1",
    floor: "2",
    rooms: "2",
    square: "60,7 м.кв.",
    price: "600$",
    priceTotal: "36420$",
    flatNumber: 23,
    status: "sold",
    description: [{
            text: "Бутишів провулок, 17, Київ, 01001",
        },
        {
            text: "By using modal, you can overlay the top layer inside",
        },
        {
            text: "Error: Unexpected identifier 'title'",
        },
        {
            text: 'Приложению "Zoom" нужны',
        },
    ]
},
{
    id: 4,
    house: "1",
    floor: "2",
    rooms: "3",
    square: "82 м.кв.",
    price: "700$",
    priceTotal: "52500$",
    flatNumber: 24,
    status: "sold",

    description: [{
            text: "Бутишів провулок, 17, Київ, 01001",
        },
        {
            text: "By using modal, you can overlay the top layer inside",
        },
        {
            text: "Error: Unexpected identifier 'title'",
        },
        {
            text: 'Приложению "Zoom" нужны',
        },
    ]
},

{
    id: 5,
    house: "1",
    floor: "2",
    rooms: "2",
    square: "69.2 м.кв.",
    price: "550$",
    priceTotal: "38060$",
    flatNumber: 25,
    status: "action",

    description: [{
            text: "Бутишів провулок, 17, Київ, 01001",
        },
        {
            text: "By using modal, you can overlay the top layer inside",
        },
        {
            text: "Error: Unexpected identifier 'title'",
        },
        {
            text: 'Приложению "Zoom" нужны',
        },
    ]
},
{
    id: 6,
    house: "1",
    floor: "2",
    rooms: "1",
    square: "39.2 м.кв.",
    price: "600$",
    priceTotal: "23520$",
    flatNumber: 26,
    status: "booking",

    description: [{
            text: "Бутишів провулок, 17, Київ, 01001",
        },
        {
            text: "By using modal, you can overlay the top layer inside",
        },
        {
            text: "Error: Unexpected identifier 'title'",
        },
        {
            text: 'Приложению "Zoom" нужны',
        },
    ]
},
{
    id: 7,
    house: "1",
    floor: "2",
    rooms: "1",
    square: "40.0 м.кв.",
    price: "700$",
    priceTotal: "28000$",
    flatNumber: 27,
    status: "free",

    description: [{
            text: "Бутишів провулок, 17, Київ, 01001",
        },
        {
            text: "By using modal, you can overlay the top layer inside",
        },
        {
            text: "Error: Unexpected identifier 'title'",
        },
        {
            text: 'Приложению "Zoom" нужны',
        },
    ]
},
{
    id: 8,
    house: "1",
    floor: "2",
    rooms: "4",
    square: "99.2 м.кв.",
    price: "800$",
    priceTotal: "72460$",
    flatNumber: 28,
    status: "free",

    description: [{
            text: "Бутишів провулок, 17, Київ, 01001",
        },
        {
            text: "By using modal, you can overlay the top layer inside",
        },
        {
            text: "Error: Unexpected identifier 'title'",
        },
        {
            text: 'Приложению "Zoom" нужны',
        },
    ]
},
{
    id: 9,
    house: "1",
    floor: "2",
    rooms: "2",
    square: "59 м.кв.",
    price: "700$",
    priceTotal: "41300$",
    flatNumber: 29,
    status: "sold",

    description: [{
            text: "Бутишів провулок, 17, Київ, 01001",
        },
        {
            text: "By using modal, you can overlay the top layer inside",
        },
        {
            text: "Error: Unexpected identifier 'title'",
        },
        {
            text: 'Приложению "Zoom" нужны',
        },
    ]
},
]


window.addEventListener('load', function() {
    document.querySelector('.floor-item-page') ? installFloorPlan() : null;

    function installFloorPlan() {
        const flatInfo = document.querySelector("#flat-info")
        const flatGroup = document.querySelectorAll('.flat')

        function deletteActiveClass() {
            flatGroup.forEach(active => {
                active.classList.remove('active')
            })
        }

        const flatObj = [{
            id: 1,
            house: "1",
            floor: "2",
            rooms: "3",
            square: "92.5 м.кв.",
            price: "600$",
            priceTotal: "55500$",
            flatNumber: 21,
            status: "free",
            description: [{
                    text: "Бутишів провулок, 17, Київ, 01001",
                },
                {
                    text: "By using modal, you can overlay the top layer inside",
                },
                {
                    text: "Error: Unexpected identifier 'title'",
                },
                {
                    text: 'Приложению "Zoom" нужны',
                },
            ]
    },]

        const renderInfo = (flatInfoTemplate) => {
            const flatInformation = flatInfoTemplate.map(item => {
                return (`
                    <div class="flat-item flat-item--house">Номер будинку: <b id="house-number">${item.house}</b></div>
                    <div class="flat-item flat-item--floor">Поверх: <b id="floor-number">${item.floor}</b></div>
                    <div class="flat-item flat-item--rooms">Кількість кімнат: <b id="rooms-quantity">${item.rooms}</b></div>
                    <div class="flat-item flat-item--square">Площа квартири: <b id="flat-square">${item.square}</b></div>
                    <div class="flat-item flat-item--price">Ціна за м.кв: <b id="price-meter">${item.price}</b></div>
                    <div class="flat-item flat-item--price-total">Ціна за квартиру: <b id="price-total">${item.priceTotal}</b></div>
                    <div class="flat-item flat-item--number">Квартира <b id="flat-number">${item.flatNumber}</b></div>
                    <div class="flat-item flat-item--status">Статус: <b id="flat-status">${item.status}</b></div>
                    `)
            }).join("")
            flatInfo.innerHTML = flatInformation
        }
        renderInfo(flatObj)





        flatGroup.forEach(flat => {
            flat.addEventListener('click', () => {
                deletteActiveClass()
                flat.classList.add('active')
 
                let thisFlat = flat.getAttribute('data-number');
                let flatNumber = flatArray.filter(obj => obj.id.toString() === thisFlat);
                console.table(flatNumber); 

                renderInfo(flatNumber)
              
             })

        })
    } 
});









/*flatArray.forEach(i => {
    console.log(i.flatNumber);
});


function isBigEnough(value) {
    return value <= 10;
  }
  
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);*/







