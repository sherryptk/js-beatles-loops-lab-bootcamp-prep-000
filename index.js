function theBeatlesPlay(music, instruments){
  var array = []
  var plays = " plays "
  for (var i = 0; i < music.length; i++) {
    array.push(music[i] + plays + instruments[i])
  }
  return array
}

// The first time through the loop, the body of the loop should
//create a string using the first index of the musicians array
// and the first index of the instruments array: "John Lennon plays guitar".
// This string should be added to the empty array you created. The loop should make the same sentence for every member
// of the musicians array. The function should return the array of new strings.
