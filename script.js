

function getShapeCard(e)
{
    return e
}

let shapes = document.getElementsByClassName("hover");
   
for(const shape of shapes)
{
    shape.addEventListener('click', function(e){
        hover(shape) 
        
    })
    const cardShape = getShapeCard(shape);
    cardShape.addEventListener('mouseover', event => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        cardShape.style.backgroundColor = "#"+randomColor;
  });
}