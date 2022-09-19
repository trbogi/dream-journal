package animals;

public class Dogs extends Animal implements Mammals {
    private int holes;
    private DogType type;

    public int getHoles() {
        return holes;
    }

    public DogType getType() {
        return type;
    }

    public Dogs(int weight, DogType type) {
        super(weight);
        this.holes = 0;
        this.type = type;
    }

    @Override
    public void interact() {
        System.out.println("Woof");
    }

    public void dig(){
        if (holes <= 10){
            holes ++;
        }else{
            System.out.println("Dog is not allowed to dig more");
        }
    }

    @Override
    public void givesBirth(int weightOfBaby) {
        this.setWeight(this.getWeight() - weightOfBaby);
    }
}
