package Employee;

import java.math.BigDecimal;

public enum Experience {
    BEGINNER(new BigDecimal(20000)),
    MEDIUM(new BigDecimal(40000)),
    INTERMEDIATE(new BigDecimal(100000));

    private BigDecimal paymentPerRace;
    Experience(BigDecimal paymentPerRace) {
        this.paymentPerRace = paymentPerRace;
    }

    public BigDecimal getPaymentPerRace(){
        return paymentPerRace;
    }
}
