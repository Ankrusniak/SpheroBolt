//programmer Team:Andrew Krusniak Jacob Harback 
//Date:2.6.2023
//project:sphero Bolt 


//blue 

async function startProgram() { 
    await scrollMatrixText('start', { r: 66, g: 56, b: 255 }, 30, true)
    setSpeed(70); 
    await delay (2); 
    setSpeed(0); 
    setHeading(90);
    setMainLed({r: 0, g: 0, b: 255 });  
    
} 

//sound 1

