An internal project started in the Human Genetics Informatics team of the Wellcome Sanger Institute. Built on top of Spack, Softpack offers a user-friendly interface for presenting and creating software environments on the HPC, saving time for researchers and contributing to open science by providing reproducible environments.

As the system administrator for Softpack, I have contributed with:

- Created and maintained over 500 software recipes (instructions to build the software with Spack) upon user requests
- Set up a step-by-step guide and hosted it as a web-based interface to provide a method for users to self-serve.
- Developed an LLM-based agent with Codex CLI and GPT-5 to automatically create and debug recipes through "evolving", i.e. read error logs, change recipe, attempt to install, validate, and repeat the cycle until success.

The goal is to reduce the reliance on a human system administrator so that Softpack can become a viable solution for any other institutions with a similar need for centralised software installation. Publication for this project is in preparation, and work is being presented at GloBIAS 2025 conference in Kobe, Japan. Stay tuned!

For details on the LLM agent, please see my blog post below.

**Blog:**
- [How I (almost) replaced myself with AI](https://medium.com/@eric.hidari/how-i-almost-replaced-myself-with-ai-8478e6b85142)

![Softpack Interface](assets/img/softpack-interface.png)
*Web interface showing tags of all environments*

![Softpack Guide](assets/img/softpack-guide.png)
*Step-by-step guide for managing software recipes*

![LLM Agent](assets/img/softpack-agent-1.png)
*LLM agent interface for automated recipe generation*

![LLM Agent](assets/img/softpack-agent-2.png)
*LLM agent working with live logs*
