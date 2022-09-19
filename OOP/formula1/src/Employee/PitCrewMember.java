package Employee;

import java.math.BigDecimal;

public class PitCrewMember extends Employee{
    private BigDecimal paymentPerDay;

    public PitCrewMember(String name, int age) {
        super(name, age);
        this.paymentPerDay = new BigDecimal(10000);
        this.paymentPerRace = paymentPerDay.multiply(new BigDecimal(3));
    }

    @Override
    public BigDecimal getPaymentPerRace() {
        return paymentPerRace;
    }
}
