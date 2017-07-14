var res = require('./dbcall');
var url = "mongodb://localhost:27017/SelfieTar";

var myobj = { name: "Saugata", address: "Kokata",birth_year:1992, smoker:"False",adventure_sport:"True",medical_history:"None", 
     accident_hist:"True",fitness_consent:"True",product:["trm1505012017","trm1010052016"]};
res.insertDb(myobj);
res.showDb();
// res.updateDb();