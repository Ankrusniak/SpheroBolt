//programmer Team:Andrew Krusniak Jacob Harback 
//Date:2.6.2023
//project:sphero Bolt 

//blue
async function CheckpointBLUE() {
  await scrollMatrixText('START', { r: 255, g: 0 , b: 0 }, 30, true);
  await roll(0, 78.5, 2);
  await spin(90,2);
  setMainLed({ r: 0, g: 0, b: 255 })
}


/**
 *
*/
async function soundnumber1(){
  await roll(90, 69, 1);
  await delay(3);
  await roll(180, 65, 1);
  await spin(42, 2);
  await Sound.Effects.Fireworks.play(true)
}


/**
 *
*/
async function Change to RED() {
await roll(217.5, 56.75, 1);
await delay(3);
await roll(132.5, 41, 1.3);
setMainLed({ r: 255, g: 0, b: 0})
await delay(3);
}


/**
 *
*/
async function Soundnumber2() {
await roll(42.5, 55.75, 1);
await delay(2.5);
await roll(130, 40.5, 1.75);
await Sound.Effects.Thunder.play(true)
}


/**
 *
*/
async function Change to green() {
await delay(1.5);
await roll(180, 43.75, 1);
await delay(2.5);
await roll(89.5, 41, 1.1);
setMainLed({ r: 0, g: 255, b: 0})
}


/**
 *
*/
async function Soundnumber3() {
await roll(89.5, 41, 1);
await delay(2);
await roll(0, 45, 1);
await delay(3);
await roll(315, 45, 1.25);
await Sound.Mechanical.TruckHorn.play(true)

}


/**
 *
*/
async function startProgram() {
await Change to BLUE(); // Calls CheckpointBLUE
await Soundnumber_1();
await Change to RED();
await Soundnumber_2();
await Change to GREEN();
await Soundnumber_3();
}


