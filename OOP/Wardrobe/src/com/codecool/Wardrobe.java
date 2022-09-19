package com.codecool;

import com.codecool.hanger.Hanger;

import java.util.ArrayList;
import java.util.List;

public class Wardrobe {
    private final int limit;
    private List<Hanger> hangers = new ArrayList<>();


    public Wardrobe(int limit) {
        this.limit = limit;
    }

    public void put(Hanger hanger){
        hangers.add(hanger);
    }

    public boolean hasEmptyHanger(){
        for (Hanger hanger:hangers) {
            if (hanger.isEmpty()){
                return true;
            }
        }
        return false;
    }
}
