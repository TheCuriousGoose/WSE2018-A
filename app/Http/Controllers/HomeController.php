<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function index()
    {
        $easingData = json_decode('{
            "description":"In the provided equations, t has value range 0-1. Source: https://gist.github.com/gre/1650294",
            "easingFunctions":{
               "linear":{
                  "text":"linear",
                  "description":"no easing, no acceleration",
                  "formula":"t",
                  "equation":"t"
               },
               "easeInCubic":{
                  "text":"easeInCubic",
                  "description":"accelerating from zero velocity ",
                  "formula":"t^3",
                  "equation":"t*t*t"
               },
               "easeOutCubic":{
                  "text":"easeOutCubic",
                  "description":"decelerating to zero velocity ",
                  "formula":"(--t)t^2+1",
                  "equation":"(--t)*t*t+1"
               },
               "easeInOutCubic":{
                  "text":"easeInOutCubic",
                  "description":"acceleration until halfway, then deceleration ",
                  "formula":"t<.5 ? 4t^3 : (t-1)(2t-2)(2t-2)+1",
                  "equation":"t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1"
               },
               "easeInQuart":{
                  "text":"easeInQuart",
                  "description":"accelerating from zero velocity ",
                  "formula":"t^4",
                  "equation":"t*t*t*t"
               },
               "easeOutQuart":{
                  "text":"easeOutQuart",
                  "description":"decelerating to zero velocity ",
                  "formula":"1-(--t)t^3",
                  "equation":"1-(--t)*t*t*t"
               }
            }
         }');

        return view('home', [
            'easingData' => $easingData
        ]);
    }
}
