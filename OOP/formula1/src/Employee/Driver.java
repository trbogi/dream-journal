package Employee;

import java.math.BigDecimal;

public class Driver extends Employee{
    private Experience experience;

    public Driver(String name, int age, Experience experience) {
        super(name, age);
        this.experience = experience;
        this.paymentPerRace = experience.getPaymentPerRace();
    }

    @Override
    public BigDecimal getPaymentPerRace() {
        return paymentPerRace;
    }
}
