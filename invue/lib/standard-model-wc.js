

function StandardModel(maxRange,dragFunction) {

    var GRAVITY = -32.194;
    var PSTD    = 29.53; // in-hg

    // todo do proper changing of functions
       
    /* Specialty angular conversion functions */
    function MOAtoDeg(moa) { return moa / 60.0;                 };    
    function DegtoMOA(deg) { return deg * 60.0;                 };
    function DegtoRad(deg) { return deg * Math.PI / 180.0;      };
    function MOAtoRad(moa) { return moa/60.0 * Math.PI/180.0;   };
    function RadtoDeg(rad) { return rad * 180.0 / Math.PI;      };
    function RadtoMOA(rad) { return rad * 60.0 * 180.0/Math.PI; };
    function RadtoMIL(rad) { return rad * 1000.0;               };

    /* Environmental value conversion */
    function hPa_to_inHg(pressure)       { return pressure * 0.0295299802  }
    function celsius_to_fahrenheit(temp) { return temp * 9/5 + 32;         }
    function meters_to_feet(alt)         { return 3.280839895 * alt;       }


    function DF(model) {
        var _functions  = {
            "G1" : [ 
                { vp : 4230, A : 1.477404177730177e-04, M : 1.9565 }, // for speeds v above vp, drag is Av^M
                { vp : 4230, A : 1.477404177730177e-04, M : 1.9565 }, 
                { vp : 3680, A : 1.920339268755614e-04, M : 1.925  }, 
                { vp : 3450, A : 2.894751026819746e-04, M : 1.875  }, 
                { vp : 3295, A : 4.349905111115636e-04, M : 1.825  }, 
                { vp : 3130, A : 6.520421871892662e-04, M : 1.775  }, 
                { vp : 2960, A : 9.748073694078696e-04, M : 1.725  }, 
                { vp : 2830, A : 1.453721560187286e-03, M : 1.675  }, 
                { vp : 2680, A : 2.162887202930376e-03, M : 1.625  }, 
                { vp : 2460, A : 3.209559783129881e-03, M : 1.575  }, 
                { vp : 2225, A : 3.904368218691249e-03, M : 1.55   }, 
                { vp : 2015, A : 3.222942271262336e-03, M : 1.575  }, 
                { vp : 1890, A : 2.203329542297809e-03, M : 1.625  }, 
                { vp : 1810, A : 1.511001028891904e-03, M : 1.675  }, 
                { vp : 1730, A : 8.609957592468259e-04, M : 1.75   }, 
                { vp : 1595, A : 4.086146797305117e-04, M : 1.85   }, 
                { vp : 1520, A : 1.954473210037398e-04, M : 1.95   }, 
                { vp : 1420, A : 5.431896266462351e-05, M : 2.125  }, 
                { vp : 1360, A : 8.847742581674416e-06, M : 2.375  }, 
                { vp : 1315, A : 1.456922328720298e-06, M : 2.625  }, 
                { vp : 1280, A : 2.419485191895565e-07, M : 2.875  }, 
                { vp : 1220, A : 1.657956321067612e-08, M : 3.25   }, 
                { vp : 1185, A : 4.745469537157371e-10, M : 3.75   }, 
                { vp : 1150, A : 1.379746590025088e-11, M : 4.25   }, 
                { vp : 1100, A : 4.070157961147882e-13, M : 4.75   }, 
                { vp : 1060, A : 2.938236954847331e-14, M : 5.125  }, 
                { vp : 1025, A : 1.228597370774746e-14, M : 5.25   }, 
                { vp :  980, A : 2.916938264100495e-14, M : 5.125  }, 
                { vp :  945, A : 3.855099424807451e-13, M : 4.75   }, 
                { vp :  905, A : 1.185097045689854e-11, M : 4.25   }, 
                { vp :  860, A : 3.566129470974951e-10, M : 3.75   }, 
                { vp :  810, A : 1.045513263966272e-08, M : 3.25   }, 
                { vp :  780, A : 1.291159200846216e-07, M : 2.875  }, 
                { vp :  750, A : 6.824429329105383e-07, M : 2.625  }, 
                { vp :  700, A : 3.569169672385163e-06, M : 2.375  }, 
                { vp :  640, A : 1.839015095899579e-05, M : 2.125  }, 
                { vp :  600, A : 5.71117468873424e-05 , M : 1.950  }, 
                { vp :  550, A : 9.226557091973427e-05, M : 1.875  }, 
                { vp :  250, A : 9.337991957131389e-05, M : 1.875  }, 
                { vp :  100, A : 7.225247327590413e-05, M : 1.925  }, 
                { vp :   65, A : 5.792684957074546e-05, M : 1.975  }, 
                { vp :    0, A : 5.206214107320588e-05, M : 2.000  }     
            ],
            "G2" : [
                { vp : 1674, A : .0079470052136733   ,  M : 1.36999902851493 },
                { vp : 1172, A : 1.00419763721974e-03,  M : 1.65392237010294 },
                { vp : 1060, A : 7.15571228255369e-23,  M : 7.91913562392361 },
                { vp :  949, A : 1.39589807205091e-10,  M : 3.81439537623717 },
                { vp :  670, A : 2.34364342818625e-04,  M : 1.71869536324748 },
                { vp :  335, A : 1.77962438921838e-04,  M : 1.76877550388679 },
                { vp :    0, A : 5.18033561289704e-05,  M : 1.98160270524632 }
            ],
            "G5" : [
                { vp : 1730, A : 7.24854775171929e-03,  M : 1.41538574492812 },
                { vp : 1228, A : 3.50563361516117e-05,  M : 2.13077307854948 },
                { vp : 1116, A : 1.84029481181151e-13,  M : 4.81927320350395 },
                { vp : 1004, A : 1.34713064017409e-22,  M : 7.8100555281422  },
                { vp :  837, A : 1.03965974081168e-07,  M : 2.84204791809926 },
                { vp :  335, A : 1.09301593869823e-04,  M : 1.81096361579504 },
                { vp :    0, A : 3.51963178524273e-05,  M : 2.00477856801111 }
            ],
            "G6" : [            
                { vp : 3236, A : 0.0455384883480781   , M : 1.15997674041274 },
                { vp : 2065, A : 7.167261849653769e-02, M : 1.10704436538885 },
                { vp : 1311, A : 1.66676386084348e-03 , M : 1.60085100195952 },
                { vp : 1144, A : 1.01482730119215e-07 , M : 2.9569674731838  },
                { vp : 1004, A : 4.31542773103552e-18 , M : 6.34106317069757 },
                { vp :  670, A : 2.04835650496866e-05 , M : 2.11688446325998 },
                { vp :    0, A : 7.50912466084823e-05 , M : 1.92031057847052 }
            ],
            "G7" : [
                { vp : 4200, A : 1.29081656775919e-09, M : 3.24121295355962 },
                { vp : 3000, A : 0.0171422231434847  , M : 1.27907168025204 },
                { vp : 1470, A : 2.33355948302505e-03, M : 1.52693913274526 },
                { vp : 1260, A : 7.97592111627665e-04, M : 1.67688974440324 },
                { vp : 1110, A : 5.49174006025278e-20, M : 6.88983788792443 },
                { vp :  960, A : 3.02865108244904e-17, M : 5.99074203776707 },
                { vp :  670, A : 7.52285155782535e-06, M : 2.1738019851075  },
                { vp :  540, A : 1.31766281225189e-05, M : 2.08774690257991 },
                { vp :    0, A : 1.34504843776525e-05, M : 2.08702306738884 }        
            ]
        };
        // todo use proper model index.
        var dragFunction = _functions[model];
        var idx = 0;
        var current = dragFunction[idx];    
        // this is called with diminishing speed - i.e. v never goes up.
        return function(v) {            
            if(v <= current.vp) {
                while(v <= dragFunction[idx].vp)
                    idx++;
                current = dragFunction[idx];
            }
            return current.A * Math.pow(v,current.M);
        }
    }

  
    // Adjust a drag coefficient to environmentals.    
    function AtmCorrect(DragCoefficient, Altitude, Barometer, Temperature, RelativeHumidity) {
    	
        function calcFR(Temperature,  Pressure, RelativeHumidity)	{
    		var VPw =  Temperature * ( Temperature * ( Temperature * 4e-6 - 4e-4 ) + 0.0234 ) - 0.2517;
    		var FRH = 0.995*(Pressure/(Pressure - 0.3783 * RelativeHumidity * VPw));
    		return FRH;
    	}

    	function calcFP(Pressure){
    		var Pstd = 29.53; // in-hg
    		return (Pressure - Pstd)/(Pstd);
    	}


    	function calcFT(Temperature, Altitude) {
    		var Tstd = -0.0036 * Altitude + 59;
    		return (Temperature - Tstd)/(459.6 + Tstd);
    	}

    	function calcFA(Altitude) {
    		var a = -4e-15;
    		var b = 4e-10;
    		var c = -3e-5;
    		var d = 1;
    		return 1/(Altitude * (Altitude * ( Altitude * a + b) + c) + d);
    	}


        var FA = calcFA(Altitude);
        var FT = calcFT(Temperature, Altitude);
        var FR = calcFR(Temperature, Barometer, RelativeHumidity);
        var FP = calcFP(Barometer);

        // Calculate the atmospheric correction factor
        var CD = (FA*(1 + FT - FP)*FR);

        return DragCoefficient * CD;
    }


    function Windage(WindSpeed, Vi, xx, t)   { return ((WindSpeed * 17.60) *(t - xx / Vi));        }
    function HeadWind(WindSpeed, WindAngle)  { return (Math.cos(DegtoRad(WindAngle)) * WindSpeed); }
    function CrossWind(WindSpeed, WindAngle) { return (Math.sin(DegtoRad(WindAngle)) * WindSpeed); }
    function ZeroAngle(DragCoefficient, Vi, SightHeight, ZeroRange, yIntercept) {
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

        // just use a riflemans rule for zerorange less than 600 yards
        if(ZeroRange < 600)
        	return RadtoDeg(Math.atan((yIntercept - DropAtZero(DragCoefficient, Vi, SightHeight, ZeroRange))/(ZeroRange*36)));

        var angle = DegtoRad(16); // Math.atan((-DropAtZero(DragFunction, DragCoefficient, Vi, SightHeight, ZeroRange))/(ZeroRange*36));
        // var minchange = MOAtoRad(0.01);

        var drag = DF(dragFunction);

        var da    = angle/2;
        var found = false;

        var mindiff = 0.0001/12;
        var minchange = MOAtoRad(0.01);
        while(!found) {
            x = 0;
            y = -SightHeight/12;

            vy = Vi * Math.sin(angle);
            vx = Vi * Math.cos(angle);
            Gx = GRAVITY * Math.sin(angle);
            Gy = GRAVITY * Math.cos(angle);

            // track x (feet) out to zeroRange (yards) or until we cross sightline...,
            for (t=0; x < (ZeroRange*3); t = t+dt) {
                iterations++;
                vy1 = vy;
                vx1 = vx;
                v = Math.pow((Math.pow(vx,2)+Math.pow(vy,2)),0.5);
                dt = 0.25/v;

                // dv = retard(DragFunction, DragCoefficient, v);
                dv = drag(v) / DragCoefficient;
                dvy = -dv * vy/v;
                dvx = -dv * vx/v;

                vx = vx + dt * (dvx + Gx);
                vy = vy + dt * (dvy + Gy);

                x = x + dt * (vx + vx1)/2;
                y = y + dt * (vy + vy1)/2;

                if(vy < 0 && y < yIntercept)
                    break;
            }

            // now if impact is higher than sight height + yintercept then we need to reduce the angle
            if(y > yIntercept)
                angle -= da;
            // if it is lower, then increase.
            else
                angle += da;

            da *= .5;

            // If our accuracy is sufficient, we can stop approximating.

            if(Math.abs(y-yIntercept) < mindiff)
                found = true;

            if (da < minchange)
                found = true;

        }

       // alert(" Iterations: " + iterations + "\n");
        return RadtoDeg(angle); // Convert to degrees for return value.
    }
    
    function FindZero(DragCoefficient, Weight, Vi, SightHeight, ShootingAngle, ZAngle, WindSpeed, WindAngle ) {
        var dt = 0.25/Vi;

        var headwind  = HeadWind(WindSpeed, WindAngle);
        var crosswind = CrossWind(WindSpeed, WindAngle);

        var Gy = GRAVITY * Math.cos(DegtoRad((ShootingAngle + ZAngle)));
        var Gx = GRAVITY * Math.sin(DegtoRad((ShootingAngle + ZAngle)));

        var vx = Vi * Math.cos(DegtoRad(ShootingAngle + ZAngle));
        var vy = Vi * Math.sin(DegtoRad(ShootingAngle + ZAngle));

        var x = 0;
        var y = -SightHeight/12;
        var drag = DF(dragFunction);
        for(var t=0;;t = t + dt) {
            var vx1 = vx;
            var vy1 = vy;

            var v = Math.pow( Math.pow(vx, 2) + Math.pow(vy, 2), 0.5);
            dt = 0.25/v;

            var dv = drag(v + headwind) / DragCoefficient;
            var dvx = -(vx/v)*dv + Gx;
            var dvy = -(vy/v)*dv + Gy;

            vx += dt * dvx;
            vy += dt * dvy;

            meters = x / 3.280839895;            
            
            diffx = dt*(vx + vx1)/2;
            diffy = dt*(vy + vy1)/2;
            
            // detect zero
            if((y>0) && ((y+diffy)<0))
                return meters;

            x += diffx;
            y += diffy;

            if (Math.abs(vy) > Math.abs(3 * vx))
                break;

            if (meters > maxRange )
                break;
        }

        return 0.0;
    }

    // note that the values are in imperial
    function SolveAll(DragCoefficient, Weight, Vi, SightHeight, ShootingAngle, ZAngle, WindSpeed, WindAngle ) {

        var result = new Object();
        result.solutions = new Array();
        result.maxpath = -10000000;
        result.maxpathrange = 0;
        result.zeroat = 0;

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
        var drag = DF(dragFunction);

        for(var t=0;;t = t + dt) {
            var vx1 = vx;
            var vy1 = vy;

            var v = Math.pow( Math.pow(vx, 2) + Math.pow(vy, 2), 0.5);
            dt = 0.25/v;

            // var dv = retard(DragFunction, DragCoefficient, v + headwind);
            var dv = drag(v+headwind) / DragCoefficient;
            var dvx = -(vx/v)*dv + Gx;
            var dvy = -(vy/v)*dv + Gy;

            vx += dt * dvx;
            vy += dt * dvy;

            var meters = x / 3.280839895;
            var path = y * 12;
            if(meters >= n) {
                var solution = new Object();
                solution.range    = x/3;                        // Range in yds ( 3 ft pr yard)
                solution.path     = path;                         // Path in inches
                solution.time     = t + dt;                         // Time in s
                solution.windage  = Windage(crosswind,Vi,x,t+dt);   // Windage in inches
                solution.velocity = v;                              // Velocity (combined)
                solution.energy   = Math.pow(v, 2) /  450380.0 * Weight;
                solution.vel_x = vx;                             // Velocity (x)
                solution.vel_y = vy;                             // Velocity (y)
                solution.x = n;
                solution.y = path * 0.0254;
                solution.t = solution.time;
                solution.z = solution.windage;
                solution.v = vx; // horizontal velocity
                
                result.solutions[n] = solution;
                n++;
            }

            if(path > result.maxpath) {
                result.maxpath = path;
                result.maxpathrange = x/3; // in yards
            }
            else if(path > -result.maxpath) {
                result.outerpath = path;
                result.outerpathrange = x/3;
            }

    	    diffx = dt*(vx + vx1)/2;
    	    diffy = dt*(vy + vy1)/2;
            
            // detect zero
            if((y>0) && ((y+diffy)<0))
                result.zeroat = x / 3.280839895; // + y * (diffx/diffy);

            x += diffx;
            y += diffy;

            if (Math.abs(vy) > Math.abs(3 * vx))
                break;

            if (n > maxRange )
                break;
        }

        return result;
    }


    // this is only used to base a riflemans rule estimate of the zero angle.
    // note that this is inaccurate for very slow bullets or extreme ranges, but
    // good enough for hunting distances by normal humans using normal ammunition.
    function DropAtZero(DragCoefficient, Vi, SightHeight, ZeroRange) {
        var dt = 0.25/Vi;

        var vx = Vi;
        var vy = 0;

        var x = 0;
        var y = -SightHeight/12;
        var maxrange = ZeroRange*3; // max range in feet.
        var drag = DF(dragFunction);
        for(var t=0;;t = t + dt) {
            var vx1 = vx;
            var vy1 = vy;

            var v = Math.pow( Math.pow(vx, 2) + Math.pow(vy, 2), 0.5);
            dt = 0.25/v;

            // var dv = retard(DragFunction, DragCoefficient, v);
            var dv = drag(v) / DragCoefficient;

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


    function PointBlankSolution(DragCoefficient, Vi, SightHeight, VitalSize)  {
    	var solution = new Array();
        var dt;

        var vx = Vi;
        var vy = 0;

        var x = 0;
        var y = -SightHeight/12; // feet.

        solution[0] = { x : x, y : y, slope : vy/vx, high : 0 };
        var last_high = 0; // index of the last high point.
        var drag = DF(dragFunction);
        for(var t=0,n=1;;t += dt, n++) {
            var vx1 = vx;
            var vy1 = vy;

            var v = Math.pow( Math.pow(vx, 2) + Math.pow(vy, 2), 0.5);
            dt = 0.1/v;

            // var dv = retard(DragFunction, DragCoefficient, v);
            var dv = drag(v) / DragCoefficient;
            var dvx = -(vx/v)*dv;
            var dvy = -(vy/v)*dv + GRAVITY;

            vx += dt*dvx;
            vy += dt*dvy;

            x += dt*(vx + vx1)/2;
            y += dt*(vy + vy1)/2;

            // we've calculated a new point and the velocity

            // the slope from zero to here is
            var a = y/x;

            // search from the last index for a point a velocity vector with the same slope.
            while(last_high < n && solution[last_high].slope > a)
           		last_high++;
            solution[n] = { x : x, y : y, slope : vy/vx, high : 0 }

            if(last_high < n) {
            	// the high point is half the vital zone size away.
            	zonesize = 2 * Math.abs(solution[last_high].y - a * solution[last_high].x)*12;
        		if(zonesize >= VitalSize) {
        			alert("found stuff:  " + (solution[last_high].x/3 / 0.9144).toFixed(1) + "\n" +
        			"slope there is " + (solution[last_high].slope) + "\n" +
        			"slope here is " + a + "\n" +
        			"zonesize is " + (zonesize * 25.4).toFixed(0) + "mm");
        			return x/3;
        		}
            }
        }

        return 0;
    }


    function pbr(DragCoefficient, Vi, SightHeight, VitalSize) {
        var t=0;
        var dt=0.25/Vi;
        var v=0;
        var vx=0, vx1=0, vy=0, vy1=0;
        var dv=0, dvx=0, dvy=0;
        var x=0, y=0;
        var ZAngle=0;
        var Step=10;

        var quit = false;

        var zero    = -1;
        var farzero = 0;

        var vertex_keep = false;
        var y_vertex = 0;
        var x_vertex = 0;

        var min_pbr_range = 0;
        var min_pbr_keep = false;

        var max_pbr_range = 0;
        var max_pbr_keep = false;

        var tin100 = 0;

        var Gy;
        var Gx;

        while (!quit) {
            var keep    = false;
            var keep2   = false;
            var tinkeep = false;
            var n = 0;

            Gy = GRAVITY * Math.cos(DegtoRad((ZAngle)));
            Gx = GRAVITY * Math.sin(DegtoRad((ZAngle)));

            vx = Vi * Math.cos(DegtoRad(ZAngle));
            vy = Vi * Math.sin(DegtoRad(ZAngle));

            x = 0;
            y = -SightHeight/12;

            min_pbr_keep = false;
            max_pbr_keep = false;
            vertex_keep = false;

            tin100 = 0;
            var drag = DF(dragFunction);
            for (t=0;;t=t+dt) {
                vx1 = vx;
                vy1 = vy;
                v = Math.sqrt(vx*vx + vy*vy);
                dt = 0.25/v;

                // dv = retard(DragFunction, DragCoefficient, v);
                dv = drag(v)/DragCoefficient;
                dvx = -(vx/v) * dv;
                dvy = -(vy/v) * dv;

                // Compute velocity, including the resolved gravity vectors.
                vx = vx + dt*(dvx + Gx);
                vy = vy + dt*(dvy + Gy);

                // Compute position based on average velocity.
                x = x + dt*(vx + vx1)/2;
                y = y + dt*(vy + vy1)/2;

                if(y > 0 && !keep && vy >= 0) {
                    zero = x;
                    keep = true;
                }


                if(y<0 && !keep2 && vy <= 0) {
                    farzero = x;
                    keep2 = true;
                }

                if( (12*y) > -(VitalSize/2) && !min_pbr_keep) {
                    min_pbr_range = x;
                    min_pbr_keep = true;
                }

                if((12*y) < -(VitalSize/2) && min_pbr_keep && !max_pbr_keep) {
                    max_pbr_range = x;
                    max_pbr_keep = true;
                }

                if( x >= 300 && !tinkeep)  {
                    tin100 = (100*y*12);
                    tinkeep = true;
                }


                if(Math.abs(vy) > Math.abs(3*vx))
                	break;


                // The PBR will be maximum at the point where the vertex is 1/2 vital zone size.
                // this is recording the highest point....

                if(vy<0 && !vertex_keep)  {
                    y_vertex = y;
                    x_vertex = x;
                    vertex_keep = true;
                }


                if (keep && keep2 && min_pbr_keep && max_pbr_keep && vertex_keep && tinkeep) {
                    break;
                }
            }

            if((y_vertex*12) > (VitalSize/2)) {
                if (Step > 0)
                    Step= -Step/2; // Vertex too high.  Go downwards.
            }
            else if( (y_vertex*12)<=(VitalSize/2)) {
               // Vertex too low.  Go upwards.
                if (Step < 0)
                	Step = -Step/2;
            }

            ZAngle += Step;

            if(Math.abs(Step) <(0.01/60))
            	quit = true;
        }

    	return { 
            near_zero : zero/3, 
            far_zero  : farzero/3, 
            min_range : min_pbr_range/3, 
            max_range : max_pbr_range/3,        
            vitals    : VitalSize, 
            tin100    : tin100 
        };
    }


    // Public methods and constants.

    this.MOAtoDeg = MOAtoDeg;
    this.DegtoMOA = DegtoMOA;
    this.DegtoRad = DegtoRad;
    this.MOAtoRad = MOAtoRad;
    this.RadtoDeg = RadtoDeg;
    this.RadtoMOA = RadtoMOA;
    this.RadtoMIL = RadtoMIL;

    this.hPa_to_inHg = hPa_to_inHg;
    this.celsius_to_fahrenheit = celsius_to_fahrenheit;
    
    this.ZeroAngle          = ZeroAngle;
    this.SolveAll           = SolveAll;
    this.AtmCorrect         = AtmCorrect;
    this.PointBlankSolution = PointBlankSolution;
    this.FindZero           = FindZero;
    
   
}

