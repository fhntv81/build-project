
const buildItem = document.querySelectorAll('.build')
const numberValue = document.querySelector('#number-value')
const stageValue = document.querySelector('#stages-value')
const flatValue = document.querySelector('#flats-value')
const buildDescription = document.querySelector('.building-info_descriptions')

 
buildItem.forEach(item => {
    item.addEventListener('mouseover', function() {
        const dataBuildNumber = item.getAttribute('data-build-number');
        numberValue.innerHTML = dataBuildNumber;

        const dataStagesValue = item.getAttribute('data-stages-value');
        stageValue.innerHTML = dataStagesValue;

        const dataFlatsValue = item.getAttribute('data-flats-value');
        flatValue.innerHTML = dataFlatsValue;

        const dataDescriptionValue = item.getAttribute('data-description');
        buildDescription.innerHTML = dataDescriptionValue;
       
        
        
    })
    

});

const buildLink = document.querySelectorAll('.build-link')
buildLink.forEach(link => {
    console.log(link);
    link.addEventListener('click', function(event) {
        if (link.classList.contains('sold')) {
            event.preventDefault();
            alert('Дом продан');
            
        } else {
            null
        }
    })
});

//floor 

const floorItems = document.querySelectorAll('.stage');
const floorValue = document.querySelector('#floor-value');
const flatsValue = document.querySelector('#all-value');
const freeValue = document.querySelector('#free-value');
const bookingValue = document.querySelector('#booking-value');
const actionValue = document.querySelector('#action-value');
const soldValue = document.querySelector('#sold-value');
const blueBuildDescription = document.querySelector('.blue-build-info_descriptions');

floorItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        const dataFloorNumber = getAttribute('data-floor-number');
        const dataFlatsNumber = getAttribute('data-flats-number');
        const dataFreeFlats = getAttribute('data-free-flats');
        const dataBookingFlats = getAttribute('data-booking-flats');
        const dataActionFlats = getAttribute('data-action-flats');
        const dataSoldFlats = getAttribute('data-sold-flats');
        const dataBuildDescription = getAttribute('data-build-description');    
    })

    setTimeout(function () {
        floorValue.innerHTML = dataFloorNumber;
        flatsValue.innerHTML = dataFlatsNumber;
        freeValue.innerHTML = dataFreeFlats;
        bookingValue.innerHTML = dataBookingFlats;
        actionValue.innerHTML = dataActionFlats;
        soldValue.innerHTML = dataSoldFlats;
    })
});

