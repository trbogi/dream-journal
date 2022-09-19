import Employee.Employee;
import Employee.Driver;
import Employee.Experience;
import Employee.Engineer;
import Employee.PitCrewMember;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Team {
    private List<Employee> employees = new ArrayList<>();
    private List<Car> cars = new ArrayList<>();
    private List<CarPart> carParts = new ArrayList<>();
    private BigDecimal profit;

    public Team() {
        create();
        this.profit = new BigDecimal(0);
    }

    private void create(){
        Driver driver1 = new Driver("Sebastian Vettel", 35, Experience.INTERMEDIATE);
        Driver driver2 = new Driver("Max Verstappen", 24, Experience.MEDIUM);
        Driver driver3 = new Driver("Yuki Tsunoda", 21, Experience.BEGINNER);
        Collections.addAll(employees, driver1, driver2, driver3);
        cars.add(new Car(driver1));
        cars.add(new Car(driver2));

        Engineer eng1 = new Engineer("Jack Smith", 32);
        Engineer eng2 = new Engineer("John Taylor", 45);

        PitCrewMember pit1 = new PitCrewMember("Géza", 27);
        PitCrewMember pit2 = new PitCrewMember("Laci", 28);
        PitCrewMember pit3 = new PitCrewMember("Tomi", 36);
        PitCrewMember pit4 = new PitCrewMember("Fülöp", 27);

        Collections.addAll(employees, eng1, eng2, pit1, pit2, pit3, pit4);
    }

    public BigDecimal getRaceCost(){
        BigDecimal cost = new BigDecimal(0);

        for (Employee employee:employees) {
            cost = cost.add(employee.getPaymentPerRace());
        }

        for (Car car:cars) {
            cost = cost.add(car.buyPart());
        }
        return cost;
    }

    public void doRace(Race race){
        profit = profit.add(race.getPrize());
        profit = profit.subtract(getRaceCost());
    }

    public BigDecimal getProfit() {
        return profit;
    }
}
