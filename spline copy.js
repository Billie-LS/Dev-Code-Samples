/*
Developer: 
Current Role:  Software Developer
Language: JavaScript
Topic Illustrated: 
*/

// EXAMPLE

function generatePath(turns) {
    const segmentLength = 1 / (turns +1);
    let maxY = this.canvasHeight - (this.config.birdsize * 1.5);
    let minY = this.canvasHeight * 0.1;
    let newPath = 'M0,' + this.generatePoint(maxY, minY); // always start far left but random Y point
    newPath = turns > 0 ? newPath + 'R' : newPath + 'L'; // R triggers curving functing, L spits out straight line
    let xPoint = 0;
    let yPoint = 0;
    if(turns>0) {
        for (let i = 1; i <= turns; i++) {
            xPoint += this.canvasWidth * segmentLength *i;
            yPoint += this.generatePoint(maxY, minY);
            newPath += xPoint + "," + yPoint;
        }
    }
    newPath += this.canvasWidth + "," + this.generatePoint(maxY, minY); // end will always be far right but random Y point
    this.path =this.parsePath(newPath)
}
