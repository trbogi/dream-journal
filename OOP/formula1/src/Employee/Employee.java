package Employee;

import java.math.BigDecimal;

public abstract class Employee {
    protected String name;
    protected int age;
    protected BigDecimal paymentPerRace;

    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public abstract BigDecimal getPaymentPerRace();

}
