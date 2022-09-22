const aCar = {
    owner : "Joe Bloggs",
    previous_owners:[
      "Pat Smith - 1 Main Street",
      "Sheila Dwyer - 2 High Street"
    ],
    type: {
      make: "Toyota Corolla",
      year: 2020,
      cc: 1.8,
    },
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
    registration : '201WD1058',
    mileage:10000,
    colour: {
      interior: "leather interior",
      exterior: "Red"
    }
    
  };
  
  console.log(aCar.owner);

  console.log(aCar.owner + ' drives a '+aCar.type.cc+" " + aCar.type.year +" "+ aCar.type.make)

  console.log("Reg. = "+ aCar.registration)

  console.log("It is a " + aCar.colour.exterior + " car " +aCar.mileage + " miles, with a " +aCar.colour.interior)
  console.log("First owner : " + aCar.previous_owners[0])


  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
} 