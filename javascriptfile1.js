function waitingFn(timeInMs){
  const futureTime=Date.now()+timeInMs;
  while(futureTime>Date.now()){
      //waiting
  }
}

debugger;
waitingFn(3000);
console.log("Function call has just ended");