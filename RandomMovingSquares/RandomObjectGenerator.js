//Generate a random amount of objects with random attributes


$(document).ready(function () {

    moveInterval = setInterval(moveSquares, 1000000)
    $('input').on('mousedown', function(event) {
            
            event.stopPropagation();

            if(this.id == 'createObject') {
                id = 0
                offSet = 0
                objectsCreated.length = 0;
                amount = $('#objAmount').val()
                $('.container').html('')
                $('#result').html('')
                createRandomObjects(amount)
                clearInterval(moveInterval) 
                moveInterval = setInterval(moveSquares, 10)
            }

        });

        $('div').on('mousedown', '.square', function (e) {  

                if($(this).css('background-color', 'red')) {
                    
                    $(this).remove();
                }
            
        });
});

class objTest {
    constructor(color, direction, speed) {
        this.color = color;
        this.direction = direction;
        this.speed = speed;
    }
    logTest() {
        /*document.getElementById("result").innerHTML += `<br>Object created with\nthe next attributes:
                                                        Color: ${this.color}, 
                                                        Direction: ${this.direction}, 
                                                        Speed: ${this.speed}`*/
        
        createSquares(this.color, this.direction, this.speed)

    }
}

min = Math.ceil(0);
max = Math.floor(3);
//minAmount = Math.ceil(1);
//maxAmount = Math.floor(6);
//amount = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;

const attributes = {
    color: ['Red', 'Blue', 'Green', 'Yellow'],
    direction: ['left', 'right', 'top', 'bottom'],
    speed: [1, 2, 3, 4],
}

objectsCreated = [];
selectedAttrs = [];

function createRandomObjects(amount) {

    for (i = 0; i < amount; i++) {

        for (r = 0; r <= 3; r++) {
            randomAttribute = Math.floor(Math.random() * (max - min + 1)) + min;
            selectedAttrs.push(randomAttribute)
        }
        const testObj = new objTest(attributes.color[selectedAttrs[0]],
                                    attributes.direction[selectedAttrs[1]],
                                    attributes.speed[selectedAttrs[2]]
        );
        selectedAttrs.length = 0;
        objectsCreated.push(testObj)
        testObj.logTest()
    }
}

function createSquares(color, direction, speed){    
            id=id+1
            $('.container').append('<div class="square" id='+id+"></div>")
            $('#'+id).css('background-color', color);
}

function moveSquares(){
               offSet=offSet+2
               for(i=0; i<=objectsCreated.length-1; i++) {
                if(i % 2 == 0) {
                   $('#'+i).css(objectsCreated[i].direction, offSet)
                }
                else {          
                    switch (true) {
                        case (objectsCreated[i].direction == 'top'):
                            $('#'+i).css('left', offSet);
                            break;
                            case (objectsCreated[i].direction == 'left'):
                                $('#'+i).css('bottom', offSet);
                                break;
                                case (objectsCreated[i].direction == 'bottom'):
                                    $('#'+i).css('right', offSet);
                                    break;
                                    case (objectsCreated[i].direction == 'right'):
                                        $('#'+i).css('top', offSet);
                                        break;
                    }
                    $('#'+i).css(objectsCreated[i].direction, offSet)
                }
        }
}






//testing things
//-----------------------------------------------------------
/*
const object = {
    color: [1, 2, 3],
    direction: ['Left', 'Right', 'Up', 'Down'],
    speed: [1, 3, 5],

    logObject() {
        console.log(this.color, this.direction, this.speed)
    }
}


function createObj(color, direction, speed) {

    const obj = {
        log() {
            console.log(`Object created with the next attributes: 
                        color: ${this.color}, 
                        Direction: ${this.direction}, 
                        Speed: ${this.speed}`)
        }
    };
    obj.color = color;
    obj.direction = direction;
    obj.speed = speed;
    obj.log()
}
*/
