/*
Developer: LaunchCode Instructor Assistant
Current Role:  Software Developer
Language: JavaScript
Topic Illustrated: Generating path for animation, 
 potentially resembling spline curve, using calculated segment lengths and control points.
*/

// EXAMPLE

// Define function generatePath
function generatePath(turns) {

    // Calculate length each segment based on number turns
    const segmentLength = 1 / (turns +1);

    // Calculate the maximum and minimum y values for the path
    let maxY = this.canvasHeight - (this.config.birdsize * 1.5);
    let minY = this.canvasHeight * 0.1;

    // Initialize newPath with starting point
    let newPath = 'M0,' + this.generatePoint(maxY, minY); // always start far left but random Y point

    // Determine path direction based on number of turns
    newPath = turns > 0 ? newPath + 'R' : newPath + 'L'; // R triggers curving functing, L spits out straight line

    // Initialize variables to track x and y point coordinates
    let xPoint = 0;
    let yPoint = 0;

    // If are turns, generate points for each segment
    if(turns>0) {
        for (let i = 1; i <= turns; i++) {

            // Update x and y coordinates based on segment length and generated point
            xPoint += this.canvasWidth * segmentLength *i;
            yPoint += this.generatePoint(maxY, minY);

            // Add coordinates to the Newpath
            newPath += xPoint + "," + yPoint;
        }
    }
    // Add final point to complete path
    newPath += this.canvasWidth + "," + this.generatePoint(maxY, minY); // end will always be far right but random Y point

    // Parse the path and store it
    this.path =this.parsePath(newPath)
}

/*
This code defines function generatePath that generates an animation path.
 - calculates length of each segment based on number of turns.
 - determines maximum and minimum y path values.
 - initializes new path with starting point and determines path direction.
 - iterates each segment, updates x and y coordinates based segment length and generated point.
 - adds coordinates to the path.
 - Finally, adds final point to complete the path, parses and stores path.
Overall, generates a path for animation based on the given parameters.
*/
