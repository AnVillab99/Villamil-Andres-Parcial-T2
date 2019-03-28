package edu.eci.services;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.eci.conection.conection;
import edu.eci.model.City;

@Service
public class weatherServices {
    @Autowired
    conection conn;

    public  String getCityWeather(String name) {
        
        conn.setCity(name);
        System.out.println("fnsngnolgrkgrkwmgormegoremgoererimoer ciudaddddddddddddddddddddddddddddddddddd");
        try {
            return conn.connection();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;


    } 


    
}