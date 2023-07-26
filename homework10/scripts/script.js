
document.getElementById('changeButton1').addEventListener('click', function() {
    
    const redSquare = document.getElementById('redSquare');

    redSquare.style.backgroundColor = 'green';

    redSquare.style.width = '100px';
    redSquare.style.height = '100px';
  });


  function changeColor() {

    const pinkSquare = document.getElementById('pinkSquare');

    pinkSquare.style.backgroundColor = 'blue';

    console.log('Новый цвет квадрата: ' + pinkSquare.style.backgroundColor);
  }

  document.getElementById('changeButton2').addEventListener('click', changeColor);


   function increaseSize() {

    const square = document.getElementById('square');

    const currentWidth = square.offsetWidth;
    const currentHeight = square.offsetHeight;

   
    square.style.width = (currentWidth + 20) + 'px';
    square.style.height = (currentHeight + 20) + 'px';
  }

  document.getElementById('resizeButton').addEventListener('click', increaseSize);



  document.getElementById('createButton').addEventListener('click', function() {
    const paragraph = document.createElement('p');

    paragraph.classList.add('blueParagraph');

    const paragraphText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates unde officia accusantium tenetur, enim adipisci laborum perspiciatis ipsa voluptatem, repudiandae fugit quis nostrum. Accusantium quisquam sint minus tempora blanditiis natus?';

    paragraph.textContent = paragraphText;

    const rootDiv = document.querySelector('.root');

    rootDiv.appendChild(paragraph);
  });



  const colors = ['darkBlue', 'green'];

  document.getElementById('createButton_1').addEventListener('click', function() {
    const paragraph = document.createElement('p');

    const currentIndex = document.querySelectorAll('.root p').length % colors.length;

    paragraph.textContent = 'ПАРАГРАФ ' + colors[currentIndex] + ' ЦВЕТА .';

    if (colors[currentIndex] === 'darkBlue') {
      paragraph.classList.add('darkBlueParagraph');
    } else if (colors[currentIndex] === 'green') {
      paragraph.classList.add('greenParagraph');
    }

    const rootDiv = document.querySelector('.root');

    rootDiv.appendChild(paragraph);
  });



