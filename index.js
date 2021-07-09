'use strict'

function chooseYourAvatar()
{
        document.querySelector('#buttonAV1').addEventListener('click',function()
        {
              localStorage.setItem("img","avatars/boy6.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV2').addEventListener('click',function()
        {
              localStorage.setItem("img","avatars/girl4.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV3').addEventListener('click',function()
        {
                localStorage.setItem("img","avatars/girl1.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV4').addEventListener('click',function()
        {
                    localStorage.setItem("img","avatars/boy2.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV5').addEventListener('click',function()
        {
               localStorage.setItem("img","avatars/boy5.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV6').addEventListener('click',function()
        {
              localStorage.setItem("img","avatars/girl3.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV7').addEventListener('click',function()
        {
               localStorage.setItem("img","avatars/boy4.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV8').addEventListener('click',function()
        {
                localStorage.setItem("img","avatars/girl5.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV9').addEventListener('click',function()
        {
                  localStorage.setItem("img","avatars/girl2.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV10').addEventListener('click',function()
        {
            localStorage.setItem("img","avatars/girl6.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV11').addEventListener('click',function()
        {
                localStorage.setItem("img","avatars/boy3.png");
            window.open('home.html','_self');
        });
        document.querySelector('#buttonAV12').addEventListener('click',function()
        {
               localStorage.setItem("img","avatars/boy1.png");
            window.open('home.html','_self');
        });
}
const one = document.querySelector('.chooseAV');
if(one) 
    one.classList.add('hidden');

const two=document.querySelector('.playNow');
if(two)
    two.classList.add('hidden');
    
const three=document.querySelector('.nameButton');
if(three)
    three.addEventListener('click',function()
    {
            let myName = document.querySelector('.nameOfPlayer').value;
            if(myName=="")
                    myName="You";
            localStorage.setItem("name",myName);
            document.querySelector('.nameOfPlayer').disabled=true;
            document.querySelector('.chooseAV').classList.remove('hidden');
            document.querySelector('.userCredentials').classList.add('hidden');
            chooseYourAvatar();
    });