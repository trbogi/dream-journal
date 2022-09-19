import animals.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Animal> animals = new ArrayList<>();
        List<Geese> geese = new ArrayList<>();
        Animal cow1 = new Cows(100000);
        animals.add(cow1);
        Animal dog1 = new Dogs(210110, DogType.HUSKY);
        animals.add(dog1);
        Animal cat1 = new Cats(21313);
        animals.add(cat1);
        Animal goose1 = new Geese(2101);
        animals.add(goose1);
        geese.add((Geese) goose1);
        Animal goose2 = new Geese(2011);
        animals.add(goose2);
        geese.add((Geese) goose2);

        for (Animal animal:animals
             ) {
            animal.interact();
            System.out.println(animal.getId());
            System.out.println(animal.getWeight());
        }

        ((Geese) goose1).layEgg();
        for (int i = 0; i < 5 ; i++) {
            ((Geese) goose2).layEgg();
        }


        int max = geese.stream().map(Geese::getEggs).max(Integer::compare).get();
        System.out.println(max);;
    }




}
