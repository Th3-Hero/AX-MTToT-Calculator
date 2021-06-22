// Version(major.minor.patch): 00.000.000
import { userInputs, userSelections } from "./runtime";
import { gaussC2Fixed } from "./data/weaponData";

function calculateMain() {
    // collectUserInputs();
    // console.log(collectUserInputs);
    const testVar = gaussC2Fixed.weaponName;
    console.log(testVar);
}

// function collectUserInputs() {
//     let collectedUserInputs: Object = {};
//     for (let key of Object.keys(userInputs)) {
//         collectUserInputs[key] = document.getElementById(key);
//     }
//     console.log(collectedUserInputs);
//     return collectedUserInputs;
// }