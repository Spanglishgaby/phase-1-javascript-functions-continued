function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  saturdayFun();
  function mondayWork (text = 'go to the office') {
    return `This Monday, I will ${text}.`;
  }
  mondayWork ();

  function wrapAdjective (text = 'go to the office') {
    return `This Monday, I will ${text}.`;
    wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
  }
  function wrapAdjective (visualFlair ='*'){
    const innerFunction= function(adjective = 'special'){
      return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
      return innerFunction
  }
 