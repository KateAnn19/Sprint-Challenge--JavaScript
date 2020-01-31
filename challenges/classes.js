// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker2 {
    constructor(length, width, height){
      this.length = length;
      this.width = width;
      this.height = height;
    }
    volume(length, width, height){
      return this.length * this.width * this.height;
    }
    surfaceArea(length, width, height){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }
  
  
  let cuboid2 = new CuboidMaker2(4,5,5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker 
//with a sub class called CubeMaker.  Find
// out the formulas for volume and surface area for 
//cubes and create those methods using the dimension properties
// from CuboidMaker.  Test your work by logging out your volume and surface area.

//The only difference between cubes and cuboids is the shape of the six faces. Each face of a cube is 
//a square, and all of these squares are of equal size. Each face of a cuboid is a rectangle.

// To find the volume of any cube you need to know the length, width and height.
// The formula to find the volume multiplies the length by the width by the height. 
// The good news for a cube is that the measure of each of these dimensions is exactly the same. 
// Therefore, you can multiply the length of any side three times.


class CubeMaker extends CuboidMaker2 {
    constructor(length, width, height) {
        super(length, width, height);
    }
    cubeVolume(){
        let volume = this.length * this.length * this.length;
        return `I am the cube's volume: ${volume}`;
    }
    cubeSurfaceArea(){
        let surfaceArea = 6 * (this.length * this.width);
        return `I am the cube's surface area ${surfaceArea}`;
    }  
}

let cube = new CubeMaker(5,5,5);

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());