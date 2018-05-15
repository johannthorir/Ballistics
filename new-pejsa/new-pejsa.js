'use strict'
 
var CD_G1 = [
    [0.000, 0.2629, -0.142], [0.050, 0.2558, -0.142], [0.100, 0.2487, -0.1480], [0.150, 0.2413, -0.1380],
    [0.200, 0.2344, -0.132], [0.250, 0.2278, -0.128], [0.300, 0.2214, -0.1180], [0.350, 0.2155, -0.1020],
    [0.400, 0.2104, -0.086], [0.450, 0.2061, -0.058], [0.500, 0.2032, -0.0240], [0.550, 0.2020,  0.0280],
    [0.600, 0.2034,  0.131], [0.700, 0.2165,  0.260], [0.725, 0.2230,  0.3320], [0.750, 0.2313,  0.4160],
    [0.775, 0.2417,  0.516], [0.800, 0.2546,  0.640], [0.825, 0.2706,  0.7800], [0.850, 0.2901,  0.9400],
    [0.875, 0.3136,  1.116], [0.900, 0.3415,  1.276], [0.925, 0.3734,  1.4000], [0.950, 0.4084,  1.4560],
    [0.975, 0.4448,  1.428], [1.000, 0.4805,  1.324], [1.025, 0.5136,  1.1640], [1.050, 0.5427,  1.0000],
    [1.075, 0.5677,  0.824], [1.100, 0.5883,  0.680], [1.125, 0.6053,  0.5520], [1.150, 0.6191,  0.4040],
    [1.200, 0.6393,  0.250], [1.250, 0.6518,  0.142], [1.300, 0.6589,  0.0640], [1.350, 0.6621,  0.0080],
    [1.400, 0.6625, -0.036], [1.450, 0.6607, -0.068], [1.500, 0.6573, -0.0900], [1.550, 0.6528, -0.1080],
    [1.600, 0.6474, -0.122], [1.650, 0.6413, -0.132], [1.700, 0.6347, -0.1340], [1.750, 0.6280, -0.1400],
    [1.800, 0.6210, -0.138], [1.850, 0.6141, -0.138], [1.900, 0.6072, -0.1380], [1.950, 0.6003, -0.1380],
    [2.000, 0.5934, -0.134], [2.050, 0.5867, -0.126], [2.100, 0.5804, -0.1220], [2.150, 0.5743, -0.1160],
    [2.200, 0.5685, -0.110], [2.250, 0.5630, -0.106], [2.300, 0.5577, -0.1000], [2.350, 0.5527, -0.0920],
    [2.400, 0.5481, -0.086], [2.450, 0.5438, -0.082], [2.500, 0.5397, -0.0720], [2.600, 0.5325, -0.0610],
    [2.700, 0.5264, -0.053], [2.800, 0.5211, -0.043], [2.900, 0.5168, -0.0350], [3.000, 0.5133, -0.0280],
    [3.100, 0.5105, -0.021], [3.200, 0.5084, -0.017], [3.300, 0.5067, -0.0130], [3.400, 0.5054, -0.0140],
    [3.500, 0.5040, -0.010], [3.600, 0.5030, -0.008], [3.700, 0.5022, -0.0060], [3.800, 0.5016, -0.0060],
    [3.900, 0.5010, -0.004], [4.000, 0.5006, -0.004], [4.200, 0.4998, -0.0015], [4.400, 0.4995, -0.0015],
    [4.600, 0.4992, -0.001], [4.800, 0.4990, -0.001], [5.000, 0.4988, -0.0010]
];

var CD_G7 = [
    [0.000, 0.1198, -0.0020], [0.050, 0.1197, -0.002], [0.10, 0.1196, -0.004], [0.150, 0.1194, -0.002],
    [0.200, 0.1193,  0.0020], [0.250, 0.1194,  0.000], [0.30, 0.1194,  0.000], [0.350, 0.1194, -0.002],
    [0.400, 0.1193,  0.0000], [0.450, 0.1193,  0.002], [0.50, 0.1194, -0.002], [0.550, 0.1193,  0.002],
    [0.600, 0.1194,  0.0060], [0.650, 0.1197,  0.010], [0.70, 0.1202,  0.020], [0.725, 0.1207,  0.032],
    [0.750, 0.1215,  0.0440], [0.775, 0.1226,  0.064], [0.80, 0.1242,  0.096], [0.825, 0.1266,  0.160],
    [0.850, 0.1306,  0.2480], [0.875, 0.1368,  0.384], [0.90, 0.1464,  0.784], [0.925, 0.1660,  1.576],
    [0.950, 0.2054,  3.7560], [0.975, 0.2993,  3.240], [1.00, 0.3803,  0.848], [1.025, 0.4015,  0.112],
    [1.050, 0.4043, -0.0360], [1.075, 0.4034, -0.080], [1.10, 0.4014, -0.108], [1.125, 0.3987, -0.128],
    [1.150, 0.3955, -0.1420], [1.200, 0.3884, -0.148], [1.25, 0.3810, -0.156], [1.300, 0.3732, -0.150],
    [1.350, 0.3657, -0.1540], [1.400, 0.3580, -0.140], [1.50, 0.3440, -0.128], [1.550, 0.3376, -0.122],
    [1.600, 0.3315, -0.1100], [1.650, 0.3260, -0.102], [1.70, 0.3209, -0.098], [1.750, 0.3160, -0.086],
    [1.800, 0.3117, -0.0780], [1.850, 0.3078, -0.072], [1.90, 0.3042, -0.064], [1.950, 0.3010, -0.060],
    [2.000, 0.2980, -0.0580], [2.050, 0.2951, -0.058], [2.10, 0.2922, -0.060], [2.150, 0.2892, -0.056],
    [2.200, 0.2864, -0.0580], [2.250, 0.2835, -0.056], [2.30, 0.2807, -0.056], [2.350, 0.2779, -0.054],
    [2.400, 0.2752, -0.0540], [2.450, 0.2725, -0.056], [2.50, 0.2697, -0.054], [2.550, 0.2670, -0.054],
    [2.600, 0.2643, -0.0560], [2.650, 0.2615, -0.054], [2.70, 0.2588, -0.054], [2.750, 0.2561, -0.056],
    [2.800, 0.2533, -0.0540], [2.850, 0.2506, -0.054], [2.90, 0.2479, -0.056], [2.950, 0.2451, -0.054],
    [3.000, 0.2424, -0.0560], [3.100, 0.2368, -0.055], [3.20, 0.2313, -0.055], [3.300, 0.2258, -0.053],
    [3.400, 0.2205, -0.0510], [3.500, 0.2154, -0.048], [3.60, 0.2106, -0.046], [3.700, 0.2060, -0.043],
    [3.800, 0.2017, -0.0420], [3.900, 0.1975, -0.040], [4.00, 0.1935, -0.037], [4.200, 0.1861, -0.034],
    [4.400, 0.1793, -0.0315], [4.600, 0.1730, -0.029], [4.80, 0.1672, -0.027], [5.000, 0.1618, -0.026]
];

//! Drag coefficient function
//!   @param mach - the mach number
//! @returns the drag coefficient in the current system corresponding to the given mach number.
function getCD(mach, CDTable) {
    let iBelow = 0;
    let iAbove = CDTable.length - 1;
    // console.log("Looking for " + mach + " initial range : " + i_below + " to " + i_above);
    while (iBelow < iAbove - 1) {
        let candidate = Math.trunc((iBelow + iAbove) / 2);
        if (CDTable[candidate][0] < mach)  iBelow = candidate;
        else iAbove = candidate;
    }
    return CDTable[iBelow][1] + CDTable[iBelow][2] * (mach - CDTable[iBelow][0]);
}


var pejsa = {
    /**
        va0  - Velocity @ point a0, in feet/second (for example: velocity at 100 yards)
        va1  - Velocity @ point a1, in feet/second (for example: velocity at 200 yards)
        dRa  - Distance between point a0 and a1 in yards   (100 yards in this example)
        vb0  - Velocity @ point b0, in feet/second (for example: velocity at 300 yards)
        vb1  - Velocity @ point b1, in feet/second (for example: velocity at 400 yards)
        dRb  - Distance between point b0 and b1 in yards   (100 yards in this example)
        dRab - Distance between point a0 and b0 in yards   (300 yards in this example)
    */
    // note units dont matter - they all cancel out along all speeds match and distances match.
    findN: (va0, va1, dRa, vb0, vb1, dRb, dRab) => { 
        ( //  yds      ft/s               ft/s
              dRa * ((va0 + va1) / 2) / (va0 - va1) 
            - dRb * ((vb0 + vb1) / 2) / (vb0 - vb1)
        ) / dRab 
    },
    getF0byBC: (v0, bc) => {  return bc * 246.0 * Math.pow(v0, 0.45)  },
    findFforBC: (v0, vrange, rangeDelta, slopeFactor)  => { return 3 * rangeDelta * (v0 + vrange) * slopeFactor / (v0 - vrange); }, 
    findF0: (v0, vrange, rangeDelta) => { return 3 * rangeDelta * (v0 + vrange) * 0.5  / (v0 - vrange) },
    getF0a: (F0, altitude, temperature, pressure) => { return F0 * (460 + temperature) / (519 - altitude / 280) * Math.exp(altitude / 31654) * (2 - pressure/ 29.92) },
    getFra: (F0, slopeFactor, range)  => { return F0 - (0.75 + 6.0E-5 * range) * slopeFactor * range },
    getVelocity: (v0, F0, slopeFactor, range) =>  { return v0 * Math.pow(1 - 3 * slopeFactor * range / F0, 1 / slopeFactor)},
    getDrop: (v0, F0, slopeFactor, range) => {  
    	return Math.pow(41.68 / v0 / (1 / range - 1 / (F0 - (0.75 + 6.0E-5 * range) * slopeFactor * range) ), 2) 
    },
    getFlightPath: function(v0, F0, slopeFactor, range, sightHeight, rangeZero) {
        var dropAtRange = pejsa.getDrop(v0, F0, slopeFactor, range);
        var dropAtZero  = pejsa.getDrop(v0, F0, slopeFactor, rangeZero);
        return -(dropAtRange + sightHeight) + (dropAtZero + sightHeight) * range / rangeZero
    },
    getElevation: (flightPath, range) => { return range == 0 ? 0 : -flightPath / range / 1.047 * 100 },
    getEnergy: (bulletWeight, velocity) => { return bulletWeight * Math.pow(velocity, 2) / 450380 }, 
    getWindage: (v0, F0, range, slopeFactor, windSpeed, windDirection) => { return range == 0 ? 0 : 79.2 * range * windSpeed / v0 / (F0 / range - 1 - slopeFactor) / range / 1.047 * 100 * Math.sin(windDirection * Math.PI / 180) },
    getFlightTime: function(v0, range, F0, slopeFactor) {
        var velocity = pejsa.getVelocity(v0, F0, slopeFactor, range);
        return F0 / v0 / (1 - slopeFactor) * (Math.pow(v0 / velocity, 1 - slopeFactor) - 1)
    },
    getInclineCorrection: function(v0, range, shootingAngle) {
        const GRAVITY = 9.80665; // m/s^2  well, where you live, not here, it's more like 9.82
        shootingAngle = deg2rad(shootingAnglec); // to radians.
        v0    *= 0.3048; // to m/s 
        range *= 0.9144; // converting to metres from yards?
        var b = Math.asin(range * GRAVITY / Math.pow(v0, 2)) / 2;
        var d = Math.sqrt(1 - 4 * Math.tan(b) * Math.sin(shootingAngle));
        return 4 * Math.pow(v0, 2) * Math.pow(Math.sin(b), 2) / (9.80665 * (1 + d)) * (1 - 2 * Math.cos(shootingAngle) / (1 + d)) * 1 / 0.3048 * 12
    },
    getInclineMOA: (shootingAngle, range) => { return range == 0 ? 0 : -shootingAngle / range / 1.047 * 100 },

    convertBcG7 : function(bc, v0) {
        v0 /= 1116.4; // to mach number - not accurate.
        return bc * getCD(v0, CD_G7) / getCD(v0, CD_G1);
    },

    getBCbyF0: (v0, F0) => { return  F0 / (246.0 * pow(v0, 0.45));  },

    getMaxPBR    : function(v0, F0, sightHeight, vitalZone) {
        var e = Math.sqrt(1 + sightHeight / vitalZone) / Math.sqrt(2);
        var a = 1 / (41.68 / v0 / Math.sqrt(vitalZone + sightHeight) + 2 / F0);
        return (1 + e) / (1 / F0 + e / a)
    },

    getNearZeroRange: function(v0, F0, sightHeight, vitalZone) {
        var e = Math.sqrt(1 + sightHeight / vitalZone);
        var a = 1 / (41.68 / v0 / Math.sqrt(vitalZone + sightHeight) + 2 / F0);
        return (1 - e) / (1 / F0 - e / aa)
    },

    getFarZeroRange: function(v0, b, sightHeight, d) {
        var e = Math.sqrt(1 + sightHeight / vitalZone);
        var a = 1 / (41.68 / v0 / Math.sqrt(vitalZone + sightHeight) + 2 / F0);
        return (1 + e) / (1 / F0 + e / a)
    }
/*
    findVk: (a, b, c) => { c / Math.pow(a / b, 2) },
    findF: (a, b, c) => { c * (a + b) * 0.5 / (a - b) },
    getFa: (a, b, c) => { a - 0.8 * b * c }, 
    getFlightTime2:  (a, b, c, d) => { 3 * b / a / (1 - 3 * b / (2 * c) + (1 - 2 * d) / 130) },
    getWindage_oClock: (a, b, c, d, e, h) => { c == 0 ? 0 : 79.2 * c * e / a / (b / c - 1 - d) / c / 1.047 * 100 * Math.sin(h / 12 * 2 * Math.PI) },
    getBCbyF0a: (a, b) => { b / (124.8364 * Math.sqrt(a)) },
    getBCa:  (a, b, c, d) => { a * (460 + c) / (519 - b / 280) * Math.exp(b / 31654) * (2 - d / 29.92) }
*/

};
