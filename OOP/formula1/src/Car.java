import Employee.Driver;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Car {
    private Driver driver;
    private List<CarPart> parts = new ArrayList<>();

    public Car(Driver driver) {
        this.driver = driver;
    }

    public BigDecimal buyPart(){
        parts.add(new CarPart());
        return CarPart.getCost();
    }

}
