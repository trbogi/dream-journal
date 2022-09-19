package com.codecool;

import com.codecool.clothing.*;
import com.codecool.hanger.ComplexHanger;
import com.codecool.hanger.Hanger;

public class Main {

    public static void main(String[] args) {
        Wardrobe wardrobe = new Wardrobe(4);
        Hanger hanger = new Hanger();
        ComplexHanger complexHanger = new ComplexHanger();

        BottomClothing skirt = new BottomClothing("h&m", BottomClothingType.SKIRT);
        UpperClothing shirt = new UpperClothing("Levi's", UpperClothingType.SHIRT);
        UpperClothing blouse = new UpperClothing("GAP", UpperClothingType.BLOUSE);
        hanger.put(blouse);
        complexHanger.put(shirt);
        complexHanger.putBottom(skirt);
        wardrobe.put(hanger);
        wardrobe.put(complexHanger);
        hanger.removeUpper();

        System.out.println(wardrobe.hasEmptyHanger());
    }
}
