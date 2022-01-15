
# Group Name: Storm Chasers
## Project: Extreme Weather and Climate Disasters Analysis
## Group Members: Nepanji Davis, Azmir Suljic, and Alex Mull-Dreyer
### Introduction: 
Extreme weather events are expected to increase as our planet continues to warm. As a result of a 
warmer world, not only has the number of extreme events increased, so has the strength of the 
events. In this project, we will view the economic and safety impact of the extreme weather and 
climate disasters that have occurred on the past few decades.
The purpose of this project was to analyze the impact these weather events have had on our country 
of the past few decades. To accomplish this analysis, NOAA Billion Dollar Weather Disaster data was 
utilized to assemble the dataset to create a representative model of weather across the US. 
Relationships analyzed included: Cost of Disaster vs. US State, Number of Deaths per US State, 
Number of Events per US State, and Time Period Comparisons (Past 4 Decades).
### Data Engineering
<img width="592" alt="Screen Shot 2021-10-28 at 6 29 10 PM" src="https://github.com/azmir0218/Severe_Weather/blob/main/Resources/data1.png">
To begin this project, research was conducted to determine the best way to retrieve data for all major 
weather disaster events in the US for the past 5 years. The weather events include: 'Drought', 
'Flooding', 'Freeze', 'Severe Storm', 'Tropical Cyclone', 'Wildfire', and 'Winter Storm'. Initially, we looked
to weather APIs to scrape the information. While the initial scraping methods were successful, we 
realized that we that it was better to access weather events recorded as regional entities not individual
state or city occurrences. 
We were able to retrieve a complete dataset for all weather disaster events for the past 4 decades 
(1980 – 2021) including their economic and community impact. 
Above is an image of the initial cleaned dataset of all weather disaster events for the past 5 years. 
Based on the size and details included in this dataset, it is very difficult to get a true gauge of the 
impact of the weather events. Therefore, we conducted our first data visualization to begin telling the 
story of this data.
### Number of Events by Disaster Type
<img width="592" alt="Screen Shot 2021-10-28 at 6 29 10 PM" src="https://github.com/azmir0218/Severe_Weather/blob/main/Resources/bar1.png">

Our initial visualization represents the total number of weather events for each disaster. As you can 
see, the bar chart shows that there are 43 droughts, 42 floodings, 9 freezes, 426 severe storms, 124 
tropical cyclones, 40 wildfires, and 40 winter storms. There were more winter storms to occur than any
other event over the past 5 years. While that is helpful to know it doesn’t give you a full representation
of how it impacted the US. 
### Number of Deaths by State 
<img width="592" alt="Screen Shot 2021-10-28 at 6 29 10 PM" src="https://github.com/azmir0218/Severe_Weather/blob/main/Resources/map1.png">

We decided that a view of the events as they occurred throughout the US would provide a better 
illustration of how extreme weather events impact each region. Here you can see extreme weather 
events have impacted each state and their community based on the number of deaths that these have
events produced. When you hover over each state you can see the year weather events occurred, the 
type of events, and the number of deaths that happened in each state. The greenest areas represent 
fewer deaths while the browner areas represent more deaths. States like Wisconsin that are greener 
represent locations that experienced fewer deaths than other states. On the reverse, states like North 
Carolina appear to have experienced the most deaths from weather events. Puerto Rico has the 
highest death toll of any other major event that occurred in the US.
### Percentage of Total Damages Cost by Disaster Type
<img width="592" alt="Screen Shot 2021-10-28 at 6 29 10 PM" src="https://github.com/azmir0218/Severe_Weather/blob/main/Resources/pie1png.png">
While this visualization provided many insights on death, we also created a pie chart visual of the 
economic comparison of each event. As presented earlier in the bar chart, we illustrated that there 
were more severe storms than any other event. Conversely, this pie chart illustrates that tropical 
cyclones are the costliest of all event types. Tropical cyclones have caused the most damage 
($1,148.0 billion) and have the highest average event cost ($20.5 billion).
### Time Period Comparisons (Past 4 Decades)
<img width="592" alt="Screen Shot 2021-10-28 at 6 29 10 PM" src="https://github.com/azmir0218/Severe_Weather/blob/main/Resources/stacked1.png">
Each visualization left us with more questions. Ultimately, we wanted to see how the past 5 years 
compared to the past 4 decades of data. Here you can see, 2020 that set the new annual record of 22 
events. During 2021, there were 20 separate weather and climate disaster events across the US that 
cost $145.0 billion. It is the third most costly year on record. Only 2017 and 2005 cost more. The total 
costs for the last five years ($742.1 billion) are more than one-third of the disaster cost total of the last
42-years (1980-2021).
### Conclusion
Over the last 42 years (1980-2021), the years with 10 or more separate disaster events that cost more
than a billion dollars include 1998, 2008, 2011-2013, and 2015-2021.
In the end, producing each visualization was challenging but very rewarding. They provided us with the
level of detailed needed to truly see what that dataset was trying to tell us.

