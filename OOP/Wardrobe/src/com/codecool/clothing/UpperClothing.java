package com.codecool.clothing;

public class UpperClothing extends Clothing{
    private UpperClothingType upperClothingType;

    public UpperClothing(String brandName, UpperClothingType upperClothingType ) {
        super(brandName);
        this.upperClothingType = upperClothingType;
    }
}
