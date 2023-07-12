

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

const stageItems = document.querySelectorAll('.stage');
const floorValue = document.querySelector('#floor-value');
const flatsValue = document.querySelector('#all-value');
const freeValue = document.querySelector('#free-value');
const bookingValue = document.querySelector('#booking-value');
const actionValue = document.querySelector('#action-value');
const soldValue = document.querySelector('#sold-value');
const blueBuildDescription = document.querySelector('.blue-build-info_descriptions');

stageItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        const dataFloorNumber = item.getAttribute('data-floor-number');
        floorValue.innerHTML = dataFloorNumber;

        const dataFlatsNumber = item.getAttribute('data-flats-number');
        flatsValue.innerHTML = dataFlatsNumber;

        const dataFreeFlats = item.getAttribute('data-free-flats');
        freeValue.innerHTML = dataFreeFlats;

        const dataBookingFlats = item.getAttribute('data-booking-flats');
        bookingValue.innerHTML = dataBookingFlats;

        const dataActionFlats = item.getAttribute('data-action-flats');
        actionValue.innerHTML = dataActionFlats;

        const dataSoldFlats = item.getAttribute('data-sold-flats');
        soldValue.innerHTML = dataSoldFlats;

        const dataBuildDescription = item.getAttribute('data-build-description');    
        blueBuildDescription.innerHTML = dataBuildDescription;
    })
});

const floorLink = document.querySelectorAll('.floor-link')
 floorLink.forEach(link => {
    console.log(link);

    link.addEventListener('click', function(event) {
        if (link.classList.contains('sold')) {
            event.preventDefault();
            alert('Этаж продан');
         } else {
            null
        }
    })
   
 });
 

 // flat


 const flat = document.querySelectorAll('.flat');


 flat.forEach(item => {
   if (item.classList.contains('free')) {
     item.querySelector('.status-text').innerHTML = "Свободна";
   } else if (item.classList.contains('booking')) {
     item.querySelector('.status-text').innerHTML = "Бронь";
   } else if (item.classList.contains('action')) {
     item.querySelector('.status-text').innerHTML = "Акция";
   } else {
     item.querySelector('.status-text').innerHTML = "Продано";
   }  
 });

/*const flatSold = document.querySelector('.sold');

flatSold.forEach(link => {
  console.log(link);

});

link.addEventListener('mouseover', function(event) {
    if (link.classList.contains('sold')) {
      event.preventDefault();
      alert('Этаж продан');
    } else {
      null
    }
  })*/



