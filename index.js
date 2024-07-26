 const url = 'https://official-joke-api.appspot.com/random_joke'

 function fetchJoke(){
    fetch(url)
    .then(res => res.json())
    .then(jokes =>{
        displayJokes(jokes);
    })

    
 }

 fetchJoke()

 function displayJokes(joke){
    const container = document.querySelector('.jokes')

    const type = document.createElement('h4');
    const setup = document.createElement('p');
    const punchline = document.createElement('p');
    const showLine = document.createElement('button');
    const next = document.createElement('button');

    punchline.className = 'hide';

    showLine.addEventListener('click', ()=>{
        if(punchline.className === 'hide'){
            punchline.className = 'show';
            showLine.textContent = 'Hide line'
        }

        else{
            punchline.className = 'hide';
            showLine.textContent = 'Show Line';
        }
    })

    next.addEventListener('click', ()=>{
        container.innerHTML = '';
        fetchJoke();
    })

    showLine.textContent = 'Show Line';
    next.textContent = 'Next';

    type.textContent = joke.type;
    setup.textContent = joke.setup;
    punchline.textContent = joke.punchline;

  console.log(container.append(type, setup, punchline, showLine, next));

 }
