package epitech.dashboard;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class Person {
    @JsonProperty("ID")
    private long ID;
    @JsonProperty("FirstName")
    private String FirstName;
    @JsonProperty("LastName")
    private String LastName;
    @JsonProperty("PayRate")
    private double PayRate;
    @JsonProperty("StartDate")
    private Date StartDate;
    @JsonProperty("EndDate")
    private Date EndDate;

}
