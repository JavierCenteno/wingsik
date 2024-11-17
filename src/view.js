export const ORIENTATION = {
    NORTH_EAST: 'NE',
    NORTH_WEST: 'NW',
    SOUTH_EAST: 'SE',
    SOUTH_WEST: 'SW'
}

/**
 * A view of a map.
 */
export class View {
    /**
     * Current map on display.
     */
    map;
    /**
     * Current orientation of the map in the view.
     */
    orientation = ORIENTATION.NORTH_EAST;
    /**
     * In which tile of the map the view is currently centered.
     */
    centerTile = [0, 0];

    /**
     * 
     * @param {*} x Number of tiles along the x (west-east) axis. Positive x is east while negative x is west.
     * @param {*} y Number of tiles along the y (south-north) axis. Positive y is north while negative y is south.
     */
    constructor(map) {
        this.map = map;
    }

    moveDown() {
        switch(this.orientation) {
            case ORIENTATION.NORTH_EAST:
                this.centerTile[0] -= 1;
                this.centerTile[1] -= 1;
                break;
            case ORIENTATION.NORTH_WEST:
                this.centerTile[0] -= 1;
                this.centerTile[1] += 1;
                break;
            case ORIENTATION.SOUTH_EAST:
                this.centerTile[0] += 1;
                this.centerTile[1] -= 1;
                break;
            case ORIENTATION.SOUTH_WEST:
                this.centerTile[0] += 1;
                this.centerTile[1] += 1;
                break;
          }
    }

    moveUp() {
        switch(this.orientation) {
            case ORIENTATION.NORTH_EAST:
                this.centerTile[0] += 1;
                this.centerTile[1] += 1;
                break;
            case ORIENTATION.NORTH_WEST:
                this.centerTile[0] += 1;
                this.centerTile[1] -= 1;
                break;
            case ORIENTATION.SOUTH_EAST:
                this.centerTile[0] -= 1;
                this.centerTile[1] += 1;
                break;
            case ORIENTATION.SOUTH_WEST:
                this.centerTile[0] -= 1;
                this.centerTile[1] -= 1;
                break;
          }
    }

    moveLeft() {
        switch(this.orientation) {
            case ORIENTATION.NORTH_EAST:
                this.centerTile[0] -= 1;
                this.centerTile[1] += 1;
                break;
            case ORIENTATION.NORTH_WEST:
                this.centerTile[0] -= 1;
                this.centerTile[1] -= 1;
                break;
            case ORIENTATION.SOUTH_EAST:
                this.centerTile[0] += 1;
                this.centerTile[1] += 1;
                break;
            case ORIENTATION.SOUTH_WEST:
                this.centerTile[0] -= 1;
                this.centerTile[1] += 1;
                break;
        }
    }

    moveRight() {
        switch(this.orientation) {
            case ORIENTATION.NORTH_EAST:
                this.centerTile[0] += 1;
                this.centerTile[1] -= 1;
                break;
          case ORIENTATION.NORTH_WEST:
                this.centerTile[0] += 1;
                this.centerTile[1] += 1;
                break;
          case ORIENTATION.SOUTH_EAST:
                this.centerTile[0] -= 1;
                this.centerTile[1] -= 1;
                break;
          case ORIENTATION.SOUTH_WEST:
                this.centerTile[0] += 1;
                this.centerTile[1] -= 1;
                break;
        }
    }

    rotateClockwise() {
        switch(this.orientation) {
            case ORIENTATION.NORTH_EAST:
                this.orientation = ORIENTATION.SOUTH_EAST;
                break;
            case ORIENTATION.NORTH_WEST:
                this.orientation = ORIENTATION.NORTH_EAST;
                break;
            case ORIENTATION.SOUTH_EAST:
                this.orientation = ORIENTATION.SOUTH_WEST;
                break;
            case ORIENTATION.SOUTH_WEST:
                this.orientation = ORIENTATION.NORTH_WEST;
                break;
        }
    }

    rotateClockwise() {
        switch(this.orientation) {
            case ORIENTATION.NORTH_EAST:
                this.orientation = ORIENTATION.SOUTH_EAST;
                break;
            case ORIENTATION.NORTH_WEST:
                this.orientation = ORIENTATION.NORTH_EAST;
                break;
            case ORIENTATION.SOUTH_EAST:
                this.orientation = ORIENTATION.SOUTH_WEST;
                break;
            case ORIENTATION.SOUTH_WEST:
                this.orientation = ORIENTATION.NORTH_WEST;
                break;
        }
    }

    rotateCounterclockwise() {
        switch(this.orientation) {
            case ORIENTATION.NORTH_EAST:
                this.orientation = ORIENTATION.NORTH_WEST;
                break;
            case ORIENTATION.NORTH_WEST:
                this.orientation = ORIENTATION.SOUTH_WEST;
                break;
            case ORIENTATION.SOUTH_EAST:
                this.orientation = ORIENTATION.NORTH_EAST;
                break;
            case ORIENTATION.SOUTH_WEST:
                this.orientation = ORIENTATION.SOUTH_EAST;
                break;
          }
    }
}