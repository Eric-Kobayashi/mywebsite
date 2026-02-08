A cohort quality control project for the [ALSPAC](https://www.bristol.ac.uk/alspac/) whole-exome sequencing dataset (~22,000 samples across two batches) at the Wellcome Sanger Institute. The goal was to produce a clean, analysis-ready VCF by systematically removing contaminated, mislabelled, and outlier samples, and filtering low-quality variants and genotypes.

Using the WxS-QC pipeline developed at WSI, I performed the following steps:

- Called variants with a customised [SAREK](https://github.com/wtsi-hgi/sarek) pipeline using [GATK4 HaplotypeCaller](https://gatk.broadinstitute.org/hc/en-us/articles/360037225632-HaplotypeCaller), with per-sample calling followed by joint genotyping;
- Annotated variants with [VEP](https://github.com/Ensembl/ensembl-vep) 113.4 and plugins ([LoF](https://github.com/konradjk/loftee), [CADD](https://cadd.gs.washington.edu/), [AlphaMissense](https://github.com/google-deepmind/alphamissense), [REVEL](https://sites.google.com/site/revelgenomics/), [SpliceAI](https://github.com/Illumina/SpliceAI));
- Detected and removed contaminated samples using [VerifyBamID](https://github.com/Griffan/VerifyBamID) (Freemix score >= 0.05);
- Assigned individuals to populations via PCA projection (gnomAD v3 approach) with [1000 Genomes](https://www.internationalgenome.org/) reference, then identified and removed metric outliers within EUR and non-EUR subgroups using linear regression and 4-MAD filtering;
- Trained a random forest model on GATK truth sets to rank variant quality into 100 bins, and evaluated different combinations of RF bin and genotype-level hard filters (GQ, DP, AB, call rate) using GIAB NA12878 precision/recall and transmitted/untransmitted singleton ratios;
- Selected three filter stringency levels (Relaxed, Medium, Stringent) for both SNVs and indels;
- Cross-checked exome genotypes against microarray data (liftover GRCh37 to GRCh38, [bcftools gtcheck](https://samtools.github.io/bcftools/howtos/gtcheck.html)) and removed discordant samples;
- Verified within-trio relatedness using [Hail PC-Relate](https://hail.is/docs/0.2/methods/relatedness.html#hail.methods.pc_relate) and removed unrelated or duplicate samples;
- Produced two final VCFs: one annotated with per-filter pass/fail flags, and one with the stringent filter applied.

![Mutation spectra before and after QC](assets/img/wes-qc-mutation-spectra.png)
*QC improves mutation spectra by removing low-quality genotypes*

**Pipeline:**
- [WxS-QC — cohort QC pipeline for WGS/WES](https://github.com/wtsi-hgi/wxs-qc)

**Publications related to this work:**
- [WxS-QC — a quality control pipeline for human Whole-Genome and Whole-Exome sequencing cohorts](https://www.biorxiv.org/content/biorxiv/early/2025/12/17/2025.12.15.694327.full.pdf), bioRxiv, 2025, doi: 10.1101/2025.12.15.694327
