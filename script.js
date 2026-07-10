const btn = document.getElementById("openBtn");

const letter = document.getElementById("letter");

const message = document.getElementById("message");

const surpriseBtn = document.getElementById("surpriseBtn");


const text = `Happy Birthday, My Love ❤️

I wish I could be with you today to celebrate your special day.

Even though we are miles apart,
my heart is always with you.

Thank you for loving me,
supporting me,
and making my life brighter.

I am so proud of you and everything you've accomplished.

I can't wait until the day
we celebrate your birthday together.

Happy Birthday once again.

I love you so much ❤️

Forever Yours,
Arshika`;



btn.addEventListener("click", function(){


    letter.classList.remove("hidden");


    btn.style.display="none";


    let i=0;


    message.innerHTML="";


    function type(){


        if(i < text.length){


            message.innerHTML += text.charAt(i);


            i++;


            setTimeout(type,40);


        }


    }


    type();



    setTimeout(()=>{

        surpriseBtn.classList.remove("hidden");

    }, text.length * 40 + 1000);



});




surpriseBtn.addEventListener("click",function(){


    document.getElementById("surprise").classList.remove("hidden");


});





// Floating hearts

function createHeart(){


    const heart=document.createElement("div");


    heart.className="heart";


    heart.innerHTML="❤️";


    heart.style.left=Math.random()*100+"vw";


    heart.style.animationDuration=(3+Math.random()*3)+"s";


    document.getElementById("hearts").appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },6000);


}



setInterval(createHeart,300);