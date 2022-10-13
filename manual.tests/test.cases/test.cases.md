## System Under Test: [Factorial calculator website](https://qainterview.pythonanywhere.com)

## Legend

### Status (S):

    - P: Pass
    - F: Fail
    - R: Retest
    - U: Untested

Expected Result : ER
</br>
Actual Result : AR

</br>

| Id   | Test Case Description                                              | Test Steps                                                                                                          | Test Data | ER                                                                                  | AR                                            | S   |
| :--- | :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :-------- | :---------------------------------------------------------------------------------- | :-------------------------------------------- | :-- |
| TC01 | Check factorial calculation with a valid data                      | 1. Go to https://qainterview.pythonanywhere.com 2. Click input box and enter number 3. 3. Click calculate button.   | 3         | 6                                                                                   | 6                                             | P   |
| TC02 | Check factorial calculation with a negative number                 | 1. Go to https://qainterview.pythonanywhere.com 2. Click input box and enter number -3. 3. Click calculate button.  | -3        | User should get warning like "please enter natural number"                          | UI does not show anything. It is not expected | F   |
| TC03 | Check factorial calculation with a exact number with decimal point | 1. Go to https://qainterview.pythonanywhere.com 2. Click input box and enter number 2.0. 3. Click calculate button. | 2.0       | User should get warning like "please enter natural number"                          | UI does not show anything. It is not expected | F   |
| TC04 | Check terms link directs to correct URL                            | 1. Go to https://qainterview.pythonanywhere.com 2. Click **Terms and Condition** link. 3. Look at url and page      | N/A       | Link should directs to "/terms" endpoint and "Terms and Conditions" page is visible | Links directs wrong URL. Not expected         | F   |
| TC05 | Check privacy link directs to correct URL                          | 1. Go to https://qainterview.pythonanywhere.com 2. Click **Privacy** link. 3. Look at url and page                  | N/A       | Link should directs to "/privacy" endpoint and "Privacy" page is visible            | Links directs wrong URL. Not expected         | F   |
