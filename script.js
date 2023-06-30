// existing code
let question1 = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
  };
  let question2 = {
    title: 'perro',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 0
  };
  let question3 = {
    title: 'pájaro',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 2
  };
  let question4 = {
    title: 'pez',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 3
  };
  let question5 = {
    title: 'lagarto',
    alternatives: ['dog', 'cat', 'bird', 'fish', 'lizard'],
    correctAnswer: 4
  };
  let questions = [question1, question2, question3, question4, question5];

  let count = 0;

  var dice = {
    side:5,
  roll: function(){
    var randomnumber = Math.floor (Math.random() *this.side);
    return randomnumber;
  }
}


  // modified code
  function showQuestion() {
    count = dice.roll();
    let q = questions[count];
    // existing code
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title;
    // new code
    let alts = document.querySelectorAll('.alternative');
    console.log(alts);
    alts.forEach(function(element, index){
      element.textContent = q.alternatives[index];
      element.addEventListener('click', function(){
        if (q.correctAnswer == index) {
          console.log('Correct Answer!');
        } else {
          console.log('Wrong Answer!');
        }
      }, {once: true});
      
    });
    // count = count + 1;
    // if (count == 4) {
    //   count = 0;
    // }
  }
  // call the function
  showQuestion ()
 