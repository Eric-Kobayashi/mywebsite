A collaborative project with the University of Cambridge as a continuation of my postdoctoral research. Starting with quantitative pathology data from analysing postmortem brain tissue images labelled with aggregated tau protein, multiple steps are taken to decipher the information regarding disease mechanism:

- Identify spatial distribution of tau on the cellular level;
- Classify tau aggregate types and associate their quantities with disease phenotypes;
- Build a mathematical model to simulate different tau seeding scenarios and compare them with the above image analysis results.

As the image analysis expert, I have contributed with:

- Designed the image analysis workflow using StarDist in QuPath for cellular segmentation;
- Conducted semi-automatic segmentation of brain tissue images into grey and white matter for downstream analysis;
- Deployed the analysis as a Nextflow pipeline in Singularity container, and set up running jobs on the HPC cluster.

![Tau Analysis](assets/img/tau-schematic.png)
*Schematic of the analysis workflow* 

![Tau Analysis](assets/img/tau-flow.svg)
*Nextflow pipeline* 

Some parts of the code (including the Nextflow pipeline) are still in development. The QuPath scripts developed back in my postdoctoral research are made available [here](https://github.com/Eric-Kobayashi/bankofbrain).


**Publications related to this work:**
- [In vivo rate-determining steps of tau seed accumulation in Alzheimer's disease](https://doi.org/10.1126/sciadv.abh1448), Science Advances, 2021, 7(44), eabh1448, doi: 10.1126/sciadv.abh1448
- [Accurate digital quantification of tau pathology in progressive supranuclear palsy](https://doi.org/10.1186/s40478-023-01674-y), Acta Neuropathologica Communications, 2023, 11(1), 178, doi: 10.1186/s40478-023-01674-y
- [Tau accumulation patterns in PSP constrain mechanisms and quantify cell-to-cell and cell-autonomous aggregation rates](http://medrxiv.org/content/early/2024/12/17/2024.12.14.24318991.abstract), medRxiv, 2024, doi: 10.1101/2024.12.14.24318991
- [A cell-level model to predict the spatiotemporal dynamics of neurodegenerative disease](https://arxiv.org/abs/2508.15046), arXiv, 2025, doi: 10.48550/arXiv.2508.15046

