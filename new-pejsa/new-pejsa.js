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

/*
function decideConvert(height, pressure) {
    var F1 = (Math.pow(1013.25, 0.190284) * 0.0065)/288.15;
    var F2 = Mheight/Math.pow((MBpressure - 0.3), 0.190284);
    var F3 = 1/0.190284;
    var F = Math.pow((1 + (F1 * F2)), F3);
    var altpressure = (MBpressure - 0.3) * F
    return altpressure;
}
    
function convertinHGtomb(inHG) { return 33.8639*inHG;  }
function convertmbtoinHG(mb)   { return 0.0295300*mb;  }
function convertmbtommHG(mb)   { return 0.750062*mb;   }
function convertmmHGtomb(mmHG) { return 1.333224*mmHG; }
function convertfeettometer(feet) { return 0.3048 * feet; }
function roundOff(value) { return Math.round(100*value)/100; }
function setToNull()
{
    document.Convert.AltimeterSettinginHG.value="";
    document.Convert.AltimeterSettingmmHG.value="";
    document.Convert.AltimeterSettingmb.value="";
    document.Convert.StnPress.value="";
    document.Convert.Height.value="";
}
*/
const RHO_STD          = 1.1804126009855136; // std density of air as used in ballistics
const POUNDS_PER_KG    = 2.20462;
const INCHES_PER_METRE = 39.3701;
const GRAVITY          = 9.822631; // correct local gravity
const GRAINS_PER_KG    = 15432;
const KELVIN           = 273.15;
const R                = 8.3145; // universal gas constant J/(K Mol)


/**
 * Encapsulates environmental factors and such...
 */    
class _EnvironmentalFactors {
    /**
     * @param {Number} temperature is the ambient temperature in C
     * @param {Number} pressure is the local temperature in hPa
     * @param {Number} humidity is the relative humidity.
     * @param {Number} windSpeed is the wind speed in m/s 
     * @param {Number} windAngle is the angle in Radians from north from where the wind is blowing from.
     */
    constructor(temperature, pressure, humidity, windSpeed, windAngle) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.windAngle = windAngle;
        this.headWind = Math.cos(windAngle) * windSpeed;
        this.crossWind = Math.sin(windAngle) * windSpeed;
        
        let T = temperature;
        let TKel = KELVIN + T;
        let p = pressure * 100; // in Pascals
        const Md = 0.028964; // molar mass of dry air, kg/mol
        const Mv = 0.018016; // molar mass of water vapor kg/mol

        let psat = 6107.8 * Math.exp(7.27 * T / TKel);
        let pv = humidity * psat;
        let pd = (p - pv);
        this.rho = (pd * Md + pv * Mv) / (R * TKel);
        
        let ENH = 3.141593e-8 * p + 1.00062 + T * T * 5.6e-7;
        let PSV1 = TKel * (TKel * 0.000012378847 - 0.019121316);
        let PSV2 = 33.93711047 - 6343.1645 / TKel;
        let PSV = Math.exp(PSV1) * Math.exp(PSV2);
        let Xw = humidity * ENH * PSV / p;
        let Xc = 400 * Math.pow(10, -6);
        let C1 = 331.5024 + (0.603055 - 0.000528 * T) * T + (51.471935 + (0.1495874 - 0.000782 * T) * T) * Xw;
        let C2 = (-1.82e-7 + (3.73e-8 - 2.93e-10 * T) * T) * p + (-85.20931 + (-0.228525 + 0.0000591 * T) * T) * Xc;
        let C3 = Xw * Xw * 2.835149 + p * p * 2.15e-13 - Xc * Xc * 29.179762 - 0.000486 * Xw * p * Xc;
        this.mach1 = C1 + C2 - C3;
        
        this.ballisticAdjustment = RHO_STD / this.rho;
    }

    getBallisticAdjustment() { 
        return RHO_STD / this.rho; 
    }
}

class _Solution {
    /**
     * Construct one solution for the given projectile with the scope at the given scopeHeight..
     * @param {Number} bc - G1 equivalent ballistic coefficient. 
     * @param {Number} slopeFactor - shape factor.
     * @param {Number} weight - projectile weight.
     * @param {Number} scopeHeight - height in metres of center of scope above center of boreline.
     */
    constructor(bc, slopeFactor, weight, scopeHeight) {
        this.bc = bc; // G1
        this.slopeFactor = slopeFactor;
        this.weight = weight;
        this.reference = scopeHeight;
        
        this.environment = new Pejsa.EnvironmentalFactors(15, 1000.0, 0.70, 0.0, 0.0)
        this.v0 = 940.0; // m/s
        this.F0 = Pejsa.getF0byBC(this.v0, this.bc); // not adjusted for std environment 
        this.zero = {
            environment: new Pejsa.EnvironmentalFactors(15, 1000.0, 0.7, 0, 0), // default environment
            range: 100.0,
            offset: 0.0,
            v0: this.v0,
            F0: this.F0,
            drop: Pejsa.getDrop(this.v0, this.F0, this.slopeFactor, 100.0)
        }
    }

    /**
     * Set the zero conditions. 
     *   @param {number} v0 is the muzzle velocity at zero time.
     *   @param {Number} range is the range in metres when zeroing.
     *   @param {Number} offset is the observed offset of the impacts, negative low.
     *   @param {EnvironmentalFactors} environment is the ambient environment at the zero time.
     */
    setZeroing(v0, range, offset, environment) {
        this.zero.environment = environment;
        this.zero.range = range;        
        this.zero.offset = offset;
        this.zero.v0 = v0;
        this.zero.F0 = this.zero.environment.getBallisticAdjustment() * Pejsa.getF0byBC(this.zero.v0, this.bc);
        this.zero.drop = Pejsa.getDrop(this.zero.v0, this.zero.F0, this.slopeFactor, this.zero.range)
    }

    /**
     * Set the initial conditions for the solution.
     * @param {EnvironmentalFactors} environment is the ambient environment at solution time.
     * @param {Number} v0 - initial speed in m/s.
     * @param {Number} bc - G1 equivalent ballistic coefficient.
     * @param {Number} slopeFactor - form factor.
     */
    setInitials(v0, environment) {
        this.environment = environment;
        this.v0 = v0;
        this.F0 = this.environment.getBallisticAdjustment() * Pejsa.getF0byBC(this.v0, this.bc);
    }

    solveForRange(range) {
        // console.log(this);
        var time = Pejsa.getFlightTime(this.v0, this.F0, this.slopeFactor, range);
        var drop = Pejsa.getDrop(this.v0, this.F0, this.slopeFactor, range);
        var windage = this.environment.crossWind * (time - range / this.v0);
        var velocity = Pejsa.getVelocity(this.v0, this.F0, this.slopeFactor, range);
        var path =  -(drop + this.reference) + (this.zero.drop + this.reference) * range / this.zero.range;
        var energy = 0.5 * this.weight * velocity * velocity;
        return  {
            x: range,
            y: path,
            d: drop,
            v: velocity,
            t: time,
            e: energy,
            w: windage
        }
    }
}

var Pejsa = {
    EnvironmentalFactors : _EnvironmentalFactors,
    Solution : _Solution,
    /**
     *  How does pressure change with altitude?
     *  @param altitude - elevation above sea level in metres
     *  @returns a multiple of sea level pressure.
     */
    pressureCorrection(altitude) {
        const Tb = 288.15;   // reference temperature. 15 C in Kelvin
        const Lb = -6.5e-3;  // temperature lapse rate K/m
        const R = 8.3144598; // universal gas constant
        const M = 0.0289644; // molar mass of air (dry)    
        const g0 = 9.822631; // earths gravitational acceleration 
        const r =  6.356766e6; // m
        // geopotential height
        let height = r * altitude / (r + altitude);
       
        let a = Tb / (Tb + Lb * height);
        let b = (g0 * M)/(R * Lb);
        return  Math.pow(a, b);
    },
    
    /**
     * What is the standard pressure at the given altitude?
     *  @param altitude - elevation above sea level in metres.
     * @returns the standard pressure in hPa.
     */
    getStandardPressure(altitude)  {
        return  1013.25 * this.pressureCorrection(altitude);
    },

    /**
     *  Finds the shape factor from the given parameters.
     *  Note that the units dont matter - they all cancel out along as all speeds match and distances match.
     *    @param {Number} va0  - Velocity @ point a0, in feet/second (for example: velocity at 100 yards)
     *    @param {Number} va1  - Velocity @ point a1, in feet/second (for example: velocity at 200 yards)
     *    @param {Number} dRa  - Distance between point a0 and a1 in yards   (100 yards in this example)
     *    @param {Number} vb0  - Velocity @ point b0, in feet/second (for example: velocity at 300 yards)
     *    @param {Number} vb1  - Velocity @ point b1, in feet/second (for example: velocity at 400 yards)
     *    @param {Number} dRb  - Distance between point b0 and b1 in yards   (100 yards in this example)
     *    @param {Number} dRab - Distance between point a0 and b0 in yards   (300 yards in this example)
     *  @returns {Number} the shape factor of the projectile.
     */
    findN: (va0, va1, dRa, vb0, vb1, dRb, dRab) => { 
        ( 
              dRa * ((va0 + va1) / 2) / (va0 - va1) 
            - dRb * ((vb0 + vb1) / 2) / (vb0 - vb1)
        ) / dRab 
    },

    /**
     * Calculate a retardation coefficient.
     *   @param {Number} v0 - initial velocity in m/s.
     *   @param {Number} bc - G1 ballistic coefficient.
     * @returns {Number} the initial retardation coefficient.
     */
    getF0byBC: (v0, bc) => {  return bc * 419.883079659408 * Math.pow(v0, 0.45);  },

    /**
     * Calculate ballistic coefficient from retardation coefficient.
     *   @param {Number} v0 - initial velocity in m/s.
     *   @param {Number} F0 - Pejsa's retardation coefficient.
     * @returns {Number} the G1 equivalent ballistic coefficient.
     */
    getBCbyF0: (v0, F0) => { return  F0 / (419.883079659408 * Math.pow(v0, 0.45));  },


    // units below in imperial
    /*
    findFforBC: (v0, vrange, rangeDelta, slopeFactor)  => { 
        // vrange in yards or feet?
        return 3 * rangeDelta * (v0 + vrange) * slopeFactor / (v0 - vrange); 
    }, 
    findF0: (v0, vrange, rangeDelta) => { return 3 * rangeDelta * (v0 + vrange) * 0.5  / (v0 - vrange) },
    */
    // getF0a: (F0, altitude, temperature, pressure) => { return F0 * (460 + temperature) / (519 - altitude / 280) * Math.exp(altitude / 31654) * (2 - pressure/ 29.92) },
    
    /**
     *  What is the retardation coefficient at the range?
     *    @param {Number} F0 - initial retardation coefficient.   
     *    @param {Number} slopeFactor - shape descriptor
     *    @param {Number} range - range in metres.
     *  @returns the effective retardation coefficient at the given range.
     */
    getFra: (F0, slopeFactor, range)  => { return F0 - (0.6858 + 5.43482784E-05 * range) * slopeFactor * range },
    
    /**
     *  What is the velocity at a given range?
     *    @param {Number} v0 - initial velocity in m/s;
     *    @param {Number} F0 - initial retardation coefficient,
     *    @param {Number} slopeFactor - shape descriptor.
     *  @returns {Number} the velocity of the projectile m/s at the given range.
     */
    getVelocity: (v0, F0, slopeFactor, range) =>  { 
        // console.log(`v0: ${v0}, F0: ${F0}, slopeFactor: ${slopeFactor}, range: ${range}`);
        
        return v0 * Math.pow(1 - slopeFactor * range /( 0.3048 * F0), 1 / slopeFactor)
    },
    /**
     *  What is the drop at the given range?
     *    @param {Number} v0 - initial velocity in m/s
     *    @param {Number} F0 - initial retardation coefficient.
     *    @param {Number} slopeFactor - shape descriptor.
     *    @param {Number} range - range in metres.
     *  @returns drop in metres from the muzzle.
     */
    getDrop: (v0, F0, slopeFactor, range) => {  
    	return Math.pow(2.02469463123426 / v0 / (0.9144 / range - 1 / Pejsa.getFra(F0, slopeFactor, range )), 2) 
    },

    /**
     *  What is the flightpath if the rifle is zeroed at the given range?
     *    @param {Number} v0 - initial velocity in m/s
     *    @param {Number} F0 - initial retardation coefficient.
     *    @param {Number} slopeFactor - shape descriptor.
     *    @param {Number} range - range in metres.
     *    @param {Number} sightHeigh - scope center offset from bore center.
     *    @param {Number} rangeZero - range in metres where the rifle is zeroed. 
     *  @returns the flightpath for the given range in metres, negave below sightline.
     */
    getFlightPath: function(v0, F0, slopeFactor, range, sightHeight, rangeZero) {
        var dropAtRange = Pejsa.getDrop(v0, F0, slopeFactor, range);
        var dropAtZero  = Pejsa.getDrop(v0, F0, slopeFactor, rangeZero);
        return -(dropAtRange + sightHeight) + (dropAtZero + sightHeight) * range / rangeZero
    },

    /**
     * Calculate wind deflection.
     *    @param {Number} v0 - initial velocity in m/s
     *    @param {Number} F0 - initial retardation coefficient.
     *    @param {Number} slopeFactor - shape descriptor.
     *    @param {Number} range - range in metres.    
     *    @param {Number} crossWind- cross wind speed in m/s.
     *  @returns the horizontal wind deflection in metres. 
     */
    getWindage: function(v0, F0, slopeFactor, range, crossWind) {
        var t = Pejsa.getFlightTime(v0, F0, slopeFactor, range);
        return crossWind * (t - range / v0);
    },

    /**
     *  What is the flight time to the given range?
     *    v0 - initial velocity in m/s
     *    F0 - initial retardation coefficient.
     *    slopeFactor - shape descriptor.
     *    range - range in metres.
     *  returns the time in seconds.
     */
    getFlightTime: function(v0, F0, slopeFactor, range) {
        var velocity = Pejsa.getVelocity(v0, F0, slopeFactor, range);
        return 0.3048 * F0 / v0 / (1 - slopeFactor) * (Math.pow( v0 /velocity, 1 - slopeFactor) - 1)
    },
    
    /**
     *  Convert a G1 ballistic coefficient to G7.
     *    @param {Number} bc is the G1 coefficient to convert.
     *    @param {Number} mach is the velocity to consider as a mach number.j 
     *  @returns {Number} the equivalent G7 ballistic coefficient.
     */
    convertG1toG7 : function(bc, mach) {
        return bc * getCD(mach, CD_G7) / getCD(mach, CD_G1);
    },

    // these have not been checked...

    getElevation: (flightPath, range) => { return range == 0 ? 0 : -flightPath / range / 1.047 * 100 },
    getEnergy: (bulletWeight, velocity) => { return bulletWeight * Math.pow(velocity, 2) / 450380 }, 
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
