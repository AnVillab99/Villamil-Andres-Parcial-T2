package edu.eci.model;

public class City{
    String name;
    float lat;
    float log;
    float temp;
    float hum;
    


    public City() {
    }

    public City(String n, float l, float lo, float t, float h) {
        name=n;
        lat=l;
        log=lo;
        temp=t;
        hum =h;

    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the lat
     */
    public float getLat() {
        return lat;
    }

    /**
     * @param lat the lat to set
     */
    public void setLat(float lat) {
        this.lat = lat;
    }

    /**
     * @return the log
     */
    public float getLog() {
        return log;
    }

    /**
     * @param log the log to set
     */
    public void setLog(float log) {
        this.log = log;
    }

    /**
     * @return the temp
     */
    public float getTemp() {
        return temp;
    }

    /**
     * @param temp the temp to set
     */
    public void setTemp(float temp) {
        this.temp = temp;
    }

    /**
     * @return the hum
     */
    public float getHum() {
        return hum;
    }

    /**
     * @param hum the hum to set
     */
    public void setHum(float hum) {
        this.hum = hum;
    }




}