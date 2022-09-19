package animals;

import animals.Animal;

public class Cats extends Animal implements Mammals {
    public Cats(int weight) {
        super(weight);
    }

    @Override
    public void interact() {
        System.out.println("Meow");
    }

    @Override
    public void givesBirth(int weightOfBaby) {
        this.weight = this.weight - weightOfBaby;
    }
}
