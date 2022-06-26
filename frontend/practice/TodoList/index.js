var count = 0;


document.querySelector('.btn').addEventListener('click',function(){

    let list = document.querySelector('.list-group')
    let inputText = document.querySelector('.form-control')


    let listItem = document.createElement('li')
    //li 요소 생성
    let listBtn = document.createElement('button')
    //li 요소 닫기 생성


    listItem.className = "list-group-item"
    listBtn.className = "btn-close btn-right"


    listItem.innerHTML = inputText.value
    list.prepend(listItem);
    listItem.prepend(listBtn);
    //list 추가

   listBtn.addEventListener('click', function(){
    list.removeChild(listItem)
   })
    
   inputText.value = ''

})

$.get(
    `http://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=239f714bf98d6db7a536ea1fdd9eb757`)
    .done(function(result){
        console.log(result);
    })
    .fail(function(error){
        console.log(error)
    })




// axios.get('https://api.openweathermap.org/data/2.5/find?q=Seoul&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35')
//         .then(function(response) {
//           console.log(response.data.list[0]);
//         })
//         .catch(function(error) {
//           console.log(error);
//         })
//         .then(function() {});
