import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Team redBull = new Team();
        List<Race> races = new ArrayList<>();

        for (int i = 0; i < 2; i++) {
            races.add(new Race(1));
        }

        for (int i = 0; i < 5; i++) {
            races.add(new Race(2));
        }

        for (int i = 0; i < 15; i++) {
            races.add(new Race(10));
        }

        for (Race race:races
             ) {
            redBull.doRace(race);
        }

        System.out.println(redBull.getProfit());
    }
}
