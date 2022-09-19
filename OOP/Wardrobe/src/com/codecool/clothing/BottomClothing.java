package com.codecool.clothing;

public class BottomClothing extends Clothing{
    private BottomClothingType bottomClothingType;

    public BottomClothing(String brandName, BottomClothingType bottomClothingType) {
        super(brandName);
        this.bottomClothingType = bottomClothingType;
    }
}
