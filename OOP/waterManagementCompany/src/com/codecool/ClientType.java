package com.codecool;

public enum ClientType {
    BUSINESS(15),
    RESIDENTAL(0);

    ClientType(int discountRate) {
    }

    private int discountRate;

    public int getDiscountRate() {
        return discountRate;
    }
}
