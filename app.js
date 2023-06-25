var displayThr = document.getElementById("displayThr");
var displayTmin = document.getElementById("displayTmin");
var displayTsec = document.getElementById("displayTsec");
var startBtnT= document.getElementById("startBtnT");
var pauseBtnT= document.getElementById("pauseBtnT");
var resetBtnT= document.getElementById("resetBtnT");
startBtnT.disabled = false;
pauseBtnT.disabled = true;
resetBtnT.disabled = true;
var hoursT , minutesT , secondsT;
var intervalT ;
function onClickTimerStartprompt(){
    //     var useTimer = prompt("Do you want to set Timer? or wanna use stopWatch","Timer/StopWatch")
    // useTimer = useTimer.toLowerCase();
    hoursT = +prompt("Enter Hours","00");
    minutesT = +prompt("Enter Minutes","00");
    secondsT = +prompt("Enter Seconds","00");
    }
    function renderValsT(){
        displayThr.innerHTML = hoursT;
        displayTmin.innerHTML =  minutesT;
        displayTsec.innerHTML =  secondsT;
        }
        function timerT(){
            if(secondsT>0){
            secondsT--;
            }
            else if(secondsT == 0 && minutesT>0){
                minutesT --;
                secondsT=59;
            
            }
            else if(minutesT == 0 && hoursT>0){
                hoursT--;
               
            }
            else if(hoursT == 0){
        minutesT =59;
        if(minutesT == 00){
            secondsT =59;
            if(secondsT ==0){
                clearInterval(intervalT);
            
        }
        }
      
            
            }
            else if(hoursT ==0 && minutesT ==0 && secondsT==0){
                clearInterval(intervalT);
                alert("Time Up!")
            }
           
            renderValsT();
        }
        function startT(){
    
            startBtnT.disabled = true;
            resetBtnT.disabled = false;
            pauseBtnT.disabled = false;
            intervalT = setInterval(function(){
            
                timerT();
            },1000)
        }
        function pauseT(){
        clearInterval(intervalT);
        startBtnT.disabled = false;
        resetBtnT.disabled = false;
        pauseBtnT.disabled = true;
        }
        function resetT(){
            startBtnT.disabled = false;
            resetBtnT.disabled = true;
            pauseBtnT.disabled = false;
            hoursT =0;
            minutesT=0;
            secondsT=0;
            pauseT();
            renderValsT();
        }