const arrayOfCars = [
    {
        id: 1,
        name: 'car1'
    }, 
    {
        id: 2,
        name: 'car2'
    },   
    {
        id: 3,
        name: 'car3'
    },   
    {
        id: 4,
        name: 'car4'
    }, 
]


const currentDate = new Date()

let listItem = document.querySelector("ul")

arrayOfCars.forEach((item, index) => {

 let listValue = document.createElement("li");
 listValue.textContent = `${index} - ${item.name} - ${item.id} - ${currentDate.getDate()}`;
 listItem.appendChild(listValue);

 if (index%2 !== 0) {
    listValue.style.color = "red"
 }
})
