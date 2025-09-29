This is a dashboard visualisation project for Softpack (see the project page for more details). We wanted to analyse the creation and usage of different environments, divided by faculty group. We also wanted to explore the landscape of environments and their inter relationship.

I pushed vibe coding to the limit and was able to achieve a dashboard that is multi-functional, interactive and fast-loading. The technology I (or rather, the LLM) used were plotly, dash, multiple ETL (extract, transform, load) from datasources (LDAP, GitHub, sqlite3), tSNE for dimensionality reduction.

![environment report dashboard](assets/img/environment-report-dashboard.png)
*Environment dashboard showing lifetime vs usage*

![environment report by faculty](assets/img/environment-report-faculty.png)
*Environment usage report by faculty group*

![environment report relationships](assets/img/environment-report-relationships.png)
*tSNE plot of environment relationships*
