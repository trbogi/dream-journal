import java.math.BigDecimal;

public class Race {
    private int result;
    private BigDecimal prize;

    public Race(int result) {
        this.result = result;
    }

    public BigDecimal getPrize(){
        if (result == 1){
            return new BigDecimal(10000000);
        }else if (result == 2){
            return new BigDecimal(1000000);
        }else {
            return new BigDecimal(0);
        }
    }
}
