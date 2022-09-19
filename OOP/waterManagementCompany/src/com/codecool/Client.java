package com.codecool;

import java.math.BigDecimal;
import java.util.Set;

public class Client {
    private String name;
    private Set<ConsumptionPlace> consumptionPLaces;
    private String billingAddress;
    private ClientType type;
    private BigDecimal waterRate = new BigDecimal(0);

    public Client(String name, Set<ConsumptionPlace> consumptionPLaces, String billingAddress, ClientType type) {
        this.name = name;
        this.consumptionPLaces = consumptionPLaces;
        this.billingAddress = billingAddress;
        this.type = type;
    }

    public void setWaterRate(BigDecimal waterRate) {
        this.waterRate = waterRate;
    }

    public BigDecimal getBill(){
        BigDecimal bill = new BigDecimal(0);
        bill = waterRate.multiply(new BigDecimal(consumptionThisMonth()));
        bill = bill.multiply(new BigDecimal(type.getDiscountRate()/100));
        return bill;
    }

    public int consumptionThisMonth(){
        int sum = 0;
        for (ConsumptionPlace consumptionPlace :
        consumptionPLaces) {
           sum +=  consumptionPlace.getConsumption();
        }
        return sum;
    }
}
