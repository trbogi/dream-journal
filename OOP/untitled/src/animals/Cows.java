package animals;

import animals.Animal;

public class Cows extends Animal implements Mammals {
    public Cows(int weight) {
        super(weight);
    }

    @Override
    public void interact() {
        System.out.println("Moo");
    }

    @Override
    public void givesBirth(int weightOfBaby) {
        this.setWeight(this.getWeight() - weightOfBaby);
    }
}
