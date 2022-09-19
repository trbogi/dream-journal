package com.codecool;

public abstract class WaterMeter {
    private int id;
    private int startingIndex;
    private int endIndex;

    protected WaterMeter(int id) {
        this.id = id;
    }


    public int getConsumption() {
        return endIndex- startingIndex;
    }
}
