package com.codecool;

import java.math.BigDecimal;
import java.util.Set;

public class WaterManagementCompany {
    private float waterRateThisMonth;
    private Set<WaterMeter> waterMeters;
    private Set<Client> clients;


    public Set<Client> getClientWithBiggestBill(){
        BigDecimal max = new BigDecimal(0);
        for (Client client: clients) {
            if ( max.compareTo(client.getBill()) == -1){
                max = client.getBill();
            }
        }
        return max;
    }
    public void setWaterRateThisMonth(float waterRateThisMonth) {
        this.waterRateThisMonth = waterRateThisMonth;
    }
}
