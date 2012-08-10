
/*

Partly based on a C language version of GNU Ballistics Library, originally created
by Derek Yates who licenses it under GNU GPL, although it's iffy that you can dirty
the G1 model data by GPL-ing one specific implementation of it in C and therefore it
will need to be GPL forevahandevahpinkieswear.

Port and additions by Jóhann Þórir Jóhannsson who doesn't license this at all except
the stuff that was originally GNU which has to continue being GNU, like, it's contaminated
or something. 

The guy just can't GPL first order integration can he?

*/

var  M_PI = Math.PI;

var __BCOMP_MAXRANGE__ = 5000;

var TOO_LOW = 1;
var TOO_HIGH = 2;
var PBR_ERROR = 3;

var GRAVITY = -32.194;
var PSTD = 29.53; // in-hg

var G1 = 1;
var G2 = 2;
var G3 = 3;
var G4 = 4;
var G5 = 5;
var G6 = 6;
var G7 = 7;
var G8 = 8;


/* Specialty angular conversion functions */

function DegtoMOA(deg) { return deg * 60;  }
function DegtoRad(deg) { return deg*M_PI/180; }
function MOAtoDeg(moa) { return moa/60; }
function MOAtoRad(moa) { return moa/60*M_PI/180; }
function RadtoDeg(rad) { return rad*180/M_PI; }
function RadtoMOA(rad) { return rad*60*180/M_PI;}



function retard(DragFunction, DragCoefficient, Velocity)
{
    /*  printf("DF: %d, CD: %f, V: %f,); */

    var vp  = Velocity;
    var val = -1;
    var A   = -1;
    var M   = -1;

    switch(DragFunction)
    {
        case G1:
            if      (vp > 4230) { A = 1.477404177730177e-04; M = 1.9565; }
            else if (vp > 3680) { A = 1.920339268755614e-04; M = 1.925 ; }
            else if (vp > 3450) { A = 2.894751026819746e-04; M = 1.875 ; }
            else if (vp > 3295) { A = 4.349905111115636e-04; M = 1.825 ; }
            else if (vp > 3130) { A = 6.520421871892662e-04; M = 1.775 ; }
            else if (vp > 2960) { A = 9.748073694078696e-04; M = 1.725 ; }
            else if (vp > 2830) { A = 1.453721560187286e-03; M = 1.675 ; }
            else if (vp > 2680) { A = 2.162887202930376e-03; M = 1.625 ; }
            else if (vp > 2460) { A = 3.209559783129881e-03; M = 1.575 ; }
            else if (vp > 2225) { A = 3.904368218691249e-03; M = 1.55  ; }
            else if (vp > 2015) { A = 3.222942271262336e-03; M = 1.575 ; }
            else if (vp > 1890) { A = 2.203329542297809e-03; M = 1.625 ; }
            else if (vp > 1810) { A = 1.511001028891904e-03; M = 1.675 ; }
            else if (vp > 1730) { A = 8.609957592468259e-04; M = 1.75  ; }
            else if (vp > 1595) { A = 4.086146797305117e-04; M = 1.85  ; }
            else if (vp > 1520) { A = 1.954473210037398e-04; M = 1.95  ; }
            else if (vp > 1420) { A = 5.431896266462351e-05; M = 2.125 ; }
            else if (vp > 1360) { A = 8.847742581674416e-06; M = 2.375 ; }
            else if (vp > 1315) { A = 1.456922328720298e-06; M = 2.625 ; }
            else if (vp > 1280) { A = 2.419485191895565e-07; M = 2.875 ; }
            else if (vp > 1220) { A = 1.657956321067612e-08; M = 3.25  ; }
            else if (vp > 1185) { A = 4.745469537157371e-10; M = 3.75  ; }
            else if (vp > 1150) { A = 1.379746590025088e-11; M = 4.25  ; }
            else if (vp > 1100) { A = 4.070157961147882e-13; M = 4.75  ; }
            else if (vp > 1060) { A = 2.938236954847331e-14; M = 5.125 ; }
            else if (vp > 1025) { A = 1.228597370774746e-14; M = 5.25  ; }
            else if (vp >  980) { A = 2.916938264100495e-14; M = 5.125 ; }
            else if (vp >  945) { A = 3.855099424807451e-13; M = 4.75  ; }
            else if (vp >  905) { A = 1.185097045689854e-11; M = 4.25  ; }
            else if (vp >  860) { A = 3.566129470974951e-10; M = 3.75  ; }
            else if (vp >  810) { A = 1.045513263966272e-08; M = 3.25  ; }
            else if (vp >  780) { A = 1.291159200846216e-07; M = 2.875 ; }
            else if (vp >  750) { A = 6.824429329105383e-07; M = 2.625 ; }
            else if (vp >  700) { A = 3.569169672385163e-06; M = 2.375 ; }
            else if (vp >  640) { A = 1.839015095899579e-05; M = 2.125 ; }
            else if (vp >  600) { A = 5.71117468873424e-05 ; M = 1.950 ; }
            else if (vp >  550) { A = 9.226557091973427e-05; M = 1.875 ; }
            else if (vp >  250) { A = 9.337991957131389e-05; M = 1.875 ; }
            else if (vp >  100) { A = 7.225247327590413e-05; M = 1.925 ; }
            else if (vp >   65) { A = 5.792684957074546e-05; M = 1.975 ; }
            else if (vp >    0) { A = 5.206214107320588e-05; M = 2.000 ; }
            break;

        case G2:
            if      (vp > 1674 ) { A = .0079470052136733   ;  M = 1.36999902851493; }
            else if (vp > 1172 ) { A = 1.00419763721974e-03;  M = 1.65392237010294; }
            else if (vp > 1060 ) { A = 7.15571228255369e-23;  M = 7.91913562392361; }
            else if (vp >  949 ) { A = 1.39589807205091e-10;  M = 3.81439537623717; }
            else if (vp >  670 ) { A = 2.34364342818625e-04;  M = 1.71869536324748; }
            else if (vp >  335 ) { A = 1.77962438921838e-04;  M = 1.76877550388679; }
            else if (vp >    0 ) { A = 5.18033561289704e-05;  M = 1.98160270524632; }
            break;

        case G5:
            if      (vp > 1730 ){ A = 7.24854775171929e-03; M = 1.41538574492812; }
            else if (vp > 1228 ){ A = 3.50563361516117e-05; M = 2.13077307854948; }
            else if (vp > 1116 ){ A = 1.84029481181151e-13; M = 4.81927320350395; }
            else if (vp > 1004 ){ A = 1.34713064017409e-22; M = 7.8100555281422 ; }
            else if (vp >  837 ){ A = 1.03965974081168e-07; M = 2.84204791809926; }
            else if (vp >  335 ){ A = 1.09301593869823e-04; M = 1.81096361579504; }
            else if (vp >    0 ){ A = 3.51963178524273e-05; M = 2.00477856801111; }
            break;

        case G6:
            if      (vp > 3236 ) { A = 0.0455384883480781   ; M = 1.15997674041274; }
            else if (vp > 2065 ) { A = 7.167261849653769e-02; M = 1.10704436538885; }
            else if (vp > 1311 ) { A = 1.66676386084348e-03 ; M = 1.60085100195952; }
            else if (vp > 1144 ) { A = 1.01482730119215e-07 ; M = 2.9569674731838 ; }
            else if (vp > 1004 ) { A = 4.31542773103552e-18 ; M = 6.34106317069757; }
            else if (vp >  670 ) { A = 2.04835650496866e-05 ; M = 2.11688446325998; }
            else if (vp >    0 ) { A = 7.50912466084823e-05 ; M = 1.92031057847052; }
            break;

        case G7:
            if      (vp > 4200 ) { A = 1.29081656775919e-09; M = 3.24121295355962; }
            else if (vp > 3000 ) { A = 0.0171422231434847  ; M = 1.27907168025204; }
            else if (vp > 1470 ) { A = 2.33355948302505e-03; M = 1.52693913274526; }
            else if (vp > 1260 ) { A = 7.97592111627665e-04; M = 1.67688974440324; }
            else if (vp > 1110 ) { A = 5.71086414289273e-12; M = 4.3212826264889 ; }
            else if (vp >  960 ) { A = 3.02865108244904e-17; M = 5.99074203776707; }
            else if (vp >  670 ) { A = 7.52285155782535e-06; M = 2.1738019851075 ; }
            else if (vp >  540 ) { A = 1.31766281225189e-05; M = 2.08774690257991; }
            else if (vp >    0 ) { A = 1.34504843776525e-05; M = 2.08702306738884; }
            break;

        case G8:
            if      (vp > 3571 ) { A = .0112263766252305   ; M = 1.33207346655961; }
            else if (vp > 1841 ) { A = .0167252613732636   ; M = 1.28662041261785; }
            else if (vp > 1120 ) { A = 2.20172456619625e-03; M = 1.55636358091189; }
            else if (vp > 1088 ) { A = 2.0538037167098e-16 ; M = 5.80410776994789; }
            else if (vp >  976 ) { A = 5.92182174254121e-12; M = 4.29275576134191; }
            else if (vp >    0 ) { A = 4.3917343795117e-05 ; M = 1.99978116283334; }
            break;

        default:
            break;

    }

    if (A != -1 && M != -1 && vp > 0 && vp < 10000)
    {
        val = A * Math.pow(vp, M) / DragCoefficient;
        return val;
    }
    else
        return -1;
}



// the guy probably got this from a book somewhere..l
function AtmCorrect(DragCoefficient, Altitude, Barometer, Temperature, RelativeHumidity)
{

   //this is how Pejsa does it (air pressure in millibars)   
   // adjustment factor to retardation coefficient = (460.0 + temperature_f)/(519.0 - altitude / 280) * exp(altitude / 31654) * (2 - air_pressure/1000);

    var Tstd = -0.0036 * Altitude + 59;
    var FT = (Temperature - Tstd)/(459.6 + Tstd);
    var FR = 0.995*(Barometer/(Barometer - 0.3783*RelativeHumidity * ((4e-6 * Temperature - 0.0004) * Temperature  + 0.0234) * Temperature - 0.2517));
    var FP = (Barometer - PSTD)/(PSTD);
    return DragCoefficient * ((1 + FT - FP)*FR/(((-4e-15 * Altitude  + 4e-10) * Altitude - 3e-5) * Altitude + 1));
}


function Windage(WindSpeed, Vi, xx, t)   { return ((WindSpeed * 17.60) *(t - xx / Vi));        }
function HeadWind(WindSpeed, WindAngle)  { return (Math.cos(DegtoRad(WindAngle)) * WindSpeed); }
function CrossWind(WindSpeed, WindAngle) { return (Math.sin(DegtoRad(WindAngle)) * WindSpeed); }
/*

// Very stupid search for zero angle... guy did not do his algorithms 101.  

function ZeroAngle(DragFunction, DragCoefficient, Vi, SightHeight, ZeroRange, yIntercept)
{
    var iterations = 0;
    // Numerical Integration variables
    var t = 0;
    var dt = 1/Vi;
    var y = -SightHeight/12;
    var x = 0;

    var v   = 0;
    var vx  = 0;
    var vy  = 0;
    var vx1 = 0;
    var vy1 = 0;
    var dv  = 0;
    var dvx = 0;
    var dvy = 0;
    var Gx  = 0;
    var Gy  = 0;

    var angle = 0;
    var quit = 0;


    var da = DegtoRad(14);


    // The general idea here is to start at 0 degrees elevation, and increase the elevation by 14 degrees
    // until we are above the correct elevation.  Then reduce the angular change by half, and begin reducing
    // the angle.  Once we are again below the correct angle, reduce the angular change by half again, and go
    // back up.  This allows for a fast successive approximation of the correct elevation, usually within less
    // than 20 iterations.

    for (angle=0; quit == 0; angle = angle + da)
    {
        document.write("angle: " + angle + "\n");

        vy = Vi * Math.sin(angle);
        vx = Vi * Math.cos(angle);
        Gx = GRAVITY * Math.sin(angle);
        Gy = GRAVITY * Math.cos(angle);
        x = 0;
        y = -SightHeight/12;

        for (t=0; x <= (ZeroRange * 3); t = t+dt)
        {
            iterations++;
            vy1 = vy;
            vx1 = vx;
            v = Math.pow((Math.pow(vx,2)+Math.pow(vy,2)),0.5);
            dt = 1/v;

            dv = retard(DragFunction, DragCoefficient, v);
            dvy = -dv * vy/v;
            dvx = -dv * vx/v;

            vx = vx + dt * (dvx + Gx);
            vy = vy + dt * (dvy + Gy);

            x = x + dt * (vx + vx1)/2;
            y = y + dt * (vy + vy1)/2;

            if (vy < 0 && y < yIntercept)
            {
                break;
            }

            if (vy > 3*vx)
            {
                break;
            }
        }

        document.write("   x " + x + ", y = " + y + "\n");

        if (y>yIntercept && da>0)
        {
            da = -da / 2;
        }

        if (y<yIntercept && da<0)
        {
            da = -da / 2;
        }

        // If our accuracy is sufficient, we can stop approximating.
        if (Math.abs(da) < MOAtoRad(0.01))
            quit = 1;

        if (angle > DegtoRad(45))
            quit = 1;

    }

    document.write(" Iterations: " + iterations + "\n");
    return RadtoDeg(angle); // Convert to degrees for return value.
}

*/

function ZeroAngle(DragFunction, DragCoefficient, Vi, SightHeight, ZeroRange, yIntercept)
{
    var iterations = 0;
    // Numerical Integration variables
    var t = 0;
    var dt = 0.25/Vi;
    var y = 0;
    var x = 0;

    var v   = 0;
    var vx  = 0;
    var vy  = 0;
    var vx1 = 0;
    var vy1 = 0;
    var dv  = 0;
    var dvx = 0;
    var dvy = 0;
    var Gx  = 0;
    var Gy  = 0;

    var angle = DegtoRad(16); // Math.atan((-DropAtZero(DragFunction, DragCoefficient, Vi, SightHeight, ZeroRange))/(ZeroRange*36)); 
    // var minchange = MOAtoRad(0.01);

    var da = angle/2;
    var found = false;
    var impact = (SightHeight + yIntercept)/12;
    var mindiff = 0.1 / (25.4*12); 

    // ok we do this differently... start with big angle and then use binary search.
    // we start with bore at zero and try to find an impact at sightheight + yintercept at the given range.
    while(!found)
    {
        // document.write("angle: " + RadtoDeg(angle) + "\n");

        x = 0;
        y = 0;

        vy = Vi * Math.sin(angle);
        vx = Vi * Math.cos(angle);
        Gx = GRAVITY * Math.sin(angle);
        Gy = GRAVITY * Math.cos(angle);

        // track x (feet) out to zeroRange (yards) or until we cross sightline...,
        for (t=0; x < (ZeroRange*3); t = t+dt)
        {
            iterations++;
            vy1 = vy;
            vx1 = vx;
            v = Math.pow((Math.pow(vx,2)+Math.pow(vy,2)),0.5);
            dt = 0.25/v;

            dv = retard(DragFunction, DragCoefficient, v);
            dvy = -dv * vy/v;
            dvx = -dv * vx/v;

            vx = vx + dt * (dvx + Gx);
            vy = vy + dt * (dvy + Gy);

            x = x + dt * (vx + vx1)/2;
            y = y + dt * (vy + vy1)/2;
            if(vy < 0 && y < impact)
                break;
        }

        // now if impact is higher than sight height + yintercept then we need to reduce the angle
        if(y > impact)
            angle -= da;
        // if it is lower, then increase.
        else
            angle += da;

        da *= .5;

        // and we stop if the next angle change is less then one cent of moa.

        // document.write("   x " + x + ", y = " + (y*12*25.4).toFixed(1) + "\n");


        // If our accuracy is sufficient, we can stop approximating.
        
        if(Math.abs(y-impact) < mindiff)
            found = true;
            
      /*  if (da < minchange)
            found = true; */

    }

   // alert(" Iterations: " + iterations + "\n");
    return RadtoDeg(angle); // Convert to degrees for return value.
}


function SolveAll(DragFunction, DragCoefficient, Weight, Vi, SightHeight, ShootingAngle, ZAngle, WindSpeed, WindAngle )
{

    var result = new Object();
    result.solutions = new Array();
    result.maxpath = -10000000;
    result.maxpathrange = 0;

    var dt = 0.25/Vi;

    var headwind  = HeadWind(WindSpeed, WindAngle);
    var crosswind = CrossWind(WindSpeed, WindAngle);

    var Gy = GRAVITY * Math.cos(DegtoRad((ShootingAngle + ZAngle)));
    var Gx = GRAVITY * Math.sin(DegtoRad((ShootingAngle + ZAngle)));

    var vx = Vi * Math.cos(DegtoRad(ShootingAngle + ZAngle));
    var vy = Vi * Math.sin(DegtoRad(ShootingAngle + ZAngle));

    var x = 0;
    var y = -SightHeight/12;

    var meters = 0;
    var n = 0;


    for(var t=0;;t = t + dt)
    {
        var vx1 = vx;
        var vy1 = vy;

        var v = Math.pow( Math.pow(vx, 2) + Math.pow(vy, 2), 0.5);
        dt = 0.25/v;

        var dv = retard(DragFunction, DragCoefficient, v + headwind);
        var dvx = -(vx/v)*dv + Gx;
        var dvy = -(vy/v)*dv + Gy;

        vx += dt*dvx;
        vy += dt*dvy;
        
        var meters = x / 3.280839895;
        var path = y * 12;
        if(meters >= n)
        {
            var solution = new Object();
            solution.range    = x/3;                        // Range in yds ( 3 ft pr yard)
            solution.path     = path;                         // Path in inches
            solution.time     = t + dt;                         // Time in s
            solution.windage  = Windage(crosswind,Vi,x,t+dt);   // Windage in inches
            solution.velocity = v;                              // Velocity (combined)
            solution.energy   = Math.pow(v, 2) /  450380.0 * Weight; 
            solution.vel_x = vx;                             // Velocity (x)
            solution.vel_y = vy;                             // Velocity (y)
            result.solutions[n] = solution;
            n++;
        }

        if(path > result.maxpath)
        {
            result.maxpath = path;
            result.maxpathrange = meters;
        }

        x += dt*(vx + vx1)/2;
        y += dt*(vy + vy1)/2;

        if (Math.abs(vy) > Math.abs(3 * vx))
            break;

        if (n > __BCOMP_MAXRANGE__ )
            break;
    }

    return result;
}


// this is only used to base a riflemans rule estimate of the zero angle.
// note that this is inaccurate for very slow bullets or extreme ranges, but 
// good enough for hunting distances by normal humans using normal ammunition.
function DropAtZero(DragFunction, DragCoefficient, Vi, SightHeight, ZeroRange)
{
    var dt = 0.25/Vi;

    var vx = Vi;
    var vy = 0;

    var x = 0;
    var y = -SightHeight/12;
    var maxrange = ZeroRange*3; // max range in feet.

    for(var t=0;;t = t + dt)
    {
        var vx1 = vx;
        var vy1 = vy;

        var v = Math.pow( Math.pow(vx, 2) + Math.pow(vy, 2), 0.5);
        dt = 0.25/v;

        var dv = retard(DragFunction, DragCoefficient, v);

        var dvx = -(vx/v)*dv;
        var dvy = -(vy/v)*dv + GRAVITY;

        vx += dt*dvx;
        vy += dt*dvy;

        x += dt*(vx + vx1)/2;
        y += dt*(vy + vy1)/2;

        if(x >= maxrange)        
            return y*12;        

        if (Math.abs(vy) > Math.abs(3 * vx))
            break;
    }

    return 0;
}


/* 

// unbelievably stupid implementation.

int pbr(int DragFunction, double DragCoefficient, double Vi, double SightHeight, double VitalSize, int* oresult){

    double t=0;
    double dt=0.25/Vi;
    double v=0;
    double vx=0, vx1=0, vy=0, vy1=0;
    double dv=0, dvx=0, dvy=0;
    double x=0, y=0;
    double ShootingAngle=0;
    double ZAngle=0;
    double Step=10;

    int result=0;

    int quit=0;

    double zero=-1;
    double farzero=0;

    int vertex_keep=0;
    double y_vertex=0;
    double x_vertex=0;

    double min_pbr_range=0;
    int min_pbr_keep=0;

    double max_pbr_range=0;
    int max_pbr_keep=0;

    int tin100=0;

    double Gy=GRAVITY*cos(DegtoRad((ShootingAngle + ZAngle)));
    double Gx=GRAVITY*sin(DegtoRad((ShootingAngle + ZAngle)));

    while (quit==0)
    {
        int keep=0;
        int keep2=0;
        int tinkeep=0;
        int n=0;

        Gy=GRAVITY*cos(DegtoRad((ShootingAngle + ZAngle)));
        Gx=GRAVITY*sin(DegtoRad((ShootingAngle + ZAngle)));

        vx=Vi*cos(DegtoRad(ZAngle));
        vy=Vi*sin(DegtoRad(ZAngle));

        y=-SightHeight/12;

        x=0; y=-SightHeight/12;

        min_pbr_keep=0;
        max_pbr_keep=0;
        vertex_keep=0;

        tin100=0;
        tinkeep=0;


        for (t=0;;t=t+dt){

            vx1=vx, vy1=vy;
            v=pow(pow(vx,2)+pow(vy,2),0.5);
            dt=0.5/v;

            // Compute acceleration using the drag function retardation
            dv = retard(DragFunction,DragCoefficient,v);
            dvx = -(vx/v)*dv;
            dvy = -(vy/v)*dv;

            // Compute velocity, including the resolved gravity vectors.
            vx=vx + dt*dvx + dt*Gx;
            vy=vy + dt*dvy + dt*Gy;

            // Compute position based on average velocity.
            x=x+dt*(vx+vx1)/2;
            y=y+dt*(vy+vy1)/2;

            if (y>0 && keep==0 && vy>=0) {
                zero=x;
                keep=1;
            }

            if (y<0 && keep2==0 && vy<=0){
                farzero=x;
                keep2=1;
            }

            if ((12*y)>-(VitalSize/2) && min_pbr_keep==0){
                min_pbr_range=x;
                min_pbr_keep=1;
            }

            if ((12*y)<-(VitalSize/2) && min_pbr_keep==1 && max_pbr_keep==0){
                max_pbr_range=x;
                max_pbr_keep=1;
            }

            if (x>=300 && tinkeep==0){
                tin100=(int)((float)100*(float)y*(float)12);
                tinkeep=1;
            }


            if (Math.abs(vy)>Math.abs(3*vx)) { result=PBR_ERROR; break; }
            if (n>=__BCOMP_MAXRANGE__+1) { result=PBR_ERROR; break;}


            // The PBR will be maximum at the point where the vertex is 1/2 vital zone size.
            if (vy<0 && vertex_keep==0){
                y_vertex=y;
                x_vertex=x;
                vertex_keep=1;
            }


            if (keep==1 && keep2==1 && min_pbr_keep==1 && max_pbr_keep==1 && vertex_keep==1 && tinkeep==1) {
                break;
            }



        }

        if ((y_vertex*12)>(VitalSize/2)){
            if (Step>0) Step= -Step/2; // Vertex too high.  Go downwards.
        }

        else if ((y_vertex*12)<=(VitalSize/2)){ // Vertex too low.  Go upwards.
            if (Step<0) Step = -Step/2;
        }

        ZAngle+=Step;

        if (Math.abs(Step)<(0.01/60)) quit=1;
    }


    oresult[0]=(int)(zero/3); // Near Zero
    oresult[1]=(int)(farzero/3); // Far zero
    oresult[2]=(int)(min_pbr_range/3); // Minimum PBR
    oresult[3]=(int)(max_pbr_range/3); // Maximum PBR
    oresult[4]=(int)tin100; // Sight-in at 100 yds (in 100ths of an inch)

    return 0;
}


*/