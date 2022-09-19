package com.codecool.clothing;

public abstract class Clothing {
    private int id;
    private static int idCounter = 0;
    private final String brandName;

    public Clothing(String brandName) {
        idCounter++;
        this.id = idCounter;
        this.brandName = brandName;
    }



}
