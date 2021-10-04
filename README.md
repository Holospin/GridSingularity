# GridSingularity

Suite of 3 automated tests made using Selenium IDE, which do the following:

The first test logins in the user, then checks to see if the control pannel is active, which means the user is logged in, then logs the user out.

The second test which logs in the user, creates a project and names it according to the current time (including seconds) which helps making it different every time, then checks for the latest created project to have the same name and then logs the user out.

The third test logs the user in, checks to see if the latest project has the same name as the create project in the second test, then creates a simulation, checks for the Simulation Settings button, which means the Simulation was properly created, then logs the user out.
