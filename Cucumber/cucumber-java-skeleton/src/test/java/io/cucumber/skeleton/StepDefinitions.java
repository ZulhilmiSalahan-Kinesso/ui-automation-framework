package io.cucumber.skeleton;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import static org.junit.Assert.*;

public class StepDefinitions {
    int total = 0;

    @Given("I have {int} cukes in my belly")
    public void I_have_cukes_in_my_belly(int cukes) throws Throwable {
        total = total + cukes;
    }

    @When("I wait {int} hour")
    public void iWaitHour(int sec) throws Throwable {
        total = total + sec;
    }

    @Then("my belly should growl to {int}")
    public void myBellyShouldGrowlTo(int arg0) {
        assertEquals(total, arg0);
    }
}
