package com.codecool;

import java.util.Set;

public class ConsumptionPlace {
    private String address;
    private Set<WaterMeter> waterMeters;

    public ConsumptionPlace(String address, Set<WaterMeter> waterMeters) {
        this.address = address;
        this.waterMeters = waterMeters;
    }

    public void addWaterMeters(WaterMeter waterMeter) {
        waterMeters.add(waterMeter);
    }

    public int getConsumption() {
        int sum = 0;
        for (WaterMeter waterMeter: waterMeters) {
            sum += waterMeter.getConsumption();
        }
        return sum;
    }
}
