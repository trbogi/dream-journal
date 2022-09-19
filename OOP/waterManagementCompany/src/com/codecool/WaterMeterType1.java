package com.codecool;

public class WaterMeterType1 extends WaterMeter {
    protected WaterMeterType1(int id) {
        super(id);
    }
    private static final int CONSUMPTIONLIMIT = 25;

    public boolean reportLeak(){
        if ( CONSUMPTIONLIMIT < getConsumption()){
            return true;
        }
        return false;
    }



}
