// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  // set up counter
  let counter = 0;

  // select both buttons
  const btn = document.querySelectorAll('.btn');

  btn.forEach(function(btn){
    btn.addEventListener('click', function(){

      //get event target
      let value = event.target;
      // if statement for button left
      if (value.classList.contains('btn-left')){
        // move left
        counter--;
        // if counter is less than 0
        if (counter < 0 ){
          counter = pictures.length -1;
        }
        console.log(counter);
        
        document.querySelector('.img-container')
          .style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;

      } else if (value.classList.contains('btn-right')) {
        //right
        counter++;
        // if counter is less than 0
        if (counter > pictures.length -1 ){
          counter = 0;
        }
        console.log(counter);
        document.querySelector('.img-container')
          .style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;

      }
    })
  })
  


})();

