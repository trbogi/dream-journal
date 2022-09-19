package animals;

public abstract class Animal {
    private static int idCounter;
    protected int id;
    protected int weight;

    protected Animal(int weight) {
        idCounter ++;
        this.id = idCounter;
        this.weight = weight;
    }

    public abstract void interact();

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getId() {
        return id;
    }
}
