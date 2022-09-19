package com.codecool.hanger;

import com.codecool.clothing.BottomClothing;
import com.codecool.clothing.Clothing;

import java.util.ArrayList;
import java.util.List;

public class ComplexHanger extends Hanger{
    private BottomClothing bottomClothing;

    public void putBottom(BottomClothing bottomClothing){
        this.bottomClothing= bottomClothing;
    }

    public BottomClothing removeBottom(){
        BottomClothing bottom = this.bottomClothing;
        this.bottomClothing = null;
        return bottom;
    }

    public List<Clothing> removeAll(){
        List<Clothing> clothes = new ArrayList<>();
        clothes.add(this.upperClothing);
        clothes.add(bottomClothing);
        this.upperClothing = null;
        bottomClothing = null;
        return clothes;
    }

}
