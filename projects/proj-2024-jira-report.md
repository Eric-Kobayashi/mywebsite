I was responsible for migrating our service desk from RT (Request Tracker) to Jira. As part of the migration, I created the web application for viewing stalled tickets and their details for different Jira boards in our team depending on their needs. 

The project was took on light-heartedly, as I initially just wanted to replicate the RT report that we used to screenshot for the team meeting. As I collected more feedback, the application gradually becomes more useful for the team and been integrated into weekly meeting agenda.

Also worth mentioning is that the project was almost exclusively vibe coded! Time was November 2024 and the word "vibe coding" was not even coined yet. I used Claude Sonnet 3.5 (at the time the best model for coding) to explore the API of Jira, the plotly and dash libraries, as well as Docker and docker compose for containerised deployment. I prompted AI with requirements and design preferences. It took practice, but eventually it exceeded my expectations, and I never looked back :D It really started a new way of writing software for me that feels highly productive.

![Jira Report Board](assets/img/jira-report-board.png)
*The application showing stalled tickets and links to the actual Jira page* 

![Jira Issue Tracker](assets/img/jira-report-tre.png)
*Time series plot to visualise the average response time for a specific project*


