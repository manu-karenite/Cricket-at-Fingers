'use strict';
let Name = localStorage.getItem("name");
let playing=false; //To inhibit the Infinite Flow of Game



const commentaryforBatting = 
{
    speak_10 : ["Waits for it and then pulls it handsomely over the mid-wicket fence...BONUS 10",
                "Just smokes it over the long on fence...TEN",
                "Ball sails all the way over the deep mid-wicket regiON ! 10-10-10 !",
                "swivels and smokes this one all the way over the Stand! BONUS 10 !",
                "whacks this one over the bowler's head for a biggie... BIG 10"]
    ,
     speak_6  :     ["IN THE AIR AND SIX! Full ball around the pads!",
                    " It goes high in the air and gets just over the ropes for a biggie at deep mid-wicket!",
                    "See you later, alligator!SIX",
                    " lofts this one over the long off region for a biggie.", 
                    "clears his front foot and whacks this one over the bowler's head for a biggie."]
    ,
    speak_5:["Woah , Wide and a 4 ! 5 runs to the scoreboard!!!",
            "A Bad Overthrow got you 5 !!",
            "Up in the Air and 4 , with a NO BALL ! Add 5 here !",
            "OOPS ! A NO ball and a fours !",
            "5 Consecutive LegByes ! Add a Bonus 5 !"]
    ,
     speak_4 : ["Past the bowler and umpire and into the ropes downtown",
            "makes some room and slices this one over backward point. Boundary.",
            "flays this one through extra cover. No fielder had a chance there.",
            "The ball takes the outer half of the blade and goes over short third man. Boundary.",
            "drives this one crisply through extra cover for a boundary."]
    ,
    speak_3 : [" There is no one in the deep ! 3 Runs !",
                "hits it over extra cover , Made a good 3 !",
            "Ball Goes far and made a quiet 3 ! ",
            "Good Running Between the Wickets , Add 3 !",
            "No Ball and a Double ! 3-3-3 !"]     
    ,

    speak_2:["cuts it to deep point and gets two.",
             " slogs this one through square leg, for a couple.",
             "runs to his left and dives to pull the ball back. A couple",
             "The fielder in the deep runs to his left and keeps it down to two.",
             "skips down the track and pulls this to deep mid-wicket. A couple."]
    ,
    speak_1:["An off pace delivery, short and wide outside off!",
             "Reacts quickly, sides and stops the ball. Only a run taken.",
             "Clips it to short fine leg.",
             " misses his line and darts one down the leg side.",
             "punches it to the right of sweeper cover for one."]
    ,
    wicket:["goes for the drive but drags it back onto the stumps..OUT",
            "OUT! CAUGHT BEHIND!",
            " fails to get any bat on it and has his furniture shattered...OUT",
            "OUT! RUN OUT!",
            "Sensational catch & takes a beauty and this wonderful cameo!..OUT"]
};






//------------------------- Initial Setup ------------------------------//

document.querySelector('.inningsChange').classList.add('hidden');
let img = localStorage.getItem("img");

document.querySelector("#userImage").src=img;
document.querySelector('#uname').textContent=Name;

document.querySelector('.tossResult').classList.add('hidden');
document.querySelector('.finalPlay').classList.add('hidden');
document.querySelector('.target').classList.add('hidden');


let runsScored=0;
document.querySelector('.runsMade').textContent=runsScored;
let fallenWickets=0;
document.querySelector('.fallenWickets').textContent=fallenWickets;
let totalWickets=0; // for testing purpose
document.querySelector('.totalWickets').textContent=totalWickets;

let innings=0; //means first innings , 1 means 2nd inning

let batting=-1;   //when 0 means of system 1 for user
let bowling=-1;   //when 0 means of system 1 for user


/*----------------INITIAL SETUP OVER--------------------------*/

//P.S. The code has been placed almost similar to the callStack operation in the bottom Top Order and also to the maintain the Function CallScope ,
//For Better Rendering : Kindly Look from Bottom to Top ! 
// Thank You



document.querySelector('.inningsChange').addEventListener('click',function()
{
        //1) bring the target and set the target first
        let curr = Number(document.querySelector('.runsMade').textContent);
        document.querySelector('.userTarget').textContent=(++curr);
        document.querySelector('.target').classList.remove('hidden');

        //2) chaneg broad title  of user and system
        //3) make the variables opposite
        if(batting==1)
        {
                //user is batting
                document.querySelector('#status1').textContent="Batting🏏";
                document.querySelector('#status2').textContent="Bowling🤾🏻‍♂️";
                batting=0;
                bowling=1;

        }
        else
        {
                 document.querySelector('#status2').textContent="Batting🏏";
                document.querySelector('#status1').textContent="Bowling🤾🏻‍♂️";
                batting=1;bowling=0;
        }
         //4) increment the innings variable
        innings=innings+1;
        //5) reset the score
        document.querySelector('.runsMade').textContent=0;
        document.querySelector('.fallenWickets').textContent=0;
        document.querySelector('.comment').textContent="--Live Commentary Here--";
        document.querySelector('.run_0').textContent=0;
         document.querySelector('.run_1').textContent=0;
        document.querySelector('#scores0').textContent=0;
        document.querySelector('#scores1').textContent=0;


        //6) bring back the game
        document.querySelector('.inningsChange').classList.add('hidden');
        document.querySelector('.game').classList.remove('hidden');
          
          
        
});
function declareWinner(player) //1 for user // 0 for system
{
        document.querySelector('.commentary').style.backgroundColor="black";
        console.log(player);
  
        document.querySelector('.comment').style.color="white";


        playing = false;
}


function oneWicketDown()
{
        //get current WicketFallen
        const index = Math.trunc(Math.random()*5,1);
        let commentSet=undefined;
        commentSet = commentaryforBatting.wicket[index];
        document.querySelector('.comment').textContent=commentSet; //Commentary For Out


        let wicketsDown = Number(document.querySelector('.fallenWickets').textContent);
        wicketsDown++;
        document.querySelector('.fallenWickets').textContent=wicketsDown;

        //also updated score needs to come down
        wicketsDown = Number(document.querySelector('.run_1').textContent);
        let wicketsDown1 = Number(document.querySelector('#scores1').textContent);

        //decraese the score
        let currentScore = Number(document.querySelector('.runsMade').textContent);
        document.querySelector('.runsMade').textContent = currentScore-wicketsDown;
        document.querySelector('.runsMade').textContent = currentScore-wicketsDown1;

        if(innings==0) //1st inning
        {
                const totalWick = Number(document.querySelector('.totalWickets').textContent);
                const totalWic = Number(document.querySelector('.fallenWickets').textContent);
                if(totalWic==totalWick)
                {
                        //innings need to be changed
                        document.querySelector('.game').classList.add('hidden');
                        document.querySelector('.inningsChange').classList.remove('hidden');
                }
              
        }
        else if (innings==1)
        {
                //2nd innings and winner declared here
                const currRuns = Number(document.querySelector('.runsMade').textContent);
                const targ = Number(document.querySelector('.userTarget').textContent);
                let curr = Number(document.querySelector('.fallenWickets').textContent);
                let total = Number(document.querySelector('.totalWickets').textContent);
                console.log(`target ->  ${targ} and run is ${currRuns}`);
                if(curr<total)
                {
                        //what if runs have already been scored?
                        if(currRuns>=targ)
                        {
                                if(batting==1)
                                {
                                       
                                        declareWinner(1); document.querySelector('.comment').textContent=`${Name} Won the Match`; playing = false;
                                }
                                else
                                {
                                        
                                        declareWinner(0);document.querySelector('.comment').textContent=`System Won the Match`; playing = false;
                                }
                        }
                        //or when equal or less -> don't do anything
                }
                else if (curr==total)  //all wickets over
                {
                        if(currRuns==targ-1)
                        {
                                declareWinner(0);  document.querySelector('.comment').textContent=`Match Draw !` ;    
                        }
                        else if (currRuns<targ-1)
                        {
                                if(batting==1) //user is batting and unable to score
                                {
                                         declareWinner(0);  document.querySelector('.comment').textContent=`System Won the Match`;
                                }
                                else if (batting==0)
                                {
                                         declareWinner(1);document.querySelector('.comment').textContent=`${Name} Won the Match`;
                                }
                        }
                }

        }

     
}
function processCommentary(run)
{
        const index = Math.trunc(Math.random()*5,1);
        let commentSet=undefined;
        if(run==1) commentSet = commentaryforBatting.speak_1[index];
        else if(run==2) commentSet = commentaryforBatting.speak_2[index];
        else if(run==3) commentSet = commentaryforBatting.speak_3[index];
        else if(run==4) commentSet = commentaryforBatting.speak_4[index];
        else if(run==5) commentSet = commentaryforBatting.speak_5[index];
        else if(run==6) commentSet = commentaryforBatting.speak_6[index];
        else commentSet = commentaryforBatting.speak_10[index];
        document.querySelector('.comment').textContent=commentSet;
}
function checkOutOrNot(run)
{
        //get user run first
        const user_run_smallDevice = Number(document.querySelector('.run_1').textContent);
        const system_run_smallDevice = Number(document.querySelector('.run_0').textContent); //mobile purpose done

        const user_run_bigDevice = Number(document.querySelector('#scores0').textContent);
        const system_run_bigDevice = Number(document.querySelector('#scores1').textContent); //tab and pc purpose done

        

        if((user_run_bigDevice===system_run_bigDevice) && (system_run_smallDevice===user_run_smallDevice))
                {
                        oneWicketDown();
                        
                } 
        else
        {
                //give a proper commentary according to run
                if(playing)processCommentary(run);
        }       
}











document.querySelector('.restartGame').addEventListener('click',function()
{
        window.open("index.html","_self");

});


//9 , Update Run In the ScoreBoard
function updateRuns()
{
        console.log(`run_${batting}`);
        console.log(batting , bowling,innings);
        let run = Number(document.querySelector(`.run_${batting}`).textContent); //fetch  Run of Batting Person First first
        let currentScore = Number(document.querySelector('.runsMade').textContent); //fetch Current Score from Scoreboard
        currentScore+=run;
        //get the Target

        document.querySelector('.runsMade').textContent=currentScore;
        if(innings==1)  //if second inning is going on then check otherwise keep scoring
        {
                 const targ =Number(document.querySelector('.userTarget').textContent);
                  console.log(currentScore,targ,batting);
                 
                if(currentScore>=targ)
                {
                        //declare the Winner and end the match by playing->false;
                        if(batting===1)
                                {
                                        declareWinner(1);
                                        document.querySelector('.comment').textContent=`${Name} Won the Match`;
                                         playing = false;
                        }
                        else if (batting===0)
                                {declareWinner(0);
                                document.querySelector('.comment').textContent=`System Won the Match`;
                                playing = false;
                                }
                       
                }
        }
      
        
}

//8 How to Generate System Score Randomly?
const runs_available =[1,2,3,4,5,6,10];  //index 0 to index 6
function generateSystemScore()
{
        const index = Math.trunc(Math.random()*7,1);
        document.querySelector('.run_0').textContent=runs_available[index];
        document.querySelector('#scores0').textContent=runs_available[index];

}

//7 When the User Presses Several Butons to Score runs
document.querySelector('#mark1').addEventListener('click',function()
{
        if(playing) {
        document.querySelector('.run_1').textContent=1;
        document.querySelector('#scores1').textContent=1;
        generateSystemScore();
        updateRuns();
        checkOutOrNot(1);}
        
});
document.querySelector('#mark2').addEventListener('click',function()
{
        if(playing){  
        document.querySelector('.run_1').textContent=2;
        document.querySelector('#scores1').textContent=2;
        generateSystemScore();
        updateRuns();
           
           checkOutOrNot(2);}
});

document.querySelector('#mark3').addEventListener('click',function()
{
        if(playing){  
        document.querySelector('.run_1').textContent=3;
        document.querySelector('#scores1').textContent=3;
         generateSystemScore();
        updateRuns();
          
           checkOutOrNot(3);}
});
document.querySelector('#mark4').addEventListener('click',function()
{
         if(playing){
          document.querySelector('.run_1').textContent=4;
        document.querySelector('#scores1').textContent=4;
         generateSystemScore();
        updateRuns();
          
           checkOutOrNot(4);}
});

document.querySelector('#mark5').addEventListener('click',function()
{
          if(playing)
          {
                  document.querySelector('.run_1').textContent=5;
        document.querySelector('#scores1').textContent=5;
         generateSystemScore();
        updateRuns();
          
           checkOutOrNot(5);
          }
});
document.querySelector('#mark6').addEventListener('click',function()
{
          if(playing){document.querySelector('.run_1').textContent=6;
        document.querySelector('#scores1').textContent=6;
        generateSystemScore();
        updateRuns();
          
           checkOutOrNot(6);}
});
document.querySelector('#mark10').addEventListener('click',function()
{
          if(playing){document.querySelector('.run_1').textContent=10;
        document.querySelector('#scores1').textContent=10;
         generateSystemScore();
         updateRuns();
          
           checkOutOrNot(10);}
});



//6 if Cross X button is clicked while Tossing
document.querySelector('.cancelSecond').addEventListener('click',function()
{       playing=false; //disable the Game

        document.querySelector('.secondWindow').classList.add('hidden');
        document.querySelector('.game').classList.remove('hidden');
              document.querySelector('body').classList.remove('alternateImage');
        document.querySelector('.startGame').classList.remove('hidden');
});


//5-A First the User Specific Fields are Set Up with Custom Names
function markTheLabels()
{

        const ans = Number(document.querySelector('input[name="selectWicket"]:checked').value);  //get number of wickets selected      
        document.querySelector('.totalWickets').textContent=ans;
        //making the game Window Appear
        document.querySelector('.secondWindow').classList.add('hidden');
        document.querySelector('.game').classList.remove('hidden');
        document.querySelector('body').classList.remove('alternateImage');
}

//5. When the Final Button after toss is clicked


document.querySelector('#finalPlay').addEventListener('click',function()
{
  markTheLabels();  //---completed---//

  if(user_toss_win==0)  //i.e. : User Lost the Toss
  {
        //ask the system to choose
        const ans = Math.random();
        console.log(ans);
        let myString = "Not So Relevant";
        if(ans<0.5) myString="Batting";    else myString="Bowling";
         if(myString=='Batting') //When System Opts to Bat First
          {
                  //user ko batting and system ko bowling dono mein small and large
               
                  document.querySelector('#status2').textContent="Bowling🤾🏻‍♂️";
                  document.querySelector("#status1").textContent="Batting🏏";
                  document.querySelector('.toss_scoreboard_action').textContent="Batting";
                  batting=0;   //Means Batting is Done By System
                  bowling=1;

          }
          else  //When System Opts to Bowls First
          {
                 document.querySelector('#status2').textContent="Batting🏏";
                  document.querySelector("#status1").textContent="Bowling🤾🏻‍♂️";
                   document.querySelector('.toss_scoreboard_action').textContent="Bowling";
                   bowling=0;
                   batting=1;        
          }


  }
  else  //User Wins the Toss

  {     const actionMode = document.querySelector('input[name="chooseBB"]:checked').value;
         document.querySelector('.toss_scoreboard_action').textContent=actionMode;
          if(actionMode=='Batting')
          {
                  document.querySelector('#status2').textContent="Batting🏏";
                  document.querySelector("#status1").textContent="Bowling🤾🏻‍♂️";
                  batting=1;
                  bowling=0;

          }
          else
          {
                 document.querySelector('#status2').textContent="Bowling🤾🏻‍♂️";
                  document.querySelector("#status1").textContent="Batting🏏";
                  batting=0;
                  bowling=1;
          }
  }

}
);

let user_toss_win=0;
function giveResultofToss() {    //what happend when coin is tossed and Lost the Toss
        document.querySelector('.tossResult').classList.remove('hidden');
        document.querySelector('.youWin').classList.add('hidden');  
        document.querySelector('.youLose').classList.remove('hidden');
        document.querySelector('.finalPlay').classList.remove('hidden');
        //KEEP NAME OF THE TOSS WINNER
        document.querySelector('.toss_scoreboard_name').textContent="System";     
        user_toss_win=0; 
}
function giveOptiontoChoose()    //what happend when coin is tossed and won the Toss
{
        document.querySelector('.tossResult').classList.remove('hidden');
        document.querySelector('.youLose').classList.add('hidden');
        document.querySelector('.youWin').classList.remove('hidden');  
         document.querySelector('.finalPlay').classList.remove('hidden');  
         document.querySelector('.toss_scoreboard_name').textContent=Name; 
         user_toss_win=1; 
                
}

let optionToToss =0; // 0-> OK to TOSS //1->Toss Already Done
document.querySelector('#chooseHead').addEventListener('click',function() //2-A If Head is Selected
{       if(optionToToss==0)
        {
                optionToToss=1;
        const tossResult = Math.random();
    
        if(tossResult<0.5)
                {console.log("toss won");giveOptiontoChoose();}
        else    
                {console.log("toss lost");giveResultofToss();}

        }   
       

});

document.querySelector('#chooseTail').addEventListener('click',function()  //2-B If Tail is Selected
{    
         
        if(optionToToss==0){
                optionToToss=1;
         const tossResult = Math.random();
     
        if(tossResult>=0.5)
                {console.log("toss won");giveOptiontoChoose();}
        else    
                {console.log("toss lost");giveResultofToss();}
}
});


//1) When the Start Game Button is Clicked
document.querySelector('.startGame').addEventListener('click',function()
{
        
        playing=true; //game is on

         document.querySelector('.secondWindow').classList.remove('hidden');
        document.querySelector('.game').classList.add('hidden');
        document.querySelector('body').classList.add('alternateImage');
        //no need of start button now 
        document.querySelector('.startGame').classList.add('hidden');
});










