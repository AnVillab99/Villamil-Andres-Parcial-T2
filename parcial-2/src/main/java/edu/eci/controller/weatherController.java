package edu.eci.controller;


import edu.eci.services.weatherServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.UUID;

@RestController
@RequestMapping("/")
public class weatherController {

    @Autowired
    weatherServices wService;


    /*@RequestMapping(method = RequestMethod.GET)
    public String root() {
        return "/src/main/resources/static/index.html";
    } */
   


    @ResponseBody
    @RequestMapping(value="city/{name}",method = RequestMethod.POST)
    public ResponseEntity<?> getWeather(@PathVariable String name){
        System.out.println("wssssssssssssssssssssssssssssssssssss");
        System.out.println("name");
        try{
            return new ResponseEntity<>(wService.getCityWeather(name), HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }
    
}