var skin = document.getElementById('skin'),
    eyes = document.getElementById('eyes'),
    mouth = document.getElementById('mouth'),
    skinCard = document.getElementById('select-skin-card'),
    eyesCard = document.getElementById('select-eyes-card'),
    mouthCard = document.getElementById('select-mouth-card'),
    eyeStep = document.getElementsByClassName('show-eyes-card'),
    skinStep = document.getElementById('show-skin-card')
    mouthStep = document.getElementById('show-mouth-card'),
    nextStep = document.getElementsByClassName('next-step'),
    yellow = document.getElementById('yellow-skin'),
    green = document.getElementById('green-skin'),
    red = document.getElementById('red-skin');

// <-------------CHANGING STEP SECTION--------------->

    for(var i=0; i<eyeStep.length; i++){
        eyeStep[i].addEventListener('click', function () {
            skinCard.style.display = 'none';
            mouthCard.style.display = 'none';
            eyesCard.style.display = 'block';
        })
    };

    skinStep.addEventListener('click', function(){
            skinCard.style.display = 'block';
            mouthCard.style.display = 'none';
            eyesCard.style.display = 'none';
    });

    mouthStep.addEventListener('click', function(){
        skinCard.style.display = 'none';
        mouthCard.style.display = 'block';
        eyesCard.style.display = 'none';
    });

// <-------------SKIN SECTION--------------->

    yellow.addEventListener('click', function(){
        skin.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\skin/yellow.png'
        eyesCard.style.display = 'block';
        skinCard.style.display = 'none';
    });

    green.addEventListener('click', function(){
        skin.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\skin/green.png'
        eyesCard.style.display = 'block';
        skinCard.style.display = 'none';
    });

    red.addEventListener('click', function(){
        skin.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\skin/red.png'
        eyesCard.style.display = 'block';
        skinCard.style.display = 'none';
    });

// <-------------EYE SECTION--------------->

var eyeNormal = document.getElementById('eye-normal'),
    eyeClosed = document.getElementById('eye-closed'),
    eyelong = document.getElementById('eye-long'),
    eyeLaughing = document.getElementById('eye-laughing'),
    eyeNormal = document.getElementById('eye-normal'),
    eyeRolling = document.getElementById('eye-rolling'),
    eyeWinking = document.getElementById('eye-winking');


    eyeNormal.addEventListener('click', function(){
        eyes.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\eyes/normal.png';
        mouthCard.style.display = 'block';
        eyesCard.style.display = 'none';
    });

    eyeClosed.addEventListener('click', function(){
        eyes.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\eyes/closed.png';
        mouthCard.style.display = 'block';
        eyesCard.style.display = 'none';
    });

    eyelong.addEventListener('click', function(){
        eyes.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\eyes/long.png';
        mouthCard.style.display = 'block';
        eyesCard.style.display = 'none';
    });

    eyeLaughing.addEventListener('click', function(){
        eyes.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\eyes/laughing.png';
        mouthCard.style.display = 'block';
        eyesCard.style.display = 'none';
    });

    eyeRolling.addEventListener('click', function(){
        eyes.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\eyes/rolling.png';
        mouthCard.style.display = 'block';
        eyesCard.style.display = 'none';
    });

    eyeWinking.addEventListener('click', function(){
        eyes.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\eyes/winking.png';
        mouthCard.style.display = 'block';
        eyesCard.style.display = 'none';
    });

// <-------------MOUTH SECTION--------------->

var mouthOpen = document.getElementById('mouth-open'),
    mouthSmiling = document.getElementById('mouth-smiling'),
    mouthStraight = document.getElementById('mouth-straight'),
    mouthSad = document.getElementById('mouth-sad'),
    mouthTeeth = document.getElementById('mouth-teeth');

    mouthOpen.addEventListener('click', function(){
        mouth.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\mouth/open.png';
    })

    mouthSmiling.addEventListener('click', function(){
        mouth.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\mouth/smiling.png';
    })

    mouthStraight.addEventListener('click', function(){
        mouth.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\mouth/straight.png';
    })

    mouthSad.addEventListener('click', function(){
        mouth.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\mouth/sad.png';
    })

    mouthTeeth.addEventListener('click', function(){
        mouth.src = '/JavaScript-Assessment-Starter-Files-master/\JavaScript-Assessment-Starter-Files-master/\emoji-maker/\assets/\mouth/teeth.png';
    })