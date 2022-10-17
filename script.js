const sounds=[
    {
        id:'b',
        src:'./sounds/Bass-Drum.mp3'
    },
    {
        id:'c',
        src:'./sounds/Crash-Cymbal.mp3'
    },
    {
        id:'h',
        src:'./sounds/High-Tom.mp3'
    },
    {
        id:'m',
        src:'./sounds/Medium-Tom.mp3'
    },
    {
        id:'l',
        src:'./sounds/Floor-Tom.mp3'
    },
    {
        id:'s',
        src:'./sounds/Snare-Drum.mp3'
    },
    {
        id:'r',
        src:'./sounds/Ride-Cymbal.mp3'
    },
    {
        id:'o',
        src:'./sounds/Hi-Hat-Open.mp3'
    },
    {
        id:'a',
        src:'./sounds/Hi-Hat-Closed.mp3'
    }
];
const btns=document.querySelectorAll('button');
let music;

// get music when press button
btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        getMusic(btn.id);
    })
});

// get music when press particular key
document.addEventListener('keypress', (e)=>{
    if(e.key=='Enter'){
        e.preventDefault();
    }else{
        getMusic(e.key);
    }
});

// function to get music
function getMusic(id){
    for(let i=0; i<sounds.length; i++){
        if(id===sounds[i].id){
            music=new Audio(sounds[i].src);
            music.play();
            active(id);
        }
    }
};

// css effects for active button
function active(i){
    btns.forEach((btn)=>{
        if(btn.id==i){
            btn.classList.add('active')
        }else{
            btn.classList.remove('active');
        }
        
        setTimeout(()=>{
            btn.classList.remove('active')
        }, 1500);
    })
};


    
   
 

