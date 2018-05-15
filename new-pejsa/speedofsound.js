'use strict'
// Code from: Dr Richard Lord - http://www.npl.co.uk/acoustics/techguides/speedair

// Calculate the speed of sound in m/s
//   temperature - ambient temperature in Celsius
//   pressure    - ambient pressure in hPa.
//   humidiy     - relative humidity 0..1.
function speedOfSound(temperature, pressure, humidity) {
	const  Kelvin = 273.15; // For converting to Kelvin
	let P = pressure * 100.0; // from hPa to Pa
	
	let T = temperature;
	let T_kel = Kelvin + T; // Measured ambient temp

	let ENH = 3.141593e-8 * P + 1.00062 + T*T * 5.6e-7;

	let PSV1 = T_kel * ( T_kel * 1.2378847e-5 - 1.9121316e-2);
	let PSV2 = 33.93711047 - 6.3431645e3/T_kel;
	let PSV = Math.exp(PSV1) * Math.exp(PSV2);
	let Xw = humidity * ENH * PSV / P;
	let Xc = 4.0e-8;

	let C1 =  331.5024 + (0.603055  - 5.28e-4 * T) * T + (51.471935 + (0.1495874 - 7.82e-4 * T) * T) * Xw;
	let C2 = (-1.82e-7 + (3.73e-8 - 2.93e-10 * T) * T) * P + (-85.20931 + (- 0.228525  +  5.91e-5 * T) *T) * Xc;
	let C3 = Xw * Xw * 2.835149 + P * P * 2.15e-13 - Xc * Xc * 29.179762 - 4.86e-4 * Xw * P * Xc;
	return  C1 + C2 - C3;
}
