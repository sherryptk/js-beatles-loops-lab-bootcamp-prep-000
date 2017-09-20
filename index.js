function theBeatlesPlay(music, instruments){
  var array = []
  var plays = " plays "
  for (var i = 0; i < music.length; i++) {
    array.push(music[i] + plays + instruments[i])
  }
  return array
}

function johnLennonFacts(array){
  var i=array.length
  var facts=[]

  while (i>0) {
    facts.push(array[i]+"!!!")
    i--
  }

  return facts
}

// Use a while loop to loop over the facts array and add "!!!" to the end of every fact.
// The function should return an array of strings with exclamation points.
