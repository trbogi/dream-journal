package com.codecool.hanger;

import com.codecool.clothing.UpperClothing;

public class Hanger {
    UpperClothing upperClothing;

    public void put(UpperClothing upperClothing){
        this.upperClothing = upperClothing;
    }

    public UpperClothing removeUpper(){
        UpperClothing upper = this.upperClothing;
        this.upperClothing = null;
        return upper;
    }
    public boolean isEmpty(){
        return upperClothing == null;
    }
}
