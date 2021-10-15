# Questions

### 1. How long did you spend on the coding test? What would you add to your solution if you had more time? 
### If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

### `Ans: I spent a day for coding. I'll be adding a feature to browse only certain stocks for the time period I choose. `
### `And will allow you to choose from the lowest to the highest price and can be sorted by the name of the stock. `

### 2.What was the most useful feature that was added to the latest version of your chosen language? 
### Please include a snippet of code that shows how you've used it.
### `Ans: Useful features in my code I think it's the system being able to choose which date range to display. `
``` bash
newArr.filter(r => moment(r.nav_date, 'D/MM/YYYY').isBetween(moment(startDate), moment(endDate), null, '[]'));
```
### 3. How would you track down a performance issue in production? Have you ever had to do this?
### `Ans:I don't have any direct experience with system testing. Because usually the testers are the ones who test the system. But I think when we finished the code It must be placed on the server test. and use the test website first This may be monitored via Kibana (ELK Stack), and may also be using a code scanning tool such as sonarqube and fortify. `

### 4.How would you improve the FINNOMENA APIs that you just used?
### `Ans: I think I can give users the ability to choose the time period they want to view their data, eg 1 year, 1 month, 1 week, 1 day, and I think I can improve this API if I receive clear business requirements and I was able to ask my questions.`