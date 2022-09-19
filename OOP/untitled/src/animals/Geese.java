package animals;

import animals.Animal;

public class Geese extends Animal {
    private int eggs;

    public Geese(int weight) {
        super(weight);
        this.eggs = 0;
    }

    @Override
    public void interact() {
        System.out.println("Honk");
    }

    public void layEgg(){
        eggs++;
    }

    public int getEggs() {
        return eggs;
    }
}
