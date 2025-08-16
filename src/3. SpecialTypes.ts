// Type: any
// This type disables errors because the parsed value can be of any type.
// But for the Example below it will throw errors because of not specifying the TYPE: any

// let u = true;
// u = "string";

// Math.round(u);

// Using Type: any

// let t: any =  true;
// t = "string";

// Math.round(t); // No error is shown/thrown

// Type: unknown 
let w: unknown = 1;
w = "string";

w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am.");
    }
} as { runANonExistentMethod: () => void }

if(typeof w === 'object' && w !== null){
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}